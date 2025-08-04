import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import srmLogo from "@/assets/srm-logo.webp";
import ctechLogo from "@/assets/ctech-logo.png";

export default function About() {
  return (
    <div className="min-h-screen pt-20 px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
            About ROBOFEST 2025
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Battle of Smart Racers
          </p>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto leading-relaxed">
            Discover the organizations and institutions behind one of the most exciting robotics competitions in the region
          </p>
        </div>
      </section>

      {/* University & Department Logos */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Card className="bg-card/50 border-primary/30 card-hover">
              <CardContent className="p-8 text-center">
                <img 
                  src={srmLogo} 
                  alt="SRM Institute Logo" 
                  className="h-24 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  SRM Institute of Science & Technology
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  One of India's leading private technical universities, consistently ranked among the top institutions for engineering and technology education.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/30 card-hover">
              <CardContent className="p-8 text-center">
                <img 
                  src={ctechLogo} 
                  alt="CTech Department Logo" 
                  className="h-24 mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Department of Computing Technologies
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Accelerating intellectual innovation through cutting-edge research and development in computing technologies and robotics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Club Section */}
      <section className="py-20 bg-gradient-to-r from-card to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-primary">
              Host Club
            </h2>
          </div>
          
          <Card className="bg-card/50 border-primary/30 card-hover mb-8">
            <CardHeader className="text-center">
              <div className="mb-6">
                <img 
                  src="https://isdlabsrm.in/logo.svg" 
                  alt="ISD Lab Logo" 
                  className="h-14 mx-auto"
                />
              </div>
              <CardTitle className="text-3xl text-primary">
                Intelligent Systems Design Lab (ISD Lab)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Intelligent Systems Design Lab at SRM Institute is dedicated to advancing research and 
                education in robotics, artificial intelligence, and intelligent systems. Our lab serves as 
                the hub for innovative robotics projects and competitions, fostering creativity and technical 
                excellence among students.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">R&D</span>
                  </div>
                  <span className="text-muted-foreground">Research & Development</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 font-bold">AI</span>
                  </div>
                  <span className="text-muted-foreground">Artificial Intelligence</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 font-bold">🤖</span>
                  </div>
                  <span className="text-muted-foreground">Robotics Innovation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-gradient-to-r from-background to-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl mb-6 text-primary">
              Our Sponsors
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Platinum Sponsor */}
            <Card className="bg-card/50 border-2 border-yellow-400/50 card-hover relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-yellow-400 mb-4">
                  Platinum Sponsor
                </CardTitle>
                <div className="w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-yellow-400/30">
                  <span className="text-yellow-400 text-sm">Logo Coming Soon</span>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Premium partnership opportunity with maximum visibility and exclusive benefits.
                </p>
              </CardContent>
            </Card>

            {/* Gold Sponsor */}
            <Card className="bg-card/50 border-2 border-orange-400/50 card-hover relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-orange-400 mb-4">
                  Gold Sponsor
                </CardTitle>
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-orange-400/30">
                  <span className="text-orange-400 text-sm">Logo Coming Soon</span>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Significant partnership with prominent branding and engagement opportunities.
                </p>
              </CardContent>
            </Card>

            {/* Silver Sponsor */}
            <Card className="bg-card/50 border-2 border-gray-400/50 card-hover relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-400 to-gray-600"></div>
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-gray-400 mb-4">
                  Silver Sponsor
                </CardTitle>
                <div className="w-32 h-32 bg-gradient-to-br from-gray-400/20 to-gray-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-gray-400/30">
                  <span className="text-gray-400 text-sm">Logo Coming Soon</span>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground text-sm">
                  Strategic partnership with valuable exposure and networking benefits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
}