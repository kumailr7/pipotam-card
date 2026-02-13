import React from 'react';
import { Heart } from 'lucide-react';

const Watermark: React.FC = () => {
  return (
    <footer className="fixed bottom-4 right-6 z-[60] flex items-center gap-2 text-white/30 hover:text-white/80 transition-all cursor-default pointer-events-none md:pointer-events-auto group">
      <span className="text-[10px] pixel-font uppercase tracking-tighter">Site made with love</span>
      <div className="flex items-center gap-1.5">
        <Heart className="w-3 h-3 fill-current text-pink-500/50 group-hover:text-pink-500 transition-colors" />
        <span className="text-[11px] font-bold italic opacity-60 group-hover:opacity-100">by panda kumail 🐼</span>
      </div>
    </footer>
  );
};

export default Watermark;