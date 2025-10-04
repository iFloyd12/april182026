import { useEffect, useState } from 'react';
import FlipDigit from './FlipDigit';

export default function Countdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-04-18T00:00:00') - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  if (!timeLeft) {
    return <div style={{ textAlign: 'center', padding: '1rem' }}>🎉 The wedding day is here! 🎉</div>;
  }

  // Helper to pad single digit numbers with leading zero
  const pad = (num) => String(num).padStart(2, '0');

  const { days, hours, minutes, seconds } = timeLeft;
  const daysStr = String(days);
  const hoursStr = pad(hours);
  const minutesStr = pad(minutes);
  const secondsStr = pad(seconds);

  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <h3>Countdown to our Wedding:</h3>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', display: 'inline-flex' }}>
        {/* Days (can be multiple digits) */}
        {daysStr.split('').map((d, i) => (
          <FlipDigit key={`days-${i}`} digit={d} />
        ))}
        <span style={{ alignSelf: 'flex-end', paddingLeft: '4px', fontSize: '1.2rem' }}>d</span>

        <span style={{ padding: '0 8px', fontSize: '2rem' }}>:</span>

        {/* Hours */}
        {hoursStr.split('').map((d, i) => (
          <FlipDigit key={`hours-${i}`} digit={d} />
        ))}
        <span style={{ alignSelf: 'flex-end', paddingLeft: '4px', fontSize: '1.2rem' }}>h</span>

        <span style={{ padding: '0 8px', fontSize: '2rem' }}>:</span>

        {/* Minutes */}
        {minutesStr.split('').map((d, i) => (
          <FlipDigit key={`minutes-${i}`} digit={d} />
        ))}
        <span style={{ alignSelf: 'flex-end', paddingLeft: '4px', fontSize: '1.2rem' }}>m</span>

        <span style={{ padding: '0 8px', fontSize: '2rem' }}>:</span>

        {/* Seconds */}
        {secondsStr.split('').map((d, i) => (
          <FlipDigit key={`seconds-${i}`} digit={d} />
        ))}
        <span style={{ alignSelf: 'flex-end', paddingLeft: '4px', fontSize: '1.2rem' }}>s</span>
      </div>
    </div>
  );
}
