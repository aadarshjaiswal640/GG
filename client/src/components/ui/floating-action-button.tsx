import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Rocket } from "lucide-react";

interface FloatingActionButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function FloatingActionButton({ 
  href, 
  text, 
  icon = <Rocket className="w-5 h-5" />,
  className = "" 
}: FloatingActionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed bottom-6 right-6 z-50 
        bg-gradient-to-r from-primary to-cyan-400 
        text-black font-semibold text-lg
        px-6 py-4 rounded-full
        shadow-2xl border-2 border-primary/30
        transition-all duration-300 ease-out
        hover:scale-110 hover:shadow-primary/50
        animate-pulse-glow
        ${isHovered ? 'animate-none shadow-primary/60' : ''}
        ${className}
      `}
    >
      <div className="flex items-center space-x-2">
        {icon}
        <span className="hidden sm:inline">{text}</span>
        <ExternalLink className="w-4 h-4" />
      </div>
      
      {/* Ripple effect */}
      <div className={`
        absolute inset-0 rounded-full
        bg-gradient-to-r from-primary/30 to-cyan-400/30
        transition-all duration-500
        ${isHovered ? 'scale-150 opacity-0' : 'scale-100 opacity-0'}
      `} />
    </Button>
  );
}