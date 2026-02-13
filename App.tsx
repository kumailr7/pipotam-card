
import React, { useState } from 'react';
import { Heart, Stars, Gamepad2, MessageCircleHeart, Sparkles, Image as ImageIcon } from 'lucide-react';
import PixelBackground from './components/PixelBackground';
import LoveGenerator from './components/LoveGenerator';
import HeartGallery from './components/HeartGallery';
import MiniGame from './components/MiniGame';
import ValentineQuestion from './components/ValentineQuestion';
import PixelCouple from './components/PixelCouple';
import Watermark from './components/Watermark';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'letter' | 'game' | 'gallery' | 'proposal'>('home');
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccepted = () => {
    setIsAccepted(true);
    setActiveTab('home'); 
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col selection:bg-pink-300 selection:text-pink-900">
      {/* Scenic Background Container - Using the pond scenery */}
      <div className="fixed inset-0 z-0">
        <img 
          src="/input_file_0.svg" 
          alt="Scenic background" 
          className="w-full h-full object-cover brightness-75 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      <PixelBackground />
      
      {(!isAccepted && activeTab !== 'proposal') && (
        <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-2 md:gap-4 glass-card p-3 rounded-2xl">
          <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center p-3 transition-all rounded-xl ${activeTab === 'home' ? 'bg-white/20 text-white scale-110 shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
            <Heart className="w-5 h-5" />
            <span className="text-[10px] mt-1 pixel-font">Home</span>
          </button>
          <button onClick={() => setActiveTab('gallery')} className={`flex flex-col items-center p-3 transition-all rounded-xl ${activeTab === 'gallery' ? 'bg-white/20 text-white scale-110 shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
            <ImageIcon className="w-5 h-5" />
            <span className="text-[10px] mt-1 pixel-font">Pics</span>
          </button>
          <button onClick={() => setActiveTab('letter')} className={`flex flex-col items-center p-3 transition-all rounded-xl ${activeTab === 'letter' ? 'bg-white/20 text-white scale-110 shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
            <MessageCircleHeart className="w-5 h-5" />
            <span className="text-[10px] mt-1 pixel-font">Love</span>
          </button>
          <button onClick={() => setActiveTab('game')} className={`flex flex-col items-center p-3 transition-all rounded-xl ${activeTab === 'game' ? 'bg-white/20 text-white scale-110 shadow-lg' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
            <Gamepad2 className="w-5 h-5" />
            <span className="text-[10px] mt-1 pixel-font">Game</span>
          </button>
        </nav>
      )}

      <main className="container mx-auto px-4 pt-12 pb-32 relative z-10 flex flex-col items-center flex-grow">
        
        {activeTab === 'home' && !isAccepted && (
          <div className="text-center max-w-2xl flex flex-col items-center">
            <PixelCouple />
            <h1 className="pixel-font text-3xl md:text-5xl my-8 drop-shadow-2xl blur-text tracking-tighter text-white">
              HI PIPOTAM! 💖
            </h1>
            <div className="glass-card p-10 rounded-3xl mb-8 border-white/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-all">
              <p className="text-3xl md:text-4xl leading-relaxed italic mb-10 text-white playfair drop-shadow-md">
                "Every pixel of this page is made with love, just like every moment I spend thinking about you."
              </p>
              <button 
                onClick={() => setActiveTab('proposal')}
                className="pixel-button text-2xl px-12 py-7 animate-pulse shadow-[0_8px_0_#8b0000] rounded-lg"
              >
                OPEN HEART.EXE 💾
              </button>
            </div>
            <p className="text-sm pixel-font opacity-80 text-white tracking-[0.2em]">VALENTINE EDITION v2.1</p>
          </div>
        )}

        {activeTab === 'proposal' && (
          <ValentineQuestion onAccept={handleAccepted} />
        )}

        {activeTab === 'letter' && <LoveGenerator nickname="Pipotam" realName="Crizel" />}
        {activeTab === 'game' && <MiniGame />}
        {activeTab === 'gallery' && <HeartGallery />}

        {isAccepted && activeTab === 'home' && (
           <div className="text-center animate-fade-in flex flex-col items-center max-w-4xl py-10">
             <PixelCouple heart />
             <div className="glass-card p-12 rounded-[2rem] mt-8 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-white/40">
               <h1 className="pixel-font text-3xl md:text-5xl text-white mb-8 drop-shadow-[4px_4px_0px_#ff2d55] blur-text uppercase tracking-tight">MAHAL KITA PANLANGA ❤️</h1>
               <div className="space-y-8 text-white">
                 <p className="text-2xl md:text-4xl leading-[1.4] playfair font-bold drop-shadow-lg">
                   "i love you my life and thank you so being in my life and making me always happy"
                 </p>
                 <div className="h-px w-32 bg-white/30 mx-auto my-6" />
                 <p className="text-xl md:text-2xl italic font-light text-pink-100 italic">
                   "thank you kuyaanaa taggal HAHAHAHAHA"
                 </p>
               </div>
               <div className="mt-12 flex justify-center gap-6">
                 <Heart className="w-16 h-16 text-red-500 fill-current animate-bounce shadow-inner" />
                 <Heart className="w-16 h-16 text-red-400 fill-current animate-bounce delay-150" />
                 <Heart className="w-16 h-16 text-red-500 fill-current animate-bounce delay-300" />
               </div>
             </div>
             
             <button 
                onClick={() => setIsAccepted(false)} 
                className="mt-12 pixel-button secondary opacity-60 hover:opacity-100"
              >
                RESTART MISSION
              </button>
           </div>
        )}
      </main>

      <Watermark />
    </div>
  );
};

export default App;
