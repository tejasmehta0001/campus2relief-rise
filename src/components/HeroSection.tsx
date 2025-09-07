import { Heart, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Students standing together for Punjab relief" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            If every student gives{" "}
            <span className="text-primary bg-primary/10 px-4 py-2 rounded-lg border border-primary/30">
              ₹50
            </span>
            ,<br />Punjab can rise again.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Join students across India — instant impact, full transparency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary-hover text-white font-bold py-6 px-12 text-xl animate-donation-pulse transition-all duration-300 hover:scale-105"
            >
              <Heart className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Donate ₹50 — One Tap
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 py-6 px-8 text-lg backdrop-blur-sm"
            >
              How funds are used
              <TrendingUp className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-400" />
              <span>Verified NGO Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-400" />
              <span>Full Transparency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;