import { Star } from 'lucide-react';

interface EyebrowProps {
  number?: string;
  text: string;
  className?: string;
}

export function Eyebrow({ number, text, className = '' }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-2 mb-4 ${className}`}>
      
      {number && <span className="text-[#E63995] font-semibold text-xs tracking-[0.15em] uppercase">{number}</span>}
      {number && <span className="text-[#E63995]">·</span>}
      
    </div>
  );
}
