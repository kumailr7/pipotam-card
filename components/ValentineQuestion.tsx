import React, { useState, useRef } from 'react';
import { Heart } from 'lucide-react';

interface ValentineQuestionProps {
  onAccept: () => void;
}

const ValentineQuestion: React.FC<ValentineQuestionProps> = ({ onAccept }) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [isExploding, setIsExploding] = useState(false);
  const [explosionHearts, setExplosionHearts] = useState<{ id: number; left: number; top: number; size: number; color: string; delay: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoInteraction = () => {
    const randomX = (Math.random() - 0.5) * 400;
    const randomY = (Math.random() - 0.5) * 400;
    setNoPos({ x: randomX, y: randomY });
  };

  const triggerExplosion = () => {
    setIsExploding(true);
    const newHearts = Array.from({ length: 100 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      top: 30 + Math.random() * 50,
      size: 30 + Math.random() * 60,
      color: ['#ff0000', '#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1', '#ffffff'][Math.floor(Math.random() * 6)],
      delay: Math.random() * 0.8,
    }));
    setExplosionHearts(newHearts);
    
    setTimeout(() => {
      onAccept();
    }, 2800);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl flex flex-col items-center justify-center min-h-[600px] py-20">
      {isExploding && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          {explosionHearts.map(h => (
            <div 
              key={h.id}
              className="burst-heart"
              style={{ 
                left: `${h.left}%`, 
                top: `${h.top}%`,
                color: h.color,
                animationDelay: `${h.delay}s`
              }}
            >
              <svg viewBox="0 0 10 10" className="fill-current" style={{ width: h.size, height: h.size }}>
                <path d="M2 1h2v1h2V1h2v1h1v2h-1v1H8v1H7v1H6v1H5V7H4V6H3V5H2V4H1V2h1V1z" />
              </svg>
            </div>
          ))}
        </div>
      )}

      <div className={`glass-card p-14 rounded-[3rem] text-center shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all duration-700 ${isExploding ? 'opacity-0 scale-150 rotate-12 blur-2xl' : 'opacity-100 scale-100'}`}>
        <Heart className="w-20 h-20 text-pink-500 mx-auto mb-10 fill-current animate-pulse drop-shadow-[0_0_20px_rgba(255,45,85,0.5)]" />
        <h2 className="pixel-font text-3xl md:text-4xl text-white mb-16 leading-relaxed blur-text">
          MAHIMO BA KA NGA AKONG <br/><span className="text-pink-400">VALENTINE</span>, <br/> PIPOTAM? ❤️
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center relative min-h-[100px]">
          <button 
            onClick={triggerExplosion}
            className="pixel-button text-3xl py-10 px-20 group z-20 shadow-[0_12px_0_#8b0000] active:shadow-none active:translate-y-2 hover:bg-pink-400"
          >
            OO / YES! <Heart className="inline ml-3 w-10 h-10 group-hover:fill-white transition-colors animate-bounce" />
          </button>
          
          <button 
            onMouseEnter={handleNoInteraction}
            onClick={handleNoInteraction}
            style={{ 
                transform: `translate(${noPos.x}px, ${noPos.y}px)`,
                transition: 'transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)' 
            }}
            className="pixel-button secondary text-xl py-5 px-10 z-10 opacity-70"
          >
            DILI / NO
          </button>
        </div>
        
        <p className="mt-16 text-white/40 pixel-font text-[12px] tracking-widest uppercase italic">Select 'OO' to unlock secret content</p>
      </div>
    </div>
  );
};

export default ValentineQuestion;