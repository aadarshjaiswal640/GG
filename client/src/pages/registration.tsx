import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Users, Trophy } from "lucide-react";

export default function Registration() {
  const handleRegistration = () => {
    window.open("https://stag.registrations.isdlabsrm.in", "_blank");
  };

  const eventHighlights = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "6 Competition Events",
      description: "Choose from Robo War, Soccer, Sumo, Line Follower, Obstacle Race, and Drone Race"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "3-Day Event",
      description: "September 10-12, 2025 - Three days of intense robotics competition"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "SRM Institute",
      description: "Kattankulathur, Tamil Nadu - Premier engineering institute"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Competition",
      description: "3-5 members per team - Collaborate and innovate together"
    }
  ];

  const prizes = [
    { event: "Robo War", prize: "₹1,50,000", color: "text-red-400" },
    { event: "Drone Race", prize: "₹50,000", color: "text-pink-400" },
    { event: "Robo Soccer", prize: "₹40,000", color: "text-green-400" },
    { event: "Robo Sumo", prize: "₹25,000", color: "text-purple-400" },
    { event: "Obstacle Race", prize: "₹20,000", color: "text-yellow-400" },
    { event: "Line Follower", prize: "₹15,000", color: "text-cyan-400" }
  ];

  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      {/* Registration Hero */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-background to-card">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6 text-primary">
            REGISTER NOW
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join ROBOFEST 2025 and compete with the best robotics teams from across the country. Registration is now open!
          </p>
          
          <Card className="bg-gradient-to-r from-primary/10 to-cyan-400/10 border-primary/30 mb-6 sm:mb-8 mx-2 sm:mx-0">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="text-center md:text-left">
                  <h3 className="font-bold text-xl sm:text-2xl mb-2">Ready to compete?</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Click below to access the official registration portal
                  </p>
                </div>
                <Button 
                  onClick={handleRegistration}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-cyan-400 text-black font-semibold text-base sm:text-lg hover:scale-105 transition-transform px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Register Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-12 sm:py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 text-primary">
            Why Join ROBOFEST 2025?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {eventHighlights.map((highlight, index) => (
              <Card key={index} className="bg-card border-primary/30 card-hover">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-cyan-400 rounded-lg flex items-center justify-center text-black flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-lg sm:text-xl mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Prize Pool */}
          <Card className="bg-gradient-to-r from-card to-muted/20 border-primary/30">
            <CardHeader>
              <CardTitle className="text-center text-xl sm:text-2xl md:text-3xl text-primary">
                Total Prize Pool: ₹3,00,000+
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {prizes.map((prize, index) => (
                  <div key={index} className="text-center p-3 sm:p-4 bg-background/50 rounded-lg">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">{prize.event}</h4>
                    <p className={`font-bold text-base sm:text-lg ${prize.color}`}>{prize.prize}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Details */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-t from-card to-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 text-primary">
            Registration Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <Card className="bg-card border-primary/30">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-primary text-lg sm:text-xl">Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 pt-0">
                <p className="text-sm sm:text-base">• Senior high school students</p>
                <p className="text-sm sm:text-base">• College students (all years)</p>
                <p className="text-sm sm:text-base">• Teams of 3-5 members</p>
                <p className="text-sm sm:text-base">• At least one laptop per team</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-primary/30">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-primary text-lg sm:text-xl">Important Dates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 pt-0">
                <p className="text-sm sm:text-base">• Registration Opens: Now</p>
                <p className="text-sm sm:text-base">• Early Bird Deadline: August 15, 2025</p>
                <p className="text-sm sm:text-base">• Final Registration: August 31, 2025</p>
                <p className="text-sm sm:text-base">• Event Dates: September 10-12, 2025</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-primary/30">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-primary text-lg sm:text-xl">What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 pt-0">
                <p className="text-sm sm:text-base">• Competition entry</p>
                <p className="text-sm sm:text-base">• Robot platforms (where applicable)</p>
                <p className="text-sm sm:text-base">• Technical support</p>
                <p className="text-sm sm:text-base">• Certificate of participation</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-primary/30">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-primary text-lg sm:text-xl">Contact Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3 pt-0">
                <p className="text-sm sm:text-base break-all">• Email: isdlab@srmist.edu.in</p>
                <p className="text-sm sm:text-base">• Phone: +91 94432 23066</p>
                <p className="text-sm sm:text-base">• Student SPOC: +91 62309 31075</p>
                <p className="text-sm sm:text-base">• Registration support available</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8 sm:mt-12 px-4">
            <Button 
              onClick={handleRegistration}
              size="lg"
              className="bg-gradient-to-r from-primary to-cyan-400 text-black font-semibold text-lg sm:text-xl hover:scale-105 transition-transform px-8 sm:px-12 py-4 sm:py-6 w-full sm:w-auto"
            >
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Start Registration Process
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
