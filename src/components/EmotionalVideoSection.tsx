import { Play, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const EmotionalVideoSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Punjab Needs <span className="text-primary">Your Voice</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how floods have impacted communities and how your support is creating hope
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Video 1 - Community Recovery */}
          <Card className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <Play className="w-12 h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold text-sm">Communities Coming Together</h3>
                <p className="text-white/80 text-xs">Villages supporting each other through crisis</p>
              </div>
            </div>
          </Card>

          {/* Video 2 - Infrastructure Impact */}
          <Card className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-orange-200 to-orange-100 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <Play className="w-12 h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold text-sm">Rebuilding Homes & Schools</h3>
                <p className="text-white/80 text-xs">Infrastructure damage and recovery efforts</p>
              </div>
            </div>
          </Card>

          {/* Video 3 - Hope Stories */}
          <Card className="relative overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <div className="aspect-video bg-gradient-to-br from-green-200 to-green-100 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <Play className="w-12 h-12 text-white drop-shadow-lg group-hover:scale-110 transition-transform" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold text-sm">Stories of Resilience</h3>
                <p className="text-white/80 text-xs">How relief efforts are creating hope</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">12,000+</div>
            <div className="text-sm text-muted-foreground">Families Affected</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">450+</div>
            <div className="text-sm text-muted-foreground">Villages Impacted</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">85%</div>
            <div className="text-sm text-muted-foreground">Crops Destroyed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent">₹50</div>
            <div className="text-sm text-muted-foreground">Feeds 2 People</div>
          </div>
        </div>

        {/* Emotional Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Every ₹50 is a <span className="text-primary">Lifeline</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            While communities rebuild, families need immediate support. Your donation provides meals, 
            clean water, and hope to those who need it most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white font-semibold px-8 py-6 group">
              <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Donate Now — Save Lives
            </Button>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Join 15,000+ students helping Punjab</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalVideoSection;