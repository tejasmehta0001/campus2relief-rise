import { useState, useEffect } from "react";
import { Heart, X } from "lucide-react";
import DonationButton from "./DonationButton";

const FloatingDonationButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after user scrolls past hero section
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'scale-75' : 'scale-100'}`}>
      {!isMinimized ? (
        <div className="bg-white rounded-lg shadow-2xl border border-primary/20 p-4 max-w-xs animate-fade-in-up">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-primary">Quick Donate</span>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-muted-foreground mb-3">
            ₹50 = 2 meals for a family
          </p>
          <DonationButton />
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-primary hover:bg-primary-hover text-white rounded-full p-4 shadow-2xl animate-donation-pulse transition-all duration-300 hover:scale-110"
        >
          <Heart className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default FloatingDonationButton;