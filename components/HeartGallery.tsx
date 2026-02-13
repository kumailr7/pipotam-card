
import React, { useState } from 'react';
import { X, Heart, Maximize2 } from 'lucide-react';

const IMAGES = [
  { url: '/WhatsApp Image 2026-01-31 at 1.47.09 PM.jpeg', title: 'Pipotam Portrait', desc: 'My favorite face in the whole world.' },
  { url: '/WhatsApp Image 2026-01-31 at 6.29.15 PM.jpeg', title: 'By the Pond', desc: 'Thinking about you in every beautiful place.' },
  { url: '/WhatsApp Image 2026-01-31 at 6.29.17 PM.jpeg', title: 'Pure Joy', desc: 'That laugh is what keeps me going.' },
  { url: '/WhatsApp Image 2026-02-10 at 12.20.26 PM.jpeg', title: 'Golden Bloom', desc: 'You are more beautiful than any flower.' },
];

const HeartGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof IMAGES[0] | null>(null);

  return (
    <div className="w-full max-w-5xl animate-fade-in px-4">
      <div className="text-center mb-12">
        <h2 className="pixel-font text-3xl text-white mb-2 drop-shadow-lg blur-text">
          PICTURE PERFECT
        </h2>
        <p className="text-pink-100 italic playfair text-xl">My world in photos.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {IMAGES.map((img, idx) => (
          <div 
            key={idx}
            onClick={() => setSelectedImage(img)}
            className="group relative cursor-pointer overflow-hidden rounded-3xl glass-card transition-all transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,105,180,0.3)] border-white/20"
          >
            <div className="aspect-[4/5] overflow-hidden bg-black/40">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
              <h4 className="pixel-font text-sm text-pink-400 mb-2">{img.title}</h4>
              <p className="text-white/90 text-lg font-light italic leading-snug">{img.desc}</p>
              <Maximize2 className="absolute top-6 right-6 text-white/50 w-6 h-6 group-hover:text-white transition-colors" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 glass-card rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="max-w-4xl w-full flex flex-col items-center gap-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative glass-card p-2 rounded-3xl overflow-hidden shadow-2xl border-white/30">
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-h-[80vh] w-auto object-contain rounded-2xl"
              />
              <div className="absolute top-4 right-4 bg-pink-600 rounded-full p-2 shadow-lg">
                <Heart className="w-6 h-6 text-white fill-current animate-pulse" />
              </div>
            </div>
            <div className="text-center text-white space-y-3 max-w-xl">
              <h3 className="pixel-font text-2xl text-pink-400 tracking-widest">{selectedImage.title}</h3>
              <p className="playfair italic text-3xl opacity-90 font-light leading-relaxed">"{selectedImage.desc}"</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-20 p-16 glass-card rounded-[3rem] text-center border-dashed border-2 border-white/10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <p className="text-3xl md:text-4xl text-white playfair mb-8 italic relative z-10 leading-relaxed">
          "Every photo is a memory of a beautiful heart <br/> I'm lucky to call mine."
        </p>
        <div className="flex justify-center gap-6 relative z-10">
           {[1,2,3,4,5].map(i => (
             <Heart 
               key={i} 
               className="text-pink-500 fill-current w-8 h-8 animate-bounce" 
               style={{ animationDelay: `${i*0.15}s` }} 
             />
           ))}
        </div>
      </div>
    </div>
  );
};

export default HeartGallery;
