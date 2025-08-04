
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Clock, Users, MapPin, Trophy, Zap, Info } from "lucide-react";

interface EventModalProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const eventDetails = {
  "ROBO WAR": {
    description: `ROBOWARS PROBLEM STATEMENT

Task
Design and build a combat robot to battle other robots in a high-energy tournament, testing your machine's strength, strategy, and resilience. Ensure your creation adheres to all specified rules and safety guidelines for a fair and thrilling competition.

A. Basic Specifications

Dimensions of Bot: The machine should fit inside a box of 75cm x 75cm x 100cm (L x B x H), including any extendable devices at the start of the match. External controls are not included in size.

Weight: All batteries and weapons must be onboard (remote control excluded). There are two weight categories: 8kg (±1%) and 15kg (±1%).

Arena: Square arena, 16 feet per side, enclosed with bulletproof polycarbonate.

B. Mobility

Robots must have visible and controlled mobility. Allowed mobility includes rolling (wheels, tracks), certain non-wheeled mechanisms (no continuous rolling), jumping, and hopping. Flying or securing to the arena (e.g., suction cups, glue) is not allowed.

C. Control Requirements

Wired bots are prohibited. Wireless controllers must support at least 4 frequencies or dual circuits to avoid interference. Binding capability is required. Autonomous functions are allowed but must be overrideable remotely, with a mandatory emergency stop operable via radio controller. Each bot must have a kill switch or equivalent to cut power within 20 seconds in emergencies.

D. Battery and Power

Only electrically powered bots with onboard batteries are allowed. Battery types include gel cells, lithium, NiMH, NiCad, or dry cells, protected securely inside the body. Max voltage is 52V DC anywhere on the machine. Battery swaps during matches are forbidden. A manual emergency stop via radio controller is required.

E. Weapon Systems: Weapons NOT allowed

Invisible damage types (electricity, RF, electromagnetic), liquid projectiles, inflammable materials, entanglement devices (nets, lines), smoke or light-based visual impairment weapons (lasers, strobes), hazardous materials, explosives.

J. Safety Rules

Robots must have battery protection. Design elements not covered by rules require organizer approval. Safety inspections will be conducted before competition. Weapons must have safety covers. No team personnel allowed inside arena during matches. Emergency kill methods must be present and functional.

G. Rounds

Robots start in corners, matches scheduled by judges with organizing team oversight. Teams get at least 45 minutes between matches for repairs, no extensions allowed.

H. Scoring

Judges score based on Damage (0-5), Aggression (0-3), Control (0-3). Criteria include functional damage, attack frequency/intensity, strategic control and evasion.

I. Rules and Regulations

Teams up to 5 members, only registered members can handle bots. Setup time 60 seconds, match duration 3 minutes. Multiple bots per category allowed. Fair play is mandatory. Disqualifications can occur for unsportsmanlike conduct or violation of rules.

Disqualification Reasons Include:

Turning robot on with people inside arena, damaging arena, late reporting, arguing with judges, unsafe robots.

Victory Conditions:

Opponent immobilized, higher score at match end, or opponent disqualified.`,
    highlights: [
      { icon: <Trophy className="w-5 h-5" />, label: "Prize", value: "₹1,50,000" },
      { icon: <Users className="w-5 h-5" />, label: "Team Size", value: "Up to 5 members" },
      { icon: <MapPin className="w-5 h-5" />, label: "Venue", value: "Sports Hanger" },
      { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "3 minutes" },
    ],
    gradient: "from-red-500 to-orange-600",
    accent: "red-500"
  },
  
  "ROBO SOCCER": {
    description: `ROBO SOCCER PROBLEM STATEMENT

Task
Design and build an autonomous robot to compete in strategic soccer matches against other robots, demonstrating precision control, ball handling, and tactical gameplay.

ROBOT SPECIFICATIONS

Max dimensions: 30cm x 30cm x 30cm (5% tolerance).

Both wired and wireless robots allowed.

Max battery/circuit voltage: 25.2V.

4-wheel or 2-wheel drive; all tyres must contribute motion.

Robot body must not be from ready-made toys; robot kits allowed.

Dribbler mechanisms permitted.

Wired bots must have minimum 6-meter wire length.

Each team member must carry institute ID card.

GAME RULES

Arena goals: 45cm wide.

Spectators must stay outside boundary.

Match duration: Two halves of 5 minutes each with 2-minute break.

Teams of 3-5 members allowed.

Only one robot per team on field at a time.

Ball handling mechanisms are encouraged for better control.

Robots must be autonomous during gameplay.

Manual control allowed only during setup phase.

SCORING SYSTEM

Goals scored by getting ball completely across goal line.

Penalty shots awarded for fouls or violations.

Fair play points awarded for sportsmanship.

TECHNICAL REQUIREMENTS

Sensors for ball detection and navigation recommended.

Wireless communication between team members allowed.

Robot must be ready when called for match.

Additional rules as provided by organizers.`,
    highlights: [
      { icon: <Trophy className="w-5 h-5" />, label: "Prize", value: "₹40,000" },
      { icon: <Users className="w-5 h-5" />, label: "Team Size", value: "3-5 members" },
      { icon: <Zap className="w-5 h-5" />, label: "Voltage", value: "25.2V max" },
      { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "2 × 5 minutes" },
    ],
    gradient: "from-green-500 to-emerald-600",
    accent: "green-500"
  },
  
  "ROBO SUMO": {
    description: `ROBO SUMO PROBLEM STATEMENT

Task
Design and build a robot to compete in traditional sumo wrestling adapted for autonomous robots, where the objective is to push opponent robots out of the arena.

GENERAL RULES

Competition based on last bot standing.

Two bots compete in qualifiers; last bot inside arena wins.

Match duration: 3 minutes, divided into two halves.

Push opponent bot out of arena to score points.

Early starts allowed a second chance; repeated offenses lead to disqualification.

Robot must be ready when called.

ROBOT SPECIFICATIONS

4-wheel or 2-wheel drive; all tyres contribute.

Dribbler mechanisms allowed.

Max dimensions: 20cm x 20cm x 20cm.

Max weight: 3kg.

Wires remain slack during gameplay.

Wireless control must support dual-frequency operation.

RF modules from toy cars allowed; IC engines and LEGO kits cause disqualification.

ARENA SPECIFICATIONS

Arena: 6-foot diameter circle without walls.

Starting positions marked at opposite ends.

Clear boundary markings.

Non-slip surface for better traction.

STRATEGY ELEMENTS

Robot design must balance pushing power with stability.

Low center of gravity recommended.

Sensor integration for opponent detection.

Quick response time crucial for competitive advantage.

SAFETY MEASURES

Emergency stop mechanisms required.

No sharp edges or dangerous components.

Regular safety inspections before matches.`,
    highlights: [
      { icon: <Trophy className="w-5 h-5" />, label: "Prize", value: "₹25,000" },
      { icon: <MapPin className="w-5 h-5" />, label: "Arena", value: "6-foot diameter" },
      { icon: <Zap className="w-5 h-5" />, label: "Max Weight", value: "3kg" },
      { icon: <Clock className="w-5 h-5" />, label: "Duration", value: "3 minutes" },
    ],
    gradient: "from-purple-500 to-violet-600",
    accent: "purple-500"
  },
  
  "LINE FOLLOWER": {
    description: `LINE FOLLOWER PROBLEM STATEMENT

Task
Design and build a fully autonomous robot that follows a line around a track with maximum speed and precision, demonstrating advanced sensor integration and control algorithms.

COMPETITION OVERVIEW

Fully autonomous robot follows a line around a track.

Fastest time wins.

Event date: 11th September.

Entry fee: Rs. 200.

Prize money: Rs. 15,000.

ROBOT SPECIFICATIONS

Max dimensions: 25cm x 25cm x 25cm.

Max weight: 2kg.

Fully autonomous operation required.

No remote control allowed during run.

Robot must start and stop automatically.

TRACK SPECIFICATIONS

Black line on white background.

Line width: 2-3cm.

Track includes curves, intersections, and gaps.

Possible sharp turns and S-curves.

Starting and ending points clearly marked.

TECHNICAL REQUIREMENTS

Line detection sensors (IR, camera, etc.).

Microcontroller for processing.

Motor control system for precise movement.

Battery must last entire competition.

Robust design for multiple runs.

PERFORMANCE CRITERIA

Time taken to complete the track.

Accuracy in following the line.

Ability to handle complex track sections.

Consistency across multiple runs.

Recovery from line-loss situations.

ADVANCED CHALLENGES

Gap handling where line is interrupted.

Intersection navigation with multiple paths.

Speed optimization without losing accuracy.

Smooth cornering algorithms.

CONTACT INFORMATION

Faculty: Dr. Padmini S (padminis@srmist.edu.in)

Student: Keith Cedrik Pereira (kp7809@srmist.edu.in)

JUDGING CRITERIA

Primary: Completion time.

Secondary: Line following accuracy.

Penalties for going off-track or manual intervention.`,
    highlights: [
      { icon: <Trophy className="w-5 h-5" />, label: "Prize", value: "₹15,000" },
      { icon: <Zap className="w-5 h-5" />, label: "Max Weight", value: "2kg" },
      { icon: <MapPin className="w-5 h-5" />, label: "Track", value: "Complex path" },
      { icon: <Clock className="w-5 h-5" />, label: "Mode", value: "Time trial" },
    ],
    gradient: "from-cyan-500 to-blue-600",
    accent: "cyan-500"
  },
  
  "OBSTACLE RACE": {
    description: `OBSTACLE RACE PROBLEM STATEMENT

Task
Design and build a robot capable of autonomously navigating through complex obstacle courses featuring various terrain challenges and environmental hazards.

ROBOT SPECIFICATIONS

Max bot size: 30cm x 30cm x 30cm (5% tolerance).

Max weight: 5 kg (5% tolerance).

Max voltage: 16.8V.

Wired control requires minimum 4m wire length.

Wireless control must support dual-frequency.

Robot body must NOT be from ready-made toys; kits allowed.

COURSE DESIGN

Arena includes muddy terrain, stones, gravel, water, bridges, ramps.

Multiple elevation changes and surface transitions.

Narrow passages requiring precision navigation.

Timed checkpoints throughout the course.

Arena specifications may vary by round.

GENERAL RULES

Team members must carry institute ID cards.

Damaging the arena is penalized.

Spectators stay outside arena boundary.

Robot must complete course autonomously.

Manual intervention results in time penalties.

TIME PENALTIES

Wheels touching boundary lines: +5 seconds.

Manual assistance or hand touches: +10 seconds.

Going completely off track: +15 seconds.

Damaging course elements: +25 seconds.

Failure to complete section: +30 seconds.

NAVIGATION CHALLENGES

Water crossing sections requiring waterproofing.

Steep inclines testing motor power and traction.

Precision movements through narrow corridors.

Balance challenges on elevated platforms.

TECHNICAL REQUIREMENTS

Autonomous navigation systems recommended.

Sensor integration for obstacle detection.

Robust mechanical design for terrain handling.

Weather-resistant construction for outdoor elements.`,
    highlights: [
      { icon: <Trophy className="w-5 h-5" />, label: "Prize", value: "₹20,000" },
      { icon: <Zap className="w-5 h-5" />, label: "Max Weight", value: "5kg" },
      { icon: <MapPin className="w-5 h-5" />, label: "Course", value: "Multi-terrain" },
      { icon: <Clock className="w-5 h-5" />, label: "Penalties", value: "Time-based" },
    ],
    gradient: "from-yellow-500 to-orange-600",
    accent: "yellow-500"
  },
  
  "DRONE RACE": {
    description: `DRONE RACE PROBLEM STATEMENT

Task
Test pilot skill navigating high-speed drones through obstacle courses by line-of-sight (LOS), demonstrating precision flying and agility control.

THE DRONE RACING CHAMPIONSHIP

Tests pilot skill navigating high-speed drones through obstacle courses by line-of-sight (LOS).

RACE FORMAT

Round 1: Static time trials, pilots position themselves and complete the course; top 8 fastest qualify.

Round 2: Dynamic knockout heats, pilots allowed to move along sidelines; head-to-head eliminations.

TRACK DESIGN

Includes tight turns, elevation changes, gates; promotes precision, agility, consistent handling.

Multiple difficulty levels with varying gate sizes.

Elevation changes requiring vertical maneuvering.

Timing gates for precise lap measurement.

DRONE AND PILOT SAFETY

Pre-race drone inspections (integrity, wiring, battery security).

Required failsafe (cut throttle/disarm on signal loss).

Marked pilot zones for crowd safety.

Barriers and netting for track safety.

Pilots must disarm if crashing or flying outside track.

TECHNICAL RULES

Max prop size: 6 inch (60xx); minimum 4 inch (40xx).

Cinewhoops allowed with double hit points penalty.

GPS modules banned; optical flow allowed but neutral.

FPV cameras/goggles prohibited.

Teams carry own gear, tools; no sharing.

No spotters allowed.

Strict penalty/disqualification conditions including damage, crashes, lateness.

Batteries can be changed during gameplay; no repairs allowed.

Lap counts, points, penalties announced on event day.

Rules may be changed at event coordinator's discretion.

SCORING SYSTEM

Fastest lap times in qualifying rounds.

Head-to-head elimination format in finals.

Penalty seconds added for gate strikes or course violations.`,
    highlights: [
      { icon: <Trophy className="w-5 h-5" />, label: "Prize", value: "₹30,000" },
      { icon: <Zap className="w-5 h-5" />, label: "Prop Size", value: "4-6 inch" },
      { icon: <MapPin className="w-5 h-5" />, label: "Control", value: "Line of sight" },
      { icon: <Clock className="w-5 h-5" />, label: "Format", value: "Time trials" },
    ],
    gradient: "from-blue-500 to-indigo-600",
    accent: "blue-500"
  }
};

export default function EventModal({ title, description, children }: EventModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState<'overview' | 'rules'>('overview');
  const event = eventDetails[title as keyof typeof eventDetails];

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!event) return null;

  return (
    <>
      <Button 
        onClick={handleOpen}
        className="bg-gradient-to-r from-primary to-cyan-400 hover:from-primary/80 hover:to-cyan-400/80 text-black font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <Info className="w-4 h-4 mr-2" />
        Learn More
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 md:p-4">
          {/* Animated backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
            onClick={handleClose}
          />
          
          {/* Modal container */}
          <div 
            className="relative w-full max-w-7xl max-h-[95vh] md:max-h-[95vh] mobile-modal-large bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl transform transition-all duration-300 scale-100 animate-in zoom-in-95 fade-in-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient background */}
            <div className={`relative bg-gradient-to-r ${event.gradient} p-6 rounded-t-3xl`}>
              <div className="absolute inset-0 bg-black/20 rounded-t-3xl" />
              <div className="relative flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
                  <div className="flex flex-wrap gap-4">
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                        <div className="text-white/80">{highlight.icon}</div>
                        <span className="text-sm font-medium text-white/90">{highlight.label}:</span>
                        <span className="text-sm font-bold text-white">{highlight.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={handleClose}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-3 transition-all duration-200 hover:scale-110 group"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Tab navigation */}
            <div className="flex border-b border-white/10">
              <button 
                onClick={() => setCurrentTab('overview')}
                className={`flex-1 py-4 px-6 font-semibold transition-all duration-200 ${
                  currentTab === 'overview' 
                    ? `text-${event.accent} border-b-2 border-${event.accent} bg-white/5` 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setCurrentTab('rules')}
                className={`flex-1 py-4 px-6 font-semibold transition-all duration-200 ${
                  currentTab === 'rules' 
                    ? `text-${event.accent} border-b-2 border-${event.accent} bg-white/5` 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Rules & Details
              </button>
            </div>

            {/* Content area */}
            <div className="p-4 md:p-6 max-h-[70vh] mobile-modal-content overflow-y-auto custom-scrollbar">
              {currentTab === 'overview' ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`bg-gradient-to-r ${event.gradient} p-2 rounded-lg text-white`}>
                            {highlight.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{highlight.label}</h3>
                            <p className="text-gray-300">{highlight.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Zap className={`w-5 h-5 text-${event.accent}`} />
                      Quick Overview
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {event.description.split('\n\n')[1] || event.description.split('\n')[2]}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
                    <pre className="text-gray-300 leading-relaxed whitespace-pre-wrap font-mono text-xs md:text-sm">
                      {event.description}
                    </pre>
                  </div>
                </div>
              )}
              
              {children}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-white/5 rounded-b-3xl">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  Ready to compete? Register now to secure your spot!
                </div>
                <Button 
                  onClick={() => window.open("https://stag.registrations.isdlabsrm.in", "_blank")}
                  className={`bg-gradient-to-r ${event.gradient} hover:scale-105 text-white font-semibold px-8 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
