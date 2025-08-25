import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

export default function LoadingScreen({ onLoadComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onLoadComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-500 ${
      fadeOut ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="text-center">
        <div className="mb-8 animate-pulse">
          <img 
            src="/Logos from Jakob Thompson_1750429186304.png" 
            alt="Sonny Harbor Media" 
            className="max-w-md mx-auto h-auto"
          />
        </div>
        
        {/* Loading dots animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}