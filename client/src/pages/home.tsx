import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/ui/countdown-timer";
import HeroRobotScene from "@/components/three/hero-robot-scene";
import FeatureScene from "@/components/three/feature-scene";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ScrollTrigger: any;
    gsap: any;
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger animations
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      
      // Animate sections on scroll
      window.gsap.fromTo('.animate-on-scroll', 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.animate-on-scroll',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient overflow-hidden">
        <HeroRobotScene className="absolute inset-0" />
        
        <div className="content-overlay flex items-center justify-center min-h-screen px-4 pt-20">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="font-black text-4xl md:text-7xl lg:text-8xl mb-4 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                ROBOFEST
                <span className="block text-primary">2025</span>
              </h1>
              <p className="text-xl md:text-3xl font-light text-muted-foreground mb-2">
                BATTLE OF SMART RACERS
              </p>
              <p className="text-lg md:text-xl text-muted-foreground">
                September 10-12, 2025 | <span className="text-primary font-semibold">SRM Institute of Science & Technology</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/registration">
                <Button size="lg" className="bg-gradient-to-r from-primary to-cyan-400 text-black font-semibold text-lg hover:scale-105 transition-transform px-8 py-4">
                  Register Now
                </Button>
              </Link>

            </div>
            
            <CountdownTimer />
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border-2 border-green-400/30 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-purple-400/30 rounded-lg animate-float hidden lg:block"></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-card to-background animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-4xl md:text-5xl mb-6 text-primary">
                ABOUT ROBOFEST
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                ROBOFEST 2025 is one of the biggest and most prestigious robotics competitions hosted by SRM Institute of Science and Technology. Our mission is to foster creativity, innovation, and collaboration among the next generation of robotics engineers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Open to senior high school and college students</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span>Teams of 3-5 members encouraged</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Cutting-edge robotics platforms provided</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span>Industry expert judges and mentors</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Robotics laboratory with students" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-primary to-cyan-400 p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black">500+</div>
                  <div className="text-sm text-black font-semibold">Participants Expected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
