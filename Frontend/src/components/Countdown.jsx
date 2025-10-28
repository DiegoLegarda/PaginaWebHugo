import { useEffect, useState } from "react";
import FlipDigit from "./FlipDigit";

export default function Countdown() {
  const eventDate = new Date("2025-11-16T06:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#B7E300] py-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#082E73] mb-8 uppercase">
        Faltan...
      </h2>

      <div className="flex justify-center gap-4 md:gap-8">
        <FlipDigit value={timeLeft.days} label="Días" />
        <FlipDigit value={timeLeft.hours} label="Horas" />
        <FlipDigit value={timeLeft.minutes} label="Min" />
        <FlipDigit value={timeLeft.seconds} label="Seg" />
      </div>
    </section>
  );
}

