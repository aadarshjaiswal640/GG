import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EnhancedRobotScene from "@/components/three/enhanced-robot-scene";
import FloatingActionButton from "@/components/ui/floating-action-button";
import { Calendar, MapPin, Users, Trophy, Mail, Phone, ExternalLink } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import roboRoarZLogo from "@/assets/roboroarz-logo.png";

export default function Roboroarz() {
  const videoCards = [
    {
      title: "Introducing Smorphi",
      description: "Watch how Smorphi robots can be configured for different movement patterns.",
      videoId: "cOHIRPZTXrw",
      embedUrl: "https://www.youtube.com/embed/cOHIRPZTXrw",
      placeholder: true,
      imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },
    {
      title: "RoboroarZ Singapore 2025",
      description: "Placeholder for future video (use static image or empty video frame).",
      videoId: "placeholder",
      embedUrl: null,
      placeholder: true,
      imageUrl: "/src/assets/roboroarz-singapore-thumbnail.png"
    },
    {
      title: "Example of Competition Format",
      description: "Showcases passion, teamwork, and excitement from a real RoboRoarZ competition.",
      videoId: "OkzNq6RLPEc",
      embedUrl: "https://www.youtube.com/embed/OkzNq6RLPEc"
    }
  ];

  const eventDetails = [
    { icon: <Calendar className="w-5 h-5" />, label: "Date", value: "10-12 September 2025" },
    { icon: <MapPin className="w-5 h-5" />, label: "Venue", value: "TP2, 7th Floor" },
    { icon: <Trophy className="w-5 h-5" />, label: "Perks", value: "Placement offer and internship @ Singapore" },
    { icon: <Users className="w-5 h-5" />, label: "Fee", value: "Fee na 😉" }
  ];

  const spocs = [
    {
      type: "Faculty SPOC",
      name: "Dr. Vidhyalakshmi M K Ma'am",
      email: "vidhyalm1@srmist.edu.in",
      phone: "+91 94432 23066",
      color: "text-primary"
    },
    {
      type: "Student SPOCs",
      name: "Harshil Malhotra",
      email: "hm3673@srmist.edu.in",
      phone: "6230931075",
      color: "text-green-400"
    },
    {
      type: "Student SPOC",
      name: "Harsh Arora",
      email: undefined,
      phone: "+91 93725 85511",
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient overflow-hidden">
        <EnhancedRobotScene 
          sceneType="hero"
          enableBloom={true}
          enableOrbitControls={false}
          autoRotate={true}
          className="absolute inset-0"
        />
        
        <div className="content-overlay flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <img 
                src={roboRoarZLogo} 
                alt="RoboRoarZ Logo" 
                className="w-64 md:w-80 lg:w-96 mx-auto mb-6"
              />
            </div>
            <h1 className="font-black text-4xl md:text-7xl lg:text-8xl mb-6">
              <span className="block text-primary text-3xl md:text-5xl lg:text-6xl mt-2">
                SRM UNIVERSITY, 2025
              </span>
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-cyan-400 mb-8">
              BATTLE OF SMART RACERS
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              The ultimate autonomous racing competition where innovation meets precision
            </p>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-background to-card">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-card/80 to-background/60 border-primary/30 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl text-center text-primary">
                EVENT DETAILS
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {eventDetails.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg border border-primary/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-cyan-400 rounded-lg flex items-center justify-center text-black">
                      {detail.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{detail.label}</p>
                      <p className="font-semibold text-lg">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-background/30 rounded-xl p-6 border border-primary/20">
                <h3 className="font-bold text-xl mb-4 text-cyan-400">Main Challenge</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Teams must program and control their robot to race autonomously, follow lines, navigate tracks, and overcome technical obstacles. 
                  This competition tests your skills in robotics programming, AI navigation, and real-time decision making.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Standard Robot Platform Section */}
      <section className="py-20 px-4 bg-gradient-to-l from-card to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-primary">
              STANDARD ROBOT PLATFORM
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore the cutting-edge robotics technology powering our competition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videoCards.map((video, index) => (
              <Card key={index} className="bg-card/50 border-primary/30 card-hover overflow-hidden">
                <div className="relative h-64 bg-background/20">
                  {video.placeholder ? (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-cyan-400/20 flex items-center justify-center">
                      <img 
                        src={video.imageUrl || "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"}
                        alt={`${video.title} - Robotics Competition Thumbnail`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <iframe
                      src={video.embedUrl || ""}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {video.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* SPOCs Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-card to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-primary">
              SINGLE POINT OF CONTACTS
            </h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with our dedicated team for any queries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spocs.map((spoc, index) => (
              <Card key={index} className="bg-card/50 border-primary/30 card-hover">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-black" />
                    </div>
                    <h3 className={`font-bold text-lg mb-2 ${spoc.color}`}>
                      {spoc.type}
                    </h3>
                    <h4 className="font-semibold text-xl mb-4">
                      {spoc.name}
                    </h4>
                    <div className="space-y-2">
                      {spoc.email && (
                        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${spoc.email}`} className="hover:text-primary transition-colors">
                            {spoc.email}
                          </a>
                        </div>
                      )}
                      <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <a href={`tel:${spoc.phone}`} className="hover:text-primary transition-colors">
                          {spoc.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Floating Action Button */}
      <FloatingActionButton 
        href="https://docs.google.com/forms/d/e/1FAIpQLSfeKZJQsO0JBYT3W29fj1FxiqhtxY6Zlb0hvKmdrpj_4mohNA/viewform?usp=header"
        text="Register Now 🚀"
      />
    </div>
  );
}