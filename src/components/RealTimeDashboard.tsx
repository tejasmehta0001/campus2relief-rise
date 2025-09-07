import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Home, Utensils } from "lucide-react";

const RealTimeDashboard = () => {
  // Mock real-time data (would be connected to Supabase real-time)
  const stats = {
    totalRaised: 2847650, // ₹28,47,650
    totalDonors: 5694,
    familiesHelped: 1138,
    goal: 10000000, // ₹1 Crore
  };

  const progress = (stats.totalRaised / stats.goal) * 100;

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
    return `₹${amount}`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Live Impact Dashboard
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time updates from students across India
          </p>
        </div>

        {/* Main Progress Card */}
        <Card className="mb-8 shadow-lg border-0 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">Fundraising Progress</CardTitle>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Raised</span>
                <span>Goal: ₹1 Crore</span>
              </div>
              <Progress value={progress} className="h-4" />
              <div className="text-4xl md:text-6xl font-bold text-primary animate-counter-up">
                {formatCurrency(stats.totalRaised)}
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-blue-600 animate-counter-up">
                {stats.totalDonors.toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Student Donors</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-center mb-2">
                <Home className="h-8 w-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-secondary animate-counter-up">
                {stats.familiesHelped.toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Families Helped</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-center mb-2">
                <Utensils className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-primary animate-counter-up">
                {(stats.familiesHelped * 2).toLocaleString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Meals Provided</p>
            </CardContent>
          </Card>
        </div>

        {/* Live Feed */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              Live Donation Feed
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 max-h-80 overflow-y-auto">
            {/* Mock live donations - would be real-time from Supabase */}
            {[
              { name: "Priya S.", university: "UPES Dehradun", amount: 100, time: "2 mins ago" },
              { name: "Rahul K.", university: "IIT Delhi", amount: 50, time: "3 mins ago" },
              { name: "Anonymous", university: "DU", amount: 500, time: "5 mins ago" },
              { name: "Sneha M.", university: "VIT", amount: 50, time: "7 mins ago" },
              { name: "Arjun P.", university: "NIT Kurukshetra", amount: 200, time: "9 mins ago" },
            ].map((donation, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <Heart className="h-4 w-4 text-primary" />
                  <div>
                    <span className="font-medium">{donation.name}</span>
                    <span className="text-sm text-muted-foreground ml-2">from {donation.university}</span>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-1">₹{donation.amount}</Badge>
                  <p className="text-xs text-muted-foreground">{donation.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Impact Conversion */}
        <div className="text-center mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
          <h3 className="text-xl font-bold mb-2 text-primary">Your ₹50 Impact</h3>
          <p className="text-muted-foreground">₹50 = 2 meals • ₹500 = 1 home tarp • ₹5,000 = medical kit for 10 families</p>
        </div>
      </div>
    </section>
  );
};

export default RealTimeDashboard;