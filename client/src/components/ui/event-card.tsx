import { Card, CardContent } from "@/components/ui/card";
import EventModal from "@/components/ui/event-modal";
import { ReactNode } from "react";

interface EventCardProps {
  title: string;
  prize: string;
  entryFee: string;
  venue?: string;
  teamSize?: string;
  icon: ReactNode;
  description: string;
  borderColor: string;
  titleColor: string;
}

export default function EventCard({ 
  title, 
  prize, 
  entryFee, 
  venue, 
  teamSize, 
  icon, 
  description, 
  borderColor, 
  titleColor 
}: EventCardProps) {
  return (
    <Card className={`bg-gradient-to-br from-card/80 to-background/60 backdrop-blur-sm border-2 ${borderColor} card-hover transition-all duration-300 h-full flex flex-col`}>
      <CardContent className="p-4 sm:p-6 flex flex-col h-full">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-primary to-cyan-400 rounded-lg flex items-center justify-center text-black text-lg sm:text-xl lg:text-2xl">
              {icon}
            </div>
            <h3 className={`font-bold text-lg sm:text-xl lg:text-2xl ${titleColor} leading-tight`}>
              {title}
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 flex-grow">
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground">Prize Pool</p>
            <p className="font-bold text-lg sm:text-xl lg:text-2xl text-green-400">{prize}</p>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <p className="text-xs sm:text-sm text-muted-foreground">Entry Fee</p>
            <p className="font-bold text-lg sm:text-xl lg:text-2xl">{entryFee}</p>
          </div>
          {venue && (
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm text-muted-foreground">Venue</p>
              <p className="font-bold text-sm sm:text-base break-words">{venue}</p>
            </div>
          )}
          {teamSize && (
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm text-muted-foreground">Team Size</p>
              <p className="font-bold text-sm sm:text-base">{teamSize}</p>
            </div>
          )}
        </div>
        
        <p className="text-muted-foreground mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="mt-4 sm:mt-6 flex justify-center">
          <EventModal title={title} description={description} />
        </div>
      </CardContent>
    </Card>
  );
}


