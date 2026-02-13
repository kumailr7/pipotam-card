
import React, { useState, useEffect, useCallback } from 'react';
import { Heart, Trophy } from 'lucide-react';

const MiniGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState<{ id: number; top: number; left: number }[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const spawnHeart = useCallback(() => {
    const newHeart = {
      id: Math.random(),
      top: 20 + Math.random() * 60,
      left: 10 + Math.random() * 80,
    };
    setHearts(prev => [...prev, newHeart]);
    
    // Auto-remove heart after 2 seconds if not clicked
    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 2000);
  }, []);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(spawnHeart, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, spawnHeart]);

  const handleCatch = (id: number) => {
    setScore(s => s + 1);
    setHearts(prev => prev.filter(h => h.id !== id));
  };

  return (
    <div className="w-full max-w-xl bg-black/60 p-6 pixel-border relative overflow-hidden h-[500px] flex flex-col items-center">
      <div className="flex justify-between w-full mb-4 relative z-10">
        <div className="pixel-font text-sm text-yellow-400">SCORE: {score.toString().padStart(4, '0')}</div>
        <div className="pixel-font text-sm text-pink-400">LVL: {(Math.floor(score/10) + 1)}</div>
      </div>

      {!isPlaying ? (
        <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
          <Heart className="w-20 h-20 text-pink-500 animate-pulse fill-current" />
          <h2 className="pixel-font text-2xl uppercase">CATCH THE PIPOTAM HEARTS</h2>
          <p className="text-xl max-w-xs">Show your love! Click the hearts as fast as you can to increase your affection score.</p>
          <button 
            onClick={() => setIsPlaying(true)}
            className="pixel-button text-xl px-12 py-4"
          >
            START QUEST
          </button>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {hearts.map(heart => (
            <button
              key={heart.id}
              onClick={() => handleCatch(heart.id)}
              className="absolute transition-transform hover:scale-125 focus:outline-none"
              style={{ top: `${heart.top}%`, left: `${heart.left}%` }}
            >
              <Heart className="w-12 h-12 text-pink-500 fill-current drop-shadow-[2px_2px_0px_#000]" />
            </button>
          ))}
          
          {score >= 50 && (
             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20 animate-fade-in text-center p-4">
                <Trophy className="w-16 h-16 text-yellow-400 mb-4" />
                <h3 className="pixel-font text-xl text-yellow-400 mb-2">MAX AFFECTION REACHED!</h3>
                <p className="text-xl mb-6">Crizel "Pipotam" loves you 3000!</p>
                <button onClick={() => {setScore(0); setIsPlaying(false)}} className="pixel-button">MAIN MENU</button>
             </div>
          )}
        </div>
      )}

      {isPlaying && (
        <button 
          onClick={() => setIsPlaying(false)}
          className="absolute top-4 right-4 text-xs opacity-50 hover:opacity-100"
        >
          [QUIT]
        </button>
      )}
    </div>
  );
};

export default MiniGame;
