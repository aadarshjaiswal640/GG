import EventCard from "@/components/ui/event-card";
import EventModal from "@/components/ui/event-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Events() {
  const events = [
    {
      title: "ROBO WAR",
      prize: "₹1,50,000",
      entryFee: "₹1,500",
      venue: "Sports Hanger",
      icon: <span className="text-2xl">⚔️</span>,
      description: "Ultimate combat robotics competition where machines battle for supremacy",
      borderColor: "border-red-500/30",
      titleColor: "text-red-400"
    },
    {
      title: "ROBO SOCCER",
      prize: "₹40,000",
      entryFee: "₹500",
      teamSize: "3-5 Members",
      icon: <span className="text-2xl">⚽</span>,
      description: "Autonomous robots compete in strategic soccer matches",
      borderColor: "border-green-500/30",
      titleColor: "text-green-400"
    },
    {
      title: "ROBO SUMO",
      prize: "₹25,000",
      entryFee: "₹300",
      venue: "1.5m Diameter Ring",
      icon: <span className="text-2xl">🥋</span>,
      description: "Traditional sumo wrestling adapted for autonomous robots",
      borderColor: "border-purple-500/30",
      titleColor: "text-purple-400"
    },
    {
      title: "LINE FOLLOWER",
      prize: "₹15,000",
      entryFee: "₹200",
      venue: "Complex Path Track",
      icon: <span className="text-2xl">〰️</span>,
      description: "Precision navigation challenge following complex paths",
      borderColor: "border-cyan-500/30",
      titleColor: "text-cyan-400"
    },
    {
      title: "OBSTACLE RACE",
      prize: "₹20,000",
      entryFee: "₹300",
      venue: "Multi-level Course",
      icon: <span className="text-2xl">🚧</span>,
      description: "Navigate through complex obstacle courses autonomously",
      borderColor: "border-yellow-500/30",
      titleColor: "text-yellow-400"
    },
    {
      title: "DRONE RACE",
      prize: "₹50,000",
      entryFee: "₹400",
      venue: "5 Minutes Flight",
      icon: <span className="text-2xl">🚁</span>,
      description: "High-speed aerial racing with autonomous navigation",
      borderColor: "border-pink-500/30",
      titleColor: "text-pink-400"
    }
  ];

  const faqItems = [
    {
      question: "Who can participate in ROBOFEST 2025?",
      answer: "Senior high school and college students can participate. Teams must have 3-5 members and at least one team member should bring a laptop for programming."
    },
    {
      question: "Is there a registration fee?",
      answer: "Registration varies by event. Entry fees range from ₹200 to ₹1,500 depending on the competition category you choose to participate in."
    },
    {
      question: "Are robots provided by the organizers?",
      answer: "Yes, for specific events like the Battle of Smart Racers, standardized robots (Smorphi platforms) are provided by the organizing committee at no additional cost."
    },
    {
      question: "What will teams need to do during the competition?",
      answer: "Teams will program robots to complete various challenges including autonomous racing, line following, obstacle navigation, and combat scenarios depending on their chosen events."
    },
    {
      question: "Is accommodation provided?",
      answer: "Accommodation is not provided by the organizing committee. Participants need to arrange their own lodging, though we can provide recommendations for nearby hotels."
    }
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Events Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-primary leading-tight">
              COMPETITION EVENTS
            </h1>
            <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4">
              Join the ultimate robotics competition featuring 6 thrilling events with prizes up to ₹1,50,000
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 lg:mt-12">
            <Link href="/registration">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-cyan-400 text-black font-semibold text-base sm:text-lg hover:scale-105 transition-transform px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Register for Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-3 sm:px-4 lg:px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-10 lg:mb-12 text-primary leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-card border border-primary/30">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-3 text-primary leading-tight">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
