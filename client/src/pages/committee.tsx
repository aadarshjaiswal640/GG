import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import patron images
import patron1 from "@assets/WhatsApp Image 2025-08-02 at 21.36.52_f3cc000f_1754153416829.jpg";
import patron2 from "@assets/WhatsApp Image 2025-08-02 at 21.38.37_a8ac5823_1754153425396.jpg";
import patron3 from "@assets/WhatsApp Image 2025-08-02 at 21.41.22_d936c770_1754153433909.jpg";
import patron4 from "@assets/WhatsApp Image 2025-08-02 at 21.42.00_0831c823_1754153443848.jpg";

// Import advisory committee images
import advisory1 from "@assets/WhatsApp Image 2025-08-02 at 23.13.36_0c4e11e2_1754158317341.jpg";
import advisory2 from "@assets/WhatsApp Image 2025-08-02 at 23.14.07_176379bf_1754158327627.jpg";
import advisory3 from "@assets/WhatsApp Image 2025-08-02 at 23.15.12_6b492eb2_1754158348044.jpg";
import advisory4 from "@assets/WhatsApp Image 2025-08-02 at 23.21.39_216dbee4_1754158361459.jpg";
import advisory5 from "@assets/WhatsApp Image 2025-08-02 at 23.21.40_b1683fba_1754158370770.jpg";
import advisory6 from "@assets/WhatsApp Image 2025-08-02 at 23.21.41_56288fdd_1754158380721.jpg";
import advisory7 from "@assets/image_1754158431342.png";
import advisory8 from "@assets/WhatsApp Image 2025-08-02 at 23.24.16_c742e764_1754158451185.jpg";
import advisory9 from "@assets/WhatsApp Image 2025-08-02 at 23.25.25_3a61b955_1754158472871.jpg";
import advisory10 from "@assets/WhatsApp Image 2025-08-02 at 23.22.01_7db63d1d_1754158509264.jpg";

// Import core team images
import core1 from "@assets/WhatsApp Image 2025-08-03 at 01.40.11_2ad1582e_1754166623947.jpg";
import core2 from "@assets/WhatsApp Image 2025-08-03 at 01.40.32_21880a83_1754166663787.jpg";
import core3 from "@assets/WhatsApp Image 2025-08-03 at 01.40.44_33c52f26_1754166706696.jpg";
import core4 from "@assets/WhatsApp Image 2025-08-03 at 01.41.27_587a91fb_1754166739482.jpg";
import core5 from "@assets/WhatsApp Image 2025-08-03 at 01.41.01_0e40a1f0_1754166766545.jpg";
import core6 from "@assets/WhatsApp Image 2025-08-03 at 01.41.11_7a672186_1754166784421.jpg";

// Import developer team images
import dev1 from "@assets/WhatsApp Image 2025-08-03 at 02.12.36_9c7b1733_1754167484753.jpg";
import dev2 from "@assets/WhatsApp Image 2025-08-03 at 02.13.29_9b630484_1754167503162.jpg";
import dev3 from "@assets/WhatsApp Image 2025-08-03 at 02.13.49_e850fada_1754167519212.jpg";

interface CommitteeMember {
  id: string;
  name: string;
  designation: string;
  image?: string;
}

// Patron data from the provided information
const patrons: CommitteeMember[] = [
  {
    id: "1",
    name: "Dr. T. R. Paarivendhar",
    designation: "Founder cum Chancellor",
    image: patron1
  },
  {
    id: "2", 
    name: "Dr. P. Ravi Pachamoothoo",
    designation: "Pro-Chancellor (Admin)",
    image: patron2
  },
  {
    id: "3",
    name: "Dr. P Sathyanarayanan",
    designation: "Pro-Chancellor (Academics)",
    image: patron3
  },
  {
    id: "4",
    name: "Dr. R. Shivakumar", 
    designation: "Vice President",
    image: patron4
  }
];

// Advisory Committee data from the provided images and document
const advisoryCommittee: CommitteeMember[] = [
  {
    id: "advisory-1",
    name: "Dr. C. Muthamizhchelvan",
    designation: "Vice-Chancellor, SRMIST",
    image: advisory1
  },
  {
    id: "advisory-2", 
    name: "Dr. S. Ponnusamy",
    designation: "Registrar, SRMIST",
    image: advisory2
  },
  {
    id: "advisory-3",
    name: "Prof. M. Leenus J Martin, Ph.D.",
    designation: "Dean (CET), SRMIST",
    image: advisory3
  },
  {
    id: "advisory-4",
    name: "Prof. B. Neppolian, Ph.D.",
    designation: "Dean (Research), SRMIST",
    image: advisory4
  },
  {
    id: "advisory-5",
    name: "Dr. Revathi Venkataraman",
    designation: "Chairperson, SoC, SRMIST",
    image: advisory5
  },
  {
    id: "advisory-6",
    name: "Dr. Pushpalatha M",
    designation: "Assoc. Chairperson, SoC, SRMIST",
    image: advisory6
  },
  {
    id: "advisory-7",
    name: "Dr G.Niranjana",
    designation: "Professor & Head, C.TECH., SRMIST",
    image: advisory7
  },
  {
    id: "advisory-8",
    name: "Dr. Poorvammal E",
    designation: "Convenor",
    image: advisory8
  },
  {
    id: "advisory-9",
    name: "Dr. Sowmiya B",
    designation: "Co-convenor",
    image: advisory9
  },
  {
    id: "advisory-10",
    name: "Dr. Subramanian V",
    designation: "Visiting Professor",
    image: advisory10
  }
];

const coreMembers: CommitteeMember[] = [
  {
    id: "core-1",
    name: "Shivam Bansal",
    designation: "President ISD Lab",
    image: core1
  },
  {
    id: "core-2", 
    name: "Harshil Malhotra",
    designation: "Member",
    image: core2
  },
  {
    id: "core-3",
    name: "Ashwin Kumar A",
    designation: "Member", 
    image: core3
  },
  {
    id: "core-4",
    name: "Harsh Arora",
    designation: "Member",
    image: core4
  },
  {
    id: "core-5",
    name: "Keshav Gupta",
    designation: "Member",
    image: core5
  },
  {
    id: "core-6",
    name: "Shan Neeraj",
    designation: "Member",
    image: core6
  }
];

const developers: CommitteeMember[] = [
  {
    id: "dev-1",
    name: "Aadarsh Jaiswal",
    designation: "Lead",
    image: dev1
  },
  {
    id: "dev-2",
    name: "Swapnil Vats",
    designation: "Co-Lead",
    image: dev2
  },
  {
    id: "dev-3",
    name: "Aayushman Ghodture",
    designation: "Co-Lead",
    image: dev3
  }
];

interface MemberCardProps {
  member: CommitteeMember;
}

function MemberCard({ member }: MemberCardProps) {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border-primary/20 hover:border-primary/40 bg-card/50 backdrop-blur-sm min-w-[280px] flex-shrink-0 neon-border hover:animate-pulse-glow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-colors relative">
            {member.image ? (
              <img
                src={member.image}
                alt={`${member.name} – ${member.designation}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-cyan-400/10 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20" />
              </div>
            )}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-primary/10 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {member.name}
            </h3>
            <p className="text-muted-foreground text-sm group-hover:text-cyan-400 transition-colors">
              {member.designation}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface CommitteeScrollerProps {
  members: CommitteeMember[];
  title: string;
}

function CommitteeScroller({ members, title }: CommitteeScrollerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('left')}
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/10"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll('right')}
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/10"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );  
}

export default function Committee() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent mb-6">
            Committee
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the distinguished leaders, advisors, and team members driving ROBOFEST 2025 forward
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-16 pb-16">
        {/* Patrons Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Patrons</h2>
          
          {/* Desktop Layout - Horizontal Row */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {patrons.map((patron) => (
              <MemberCard key={patron.id} member={patron} />
            ))}
          </div>
          
          {/* Mobile Layout - Horizontal Scroll */}
          <div className="md:hidden">
            <div className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4">
              {patrons.map((patron) => (
                <MemberCard key={patron.id} member={patron} />
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Committee Section */}
        <section>
          <CommitteeScroller 
            members={advisoryCommittee} 
            title="Advisory Committee" 
          />
        </section>

        {/* Core Members Section */}
        <section>
          <CommitteeScroller 
            members={coreMembers} 
            title="Core Members" 
          />
        </section>

        {/* Developers Section */}
        <section>
          <CommitteeScroller 
            members={developers} 
            title="Developers" 
          />
        </section>
      </div>
    </div>
  );
}