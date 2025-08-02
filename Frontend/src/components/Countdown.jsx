import { useEffect, useState } from 'react';

function Countdown() {
  const eventDate = new Date('2025-11-01T07:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#8cca00] text-white text-center p-6">
      <h2 className="text-3xl font-bold mb-4">Faltan...</h2>
        <div className="flex justify-center gap-6 text-3xl font-mono">
        <div><span className="font-bold">{timeLeft.days}</span> días</div>
        <div><span className="font-bold">{timeLeft.hours}</span> hrs</div>
        <div><span className="font-bold">{timeLeft.minutes}</span> min</div>
        <div><span className="font-bold">{timeLeft.seconds}</span> seg</div>
      </div>
    </section>
  );
}

export default Countdown;
