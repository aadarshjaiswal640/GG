import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import EnhancedRobotScene from "@/components/three/enhanced-robot-scene";

interface RobotGalleryProps {
  className?: string;
}

export default function RobotGallery({ className = "" }: RobotGalleryProps) {
  const [selectedRobot, setSelectedRobot] = useState<number | null>(null);

  const robots = [
    {
      id: 1,
      name: "Battle Bot Alpha",
      category: "Combat Robot",
      description: "High-powered combat robot with reinforced armor",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Navigation Pro",
      category: "Line Follower",
      description: "Precision navigation with advanced sensors",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Soccer Champion",
      category: "Soccer Bot",
      description: "Autonomous soccer robot with ball handling",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Aerial Racer",
      category: "Drone",
      description: "High-speed racing drone with FPV capability",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Sumo Warrior",
      category: "Sumo Bot",
      description: "Compact but powerful sumo wrestling robot",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Obstacle Master",
      category: "All-Terrain",
      description: "Versatile robot for complex obstacle courses",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-primary">
            ROBOT GALLERY
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our collection of competition robots and discover the technology behind each design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {robots.map((robot) => (
            <Dialog key={robot.id}>
              <DialogTrigger asChild>
                <Card className="card-hover bg-card/50 border-primary/30 cursor-pointer group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={robot.image} 
                      alt={robot.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto animate-pulse">
                          <span className="text-black font-bold">3D</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                        {robot.name}
                      </h3>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {robot.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {robot.description}
                    </p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl w-full h-[80vh] bg-background border-primary/30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                  <div className="relative bg-card/20 rounded-lg overflow-hidden">
                    <EnhancedRobotScene 
                      sceneType="gallery"
                      enableBloom={true}
                      enableOrbitControls={true}
                      autoRotate={true}
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <h2 className="font-bold text-3xl text-primary mb-2">
                        {robot.name}
                      </h2>
                      <span className="text-lg bg-primary/20 text-primary px-3 py-1 rounded">
                        {robot.category}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Description</h3>
                        <p className="text-muted-foreground">
                          {robot.description}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Specifications</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Weight:</span>
                            <span>2.5 kg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Power:</span>
                            <span>12V LiPo Battery</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Sensors:</span>
                            <span>Ultrasonic, Camera, IMU</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Processor:</span>
                            <span>Raspberry Pi 4</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Competition Ready</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                            ✓ Tested
                          </span>
                          <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                            ✓ Calibrated
                          </span>
                          <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs">
                            ✓ Competition Legal
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}