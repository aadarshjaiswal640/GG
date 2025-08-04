import { Link } from "wouter";
import { Instagram, ExternalLink } from "lucide-react";
import roboFestLogo from "@/assets/robofest-logo.png";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={roboFestLogo} 
                alt="ROBOFEST Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="font-bold text-2xl">ROBOFEST 2025</span>
            </div>
            <p className="text-muted-foreground mb-4">
              The premier robotics competition fostering innovation, creativity, and collaboration among the next generation of engineers and technologists.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 ROBOFEST. Organized by <a href="https://isdlabsrm.in/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:text-cyan-400 transition-colors">Intelligent Systems Design Lab</a>. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/events" className="hover:text-foreground transition-colors">Events</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:isdlab@srmist.edu.in" className="block text-muted-foreground hover:text-foreground transition-colors">
                isdlab@srmist.edu.in
              </a>
              <a 
                href="https://www.instagram.com/robofest.srm?igsh=MTFlbjR3cGs0MXRoMg==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-pink-500 hover:text-pink-400 transition-colors group"
              >
                <Instagram className="w-5 h-5" />
                <span className="relative">
                  @robofest.srm
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-pink-400 rounded-md opacity-0 group-hover:opacity-30 transition-opacity blur"></div>
                </span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="https://stag.registrations.isdlabsrm.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-gradient-to-r from-primary to-cyan-400 px-4 py-2 rounded text-black font-semibold text-sm hover:scale-105 transition-transform"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
