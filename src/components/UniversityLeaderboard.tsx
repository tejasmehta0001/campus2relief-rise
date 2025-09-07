import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Crown, Medal, Award, TrendingUp, Users } from "lucide-react";

const UniversityLeaderboard = () => {
  // Mock leaderboard data (would be real-time from Supabase)
  const universities = [
    { name: "IIT Delhi", amount: 456750, students: 8234, rank: 1, change: 2 },
    { name: "UPES Dehradun", amount: 387650, students: 6150, rank: 2, change: -1 },
    { name: "DU (Delhi University)", amount: 298450, students: 15680, rank: 3, change: 1 },
    { name: "VIT Vellore", amount: 256800, students: 12450, rank: 4, change: 0 },
    { name: "NIT Kurukshetra", amount: 198350, students: 5650, rank: 5, change: 3 },
    { name: "BITS Pilani", amount: 167200, students: 4980, rank: 6, change: -2 },
    { name: "IIT Bombay", amount: 145600, students: 7650, rank: 7, change: 1 },
    { name: "Manipal Institute", amount: 123450, students: 8950, rank: 8, change: -1 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2: return <Medal className="h-6 w-6 text-gray-400" />;
      case 3: return <Award className="h-6 w-6 text-amber-600" />;
      default: return <Trophy className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (change < 0) return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
    return null;
  };

  const formatCurrency = (amount: number) => {
    if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
    if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
    return `₹${amount}`;
  };

  const maxAmount = Math.max(...universities.map(u => u.amount));

  return (
    <section className="py-16 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            University Battle Mode
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Which campus will raise the most? Get your college to #1
          </p>
          
          {/* Battle Mode Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="font-medium text-primary">Live Battle in Progress</span>
          </div>
        </div>

        {/* Leaderboard */}
        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardTitle className="text-center text-2xl">
              🏆 Top Universities by Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {universities.map((uni, index) => (
                <div 
                  key={uni.name}
                  className={`p-4 hover:bg-muted/50 transition-colors ${
                    index < 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-l-primary' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      {/* Rank */}
                      <div className="flex items-center gap-2 min-w-[60px]">
                        {getRankIcon(uni.rank)}
                        <span className="font-bold text-lg">#{uni.rank}</span>
                        {getChangeIcon(uni.change)}
                      </div>

                      {/* University Info */}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{uni.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {uni.students.toLocaleString()} students
                          </span>
                          <span>₹{(uni.amount / uni.students).toFixed(0)} per student</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mt-2">
                          <Progress 
                            value={(uni.amount / maxAmount) * 100} 
                            className="h-2 animate-leaderboard-rise"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          />
                        </div>
                      </div>

                      {/* Amount */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {formatCurrency(uni.amount)}
                        </div>
                        <Badge variant="secondary" className="mt-1">
                          {((uni.amount / uni.students) * 100).toFixed(1)}% participation
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-700 flex items-center gap-2">
                🏛️ North vs South Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Northern States</span>
                  <Badge className="bg-blue-600">₹12.4L</Badge>
                </div>
                <Progress value={65} className="h-3" />
                <div className="flex justify-between items-center">
                  <span>Southern States</span>
                  <Badge className="bg-purple-600">₹8.9L</Badge>
                </div>
                <Progress value={45} className="h-3" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center gap-2">
                🏫 IITs vs Private Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>IITs & NITs</span>
                  <Badge className="bg-green-600">₹8.2L</Badge>
                </div>
                <Progress value={55} className="h-3" />
                <div className="flex justify-between items-center">
                  <span>Private Universities</span>
                  <Badge className="bg-teal-600">₹9.8L</Badge>
                </div>
                <Progress value={68} className="h-3" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Don't see your university?</h3>
              <p className="text-muted-foreground mb-4">Be the first student from your campus to start the movement!</p>
              <Badge variant="outline" className="text-primary border-primary">
                🚀 Start Your Campus Challenge
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UniversityLeaderboard;