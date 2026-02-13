
import React, { useEffect, useState } from 'react';

const PixelBackground: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: string; size: string; opacity: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [
        ...prev.slice(-20),
        {
          id: Date.now(),
          left: `${Math.random() * 100}%`,
          duration: `${10 + Math.random() * 15}s`,
          size: `${20 + Math.random() * 40}px`,
          opacity: 0.1 + Math.random() * 0.4
        }
      ]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-300 via-pink-400 to-rose-500 opacity-60">
      {/* Pixelated Grid Layer */}
      <div className="absolute inset-0 opacity-20" style={{ 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.15) 2px, transparent 2px)', 
        backgroundSize: '40px 40px' 
      }}></div>

      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart-particle flex items-center justify-center"
          style={{
            left: heart.left,
            '--duration': heart.duration,
          } as React.CSSProperties}
        >
          {/* Specific Pixel Heart Polygon as requested */}
          <div 
            className="bg-white pixel-heart-shape" 
            style={{ 
              width: heart.size, 
              height: heart.size, 
              opacity: heart.opacity,
              filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.1))'
            }} 
          />
        </div>
      ))}
    </div>
  );
};

export default PixelBackground;
