import { Eyebrow } from './Eyebrow';

interface SectionHeaderProps {
  eyebrowNumber?: string;
  eyebrowText: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrowNumber,
  eyebrowText,
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}>
      <Eyebrow number={eyebrowNumber} text={eyebrowText} className={centered ? 'justify-center' : ''} />
      <h2 className="text-4xl lg:text-5xl font-bold text-[#1A0F3E] mb-4">{title}</h2>
      {subtitle && <p className="text-xl italic text-[#E63995]">{subtitle}</p>}
    </div>
  );
}
