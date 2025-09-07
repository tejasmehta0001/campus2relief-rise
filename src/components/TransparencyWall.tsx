import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Download, MapPin, Calendar, Shield, Eye } from "lucide-react";

const TransparencyWall = () => {
  const auditReports = [
    { date: "2024-01-15", amount: "₹8,45,000", families: 338, document: "audit-jan-2024.pdf" },
    { date: "2024-01-08", amount: "₹6,12,000", families: 245, document: "audit-jan-week1-2024.pdf" },
    { date: "2024-01-01", amount: "₹4,28,000", families: 171, document: "audit-dec-2023.pdf" },
  ];

  const fieldReports = [
    {
      id: 1,
      title: "Food Distribution in Malerkotla",
      date: "2 hours ago",
      location: "Malerkotla, Punjab",
      families: 85,
      verified: true,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Tarp Installation in Bathinda",
      date: "1 day ago",
      location: "Bathinda, Punjab",
      families: 62,
      verified: true,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "Medical Camp Setup",
      date: "3 days ago",
      location: "Patiala, Punjab",
      families: 120,
      verified: true,
      image: "/api/placeholder/300/200"
    },
  ];

  const fundAllocation = [
    { category: "Food & Water", percentage: 45, amount: "₹12.8L", color: "bg-green-500" },
    { category: "Temporary Shelter", percentage: 30, amount: "₹8.5L", color: "bg-blue-500" },
    { category: "Medical Aid", percentage: 15, amount: "₹4.3L", color: "bg-red-500" },
    { category: "Admin & Transport", percentage: 10, amount: "₹2.9L", color: "bg-yellow-500" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-trust/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-trust">
            Full Transparency Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every rupee tracked. Every impact verified. Every report public.
          </p>
        </div>

        {/* Fund Allocation */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-6 w-6 text-trust" />
              How Your Money Is Used
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fundAllocation.map((fund) => (
                <div key={fund.category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{fund.category}</span>
                    <div className="text-right">
                      <span className="font-bold">{fund.amount}</span>
                      <Badge variant="secondary" className="ml-2">{fund.percentage}%</Badge>
                    </div>
                  </div>
                  <Progress value={fund.percentage} className="h-3" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Audit Reports */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-trust" />
                Public Audit Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditReports.map((report, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{report.date}</span>
                        </div>
                        <div className="font-semibold">{report.amount} transferred</div>
                        <div className="text-sm text-muted-foreground">
                          Helped {report.families} families
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        PDF
                      </Button>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  View All Audit Reports
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Field Reports */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-secondary" />
                Live Field Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {fieldReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                        📷
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-sm">{report.title}</h4>
                          {report.verified && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                              ✓ Verified
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {report.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {report.date}
                          </div>
                          <div>{report.families} families assisted</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  <MapPin className="mr-2 h-4 w-4" />
                  View All Field Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="text-3xl mb-2">🏛️</div>
              <CardTitle className="text-lg">Registered NGO</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">12A & 80G Certified</p>
              <Badge variant="outline">Reg: UP/2019/0123456</Badge>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="text-3xl mb-2">🔒</div>
              <CardTitle className="text-lg">Secure Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">256-bit SSL Encryption</p>
              <Badge variant="outline">PCI DSS Compliant</Badge>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-3">
              <div className="text-3xl mb-2">📊</div>
              <CardTitle className="text-lg">Public Ledger</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Real-time Fund Tracking</p>
              <Badge variant="outline">Blockchain Verified</Badge>
            </CardContent>
          </Card>
        </div>

        {/* Download Reports */}
        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-to-r from-trust/10 to-secondary/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Need Complete Records?</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Financial Reports
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Impact Assessment
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Beneficiary List
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TransparencyWall;