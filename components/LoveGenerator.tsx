
import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Loader2, Heart, Send } from 'lucide-react';

interface LoveGeneratorProps {
  nickname: string;
  realName: string;
}

const LoveGenerator: React.FC<LoveGeneratorProps> = ({ nickname, realName }) => {
  const [loading, setLoading] = useState(false);
  const [poem, setPoem] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const generatePoem = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Write a short, incredibly sweet, romantic, and playful Valentine's message for my girlfriend Crizel, whom I also call "${nickname}". Use a retro "pixel art" or "RPG adventure" metaphor (like leveling up together, hearts as HP, saving each other). Keep it under 150 words. End with a sweet "XOXO".`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setPoem(response.text || "Failed to find the words to say how much I love you...");
    } catch (err) {
      console.error(err);
      setError("The AI got too shy... try again!");
    } finally {
      setLoading(false);
    }
  }, [nickname]);

  return (
    <div className="w-full max-w-2xl flex flex-col items-center">
      <div className="bg-white text-pink-600 p-8 pixel-border w-full shadow-[8px_8px_0px_rgba(0,0,0,0.2)]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="pixel-font text-xl uppercase">The Heart Terminal</h3>
          <Heart className="animate-pulse fill-current" />
        </div>
        
        <div className="min-h-[200px] border-4 border-dashed border-pink-200 p-6 bg-pink-50 mb-6 font-mono text-xl whitespace-pre-wrap leading-relaxed">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full gap-4">
              <Loader2 className="w-12 h-12 animate-spin text-pink-400" />
              <p className="pixel-font text-xs animate-bounce">SUMMONING LOVE BITS...</p>
            </div>
          ) : poem ? (
            <div className="animate-fade-in text-pink-900">
               {poem}
            </div>
          ) : (
            <div className="text-center text-pink-300 italic">
              Click the button below to generate a unique love spell for Crizel...
            </div>
          )}
        </div>

        {error && (
          <p className="text-red-500 mb-4 pixel-font text-xs text-center">{error}</p>
        )}

        <button
          onClick={generatePoem}
          disabled={loading}
          className="pixel-button w-full flex items-center justify-center gap-3 text-lg disabled:opacity-50"
        >
          {loading ? "GENERATING..." : (
            <>
              GENERATE NEW LOVE MESSAGE <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
      
      <p className="mt-4 text-white/70 pixel-font text-[10px] text-center">
        POWRED BY HEART.SYS & GEMINI-AI.V3
      </p>
    </div>
  );
};

export default LoveGenerator;
