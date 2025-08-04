
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface EventModalProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const eventDetails = {
  "ROBO WAR": `ROBOWARS PROBLEM STATEMENT

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
  
  "ROBO SOCCER": `ROBO SOCCER PROBLEM STATEMENT

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
  
  "ROBO SUMO": `ROBO SUMO PROBLEM STATEMENT

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
  
  "DRONE RACE": `DRONE RACE PROBLEM STATEMENT

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
  
  "OBSTACLE RACE": `OBSTACLE RACE PROBLEM STATEMENT

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
  
  "LINE FOLLOWER": `LINE FOLLOWER PROBLEM STATEMENT

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
};

export default function EventModal({ title, description, children }: EventModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const eventDescription = eventDetails[title as keyof typeof eventDetails] || description;

  const handleOpen = () => {
    setIsOpen(true);
    // Store current scroll position
    const scrollY = window.scrollY;
    document.body.setAttribute('data-scroll-locked', scrollY.toString());
    
    // Only prevent body scroll, don't fix position
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px'; // Prevent layout shift from scrollbar
  };

  const handleClose = () => {
    // Restore body scroll
    const scrollY = document.body.getAttribute('data-scroll-locked');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    document.body.removeAttribute('data-scroll-locked');
    
    // Restore scroll position if it was stored
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
    }
    
    setIsOpen(false);
  };

  // Handle escape key
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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.removeAttribute('data-scroll-locked');
    };
  }, []);

  // Prevent event bubbling on modal content
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <Button 
        onClick={handleOpen}
        variant="outline" 
        className="border-2 border-primary/50 text-primary hover:bg-primary/20 hover:border-primary transition-all duration-300 neon-border"
      >
        Details
      </Button>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}
          />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-[95vw] sm:max-w-[90vw] lg:max-w-[75vw] xl:max-w-[70vw] bg-card/95 backdrop-blur-md border-2 border-primary/30 rounded-xl neon-border flex flex-col my-8"
            style={{ 
              maxHeight: 'calc(100vh - 4rem)',
              height: 'auto',
              zIndex: 2,
              position: 'relative',
              margin: '2rem auto',
            }}
            onClick={handleModalContentClick}
          >
            {/* Header with Close Button */}
            <div className="flex-shrink-0 flex items-center justify-between p-3 sm:p-4 lg:p-6 bg-card/95 backdrop-blur-md border-b border-primary/20 rounded-t-xl relative">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary pr-16 flex-1 min-w-0">
                <span className="truncate block">{title}</span>
              </h2>
              <button 
                onClick={handleClose}
                className="absolute top-3 right-3 z-[99999] bg-red-600 hover:bg-red-700 text-white rounded-full p-2.5 transition-all duration-200 shadow-2xl border-2 border-white/20 hover:border-white flex items-center justify-center w-10 h-10 modal-close-button hover:scale-110 active:scale-95"
                aria-label="Close modal"
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  zIndex: 99999,
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}
              >
                <X className="w-5 h-5" strokeWidth={3} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div 
              className="flex-1 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6 universal-modal-scroll"
              style={{
                overflowY: 'auto',
                overflowX: 'hidden',
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y',
                position: 'relative',
                height: 'auto',
                maxHeight: 'calc(100vh - 8rem)',
                scrollbarWidth: 'thin',
                scrollbarColor: 'hsl(195, 100%, 50%) hsl(240, 10%, 3.9%)',
              }}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="text-muted-foreground leading-relaxed text-xs sm:text-sm lg:text-base whitespace-pre-line break-words hyphens-auto">
                  {eventDescription}
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
