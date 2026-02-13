
import React from 'react';

interface PixelCoupleProps {
  heart?: boolean;
}

const PixelCouple: React.FC<PixelCoupleProps> = ({ heart }) => {
  return (
    <div className="flex items-end gap-8 relative py-10 animate-bounce-gentle">
      {/* Boy Character */}
      <div className="w-24 h-32 relative">
        <svg viewBox="0 0 12 16" className="w-full h-full drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
          {/* Hair */}
          <rect x="2" y="0" width="8" height="3" fill="#332211" />
          <rect x="1" y="1" width="10" height="2" fill="#332211" />
          {/* Face */}
          <rect x="2" y="3" width="8" height="5" fill="#ffe0bd" />
          {/* Eyes */}
          <rect x="4" y="5" width="1" height="1" fill="#000" />
          <rect x="7" y="5" width="1" height="1" fill="#000" />
          {/* Shirt */}
          <rect x="2" y="8" width="8" height="6" fill="#4a90e2" />
          {/* Pants */}
          <rect x="3" y="14" width="6" height="2" fill="#2c3e50" />
        </svg>
      </div>

      {heart && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
           <svg viewBox="0 0 10 10" className="w-12 h-12 text-red-500 fill-current animate-pulse">
            <path d="M2 1h2v1h2V1h2v1h1v2h-1v1H8v1H7v1H6v1H5V7H4V6H3V5H2V4H1V2h1V1z" />
          </svg>
        </div>
      )}

      {/* Girl Character (Crizel / Pipotam) */}
      <div className="w-24 h-32 relative">
        <svg viewBox="0 0 12 16" className="w-full h-full drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
          {/* Long Hair */}
          <rect x="1" y="0" width="10" height="4" fill="#5c4033" />
          <rect x="0" y="2" width="2" height="10" fill="#5c4033" />
          <rect x="10" y="2" width="2" height="10" fill="#5c4033" />
          {/* Face */}
          <rect x="2" y="3" width="8" height="5" fill="#ffe0bd" />
          {/* Eyes */}
          <rect x="4" y="5" width="1" height="1" fill="#000" />
          <rect x="7" y="5" width="1" height="1" fill="#000" />
          {/* Blush */}
          <rect x="3" y="6" width="1" height="1" fill="#ffb6c1" />
          <rect x="8" y="6" width="1" height="1" fill="#ffb6c1" />
          {/* Dress */}
          <rect x="2" y="8" width="8" height="7" fill="#ff69b4" />
          <rect x="1" y="11" width="10" height="4" fill="#ff69b4" />
        </svg>
      </div>
    </div>
  );
};

export default PixelCouple;
