import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Share2, Instagram, MessageCircle, Linkedin, Copy, Download, Users, Heart, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SocialViralSection = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const socialPosts = [
    {
      platform: "Instagram",
      user: "@priya_iitd",
      content: "Just donated ₹100 to #50ForPunjab! Who's next? 🙏 Challenge accepted from @rahul_bits",
      likes: 247,
      time: "2 mins ago",
      university: "IIT Delhi"
    },
    {
      platform: "LinkedIn",
      user: "Arjun Sharma",
      content: "Proud that UPES students raised ₹2L+ for Punjab relief in just 2 days! 💪 #StudentsForPunjab",
      likes: 156,
      time: "5 mins ago",
      university: "UPES"
    },
    {
      platform: "WhatsApp",
      user: "DU Students Group",
      content: "500+ DU students already donated! Let's get to #1 on the leaderboard 🚀",
      likes: 89,
      time: "12 mins ago",
      university: "Delhi University"
    }
  ];

  const challengeTemplates = [
    {
      title: "₹50 Challenge",
      description: "Tag 3 friends to donate ₹50 each",
      hashtags: "#50ForPunjab #StudentsForChange #PunjabRelief",
      template: "I just donated ₹50 to help Punjab flood victims through @Campus2Relief! 🙏\n\n₹50 = 2 meals for a family 🍽️\n\nChallenging [Tag 3 friends] to do the same!\n\n#50ForPunjab #StudentsForChange"
    },
    {
      title: "University Pride",
      description: "Show your campus spirit",
      hashtags: "#[YourUniversity]ForPunjab #CampusPride",
      template: "Proud to be from [Your University]! We're on the leaderboard for Punjab relief 💪\n\nEvery student matters. Every ₹50 counts.\n\nJoin us: [donation link]\n\n#[YourUniversity]ForPunjab"
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Share text copied to clipboard"
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Make It Viral — Amplify the Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Share your donation, challenge friends, and help us reach every campus in India
          </p>
        </div>

        {/* Live Social Wall */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              Live Social Wall — #50ForPunjab
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {socialPosts.map((post, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      {post.platform === "Instagram" && <Instagram className="h-5 w-5 text-pink-600" />}
                      {post.platform === "LinkedIn" && <Linkedin className="h-5 w-5 text-blue-600" />}
                      {post.platform === "WhatsApp" && <MessageCircle className="h-5 w-5 text-green-600" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">{post.user}</span>
                        <Badge variant="outline" className="text-xs">{post.university}</Badge>
                        <span className="text-sm text-muted-foreground">{post.time}</span>
                      </div>
                      <p className="text-sm mb-2">{post.content}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3 fill-current text-red-500" />
                          {post.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Challenge Templates */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                Ready-to-Share Templates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {challengeTemplates.map((template, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{template.title}</h4>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => copyToClipboard(template.template)}
                      className="flex items-center gap-1"
                    >
                      <Copy className="h-3 w-3" />
                      {copied ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                  
                  <div className="bg-muted/30 rounded p-3 text-sm mb-3">
                    {template.template.split('\n').map((line, i) => (
                      <div key={i} className={line.startsWith('#') ? 'text-primary font-medium' : ''}>
                        {line || <br />}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {template.hashtags.split(' ').map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Share Tools */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-6 w-6 text-secondary" />
                Share & Challenge Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Auto-Generated Poster */}
              <div className="text-center">
                <div className="w-full h-32 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3">
                  Your University + QR Code Poster
                </div>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Generate My University Poster
                </Button>
              </div>

              {/* Share Buttons */}
              <div className="space-y-3">
                <h4 className="font-semibold">Quick Share</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-12 flex items-center gap-2">
                    <Instagram className="h-5 w-5 text-pink-600" />
                    Instagram Story
                  </Button>
                  <Button variant="outline" className="h-12 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="h-12 flex items-center gap-2">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" className="h-12 flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    Facebook
                  </Button>
                </div>
              </div>

              {/* Referral Link */}
              <div className="space-y-3">
                <h4 className="font-semibold">Your Referral Link</h4>
                <div className="flex gap-2">
                  <div className="flex-1 bg-muted/30 rounded px-3 py-2 text-sm font-mono">
                    campus2relief.org/r/your-id
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => copyToClipboard("https://campus2relief.org/r/your-id")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Track how many friends donate through your link!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Campus Ambassador Program */}
        <Card className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 shadow-lg">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Become a Campus Ambassador</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lead the movement at your university. Get exclusive badges, certificates, and recognition.
              Help us reach every student on your campus.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="text-sm px-3 py-1">🏆 Leadership Badge</Badge>
              <Badge className="text-sm px-3 py-1">📜 Certificate</Badge>
              <Badge className="text-sm px-3 py-1">🎁 Exclusive Merch</Badge>
              <Badge className="text-sm px-3 py-1">💼 LinkedIn Recognition</Badge>
            </div>
            <Button className="mt-6" size="lg">
              Apply to be Ambassador
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialViralSection;