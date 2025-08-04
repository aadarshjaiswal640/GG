import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-10T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
      <div className="bg-card/50 backdrop-blur-md rounded-lg p-4 border border-primary/30">
        <div className="text-2xl md:text-3xl font-bold text-primary animate-pulse-glow">
          {timeLeft.days}
        </div>
        <div className="text-sm text-muted-foreground">DAYS</div>
      </div>
      <div className="bg-card/50 backdrop-blur-md rounded-lg p-4 border border-primary/30">
        <div className="text-2xl md:text-3xl font-bold text-primary animate-pulse-glow">
          {timeLeft.hours}
        </div>
        <div className="text-sm text-muted-foreground">HOURS</div>
      </div>
      <div className="bg-card/50 backdrop-blur-md rounded-lg p-4 border border-primary/30">
        <div className="text-2xl md:text-3xl font-bold text-primary animate-pulse-glow">
          {timeLeft.minutes}
        </div>
        <div className="text-sm text-muted-foreground">MINUTES</div>
      </div>
      <div className="bg-card/50 backdrop-blur-md rounded-lg p-4 border border-primary/30">
        <div className="text-2xl md:text-3xl font-bold text-primary animate-pulse-glow">
          {timeLeft.seconds}
        </div>
        <div className="text-sm text-muted-foreground">SECONDS</div>
      </div>
    </div>
  );
}
