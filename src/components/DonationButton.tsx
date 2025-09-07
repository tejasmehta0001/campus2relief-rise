import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, Shield, Clock, Users, Zap } from "lucide-react";

const DonationButton = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [university, setUniversity] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const presetAmounts = [50, 100, 500, 1000];

  const handleDonate = () => {
    // This would integrate with payment gateway when Supabase is connected
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getImpactText = (amount: number) => {
    if (amount >= 5000) return `Medical kit for ${Math.floor(amount / 500)} families`;
    if (amount >= 500) return `${Math.floor(amount / 500)} home tarps + ${Math.floor((amount % 500) / 50) * 2} meals`;
    return `${Math.floor(amount / 25)} meals for families`;
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary-hover text-white font-bold py-6 px-8 text-lg animate-donation-pulse transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Donate Now
          </Button>
        </DialogTrigger>
        
        <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center text-primary">
              Support Punjab Relief 🙏
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Trust Badges */}
            <div className="flex justify-center gap-4 text-sm">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                Secure
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Instant
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                Transparent
              </Badge>
            </div>

            {/* University Selection */}
            <div className="space-y-2">
              <Label htmlFor="university">Your University (Optional)</Label>
              <Input
                id="university"
                placeholder="Type to search... e.g., UPES, IIT Delhi"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </div>

            {/* Amount Selection */}
            <div className="space-y-3">
              <Label>Choose Amount</Label>
              <div className="grid grid-cols-2 gap-3">
                {presetAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className={`h-16 text-lg font-bold ${
                      selectedAmount === amount 
                        ? "bg-primary hover:bg-primary-hover text-white" 
                        : "hover:bg-primary/10"
                    }`}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                    }}
                  >
                    ₹{amount}
                    {amount === 50 && (
                      <Badge className="ml-2 bg-green-500">Popular</Badge>
                    )}
                  </Button>
                ))}
              </div>
              
              <div className="flex gap-2 items-center">
                <Input
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(parseInt(e.target.value) || 50);
                  }}
                  className="flex-1"
                />
                <span className="text-muted-foreground">₹</span>
              </div>
            </div>

            {/* Impact Preview */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <h4 className="font-semibold text-primary mb-2">Your Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    {getImpactText(selectedAmount)}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <div className="space-y-3">
              <Label>Payment Method</Label>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-12 flex items-center gap-2">
                  💳 UPI
                </Button>
                <Button variant="outline" className="h-12 flex items-center gap-2">
                  🏦 Card
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handleDonate}
                className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary-hover animate-pulse"
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate ₹{selectedAmount} Now
              </Button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Takes 30 seconds • Instant receipt • No hidden fees</span>
              </div>
            </div>

            {/* Legal Footer */}
            <div className="text-xs text-center text-muted-foreground border-t pt-3">
              <p>By donating, you agree to our Terms & Privacy Policy.</p>
              <p>80G tax exemption certificate will be provided.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Animation */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <Card className="bg-white p-8 text-center animate-fade-in-up">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
            <p className="text-muted-foreground">Your donation is making a difference!</p>
          </Card>
        </div>
      )}
    </>
  );
};

export default DonationButton;