import { useEffect, useState } from 'react';

export default function FlipDigit({ digit }) {
  const [previousDigit, setPreviousDigit] = useState(digit);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (digit !== previousDigit) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setFlipping(false);
        setPreviousDigit(digit);
      }, 600); // animation duration
      return () => clearTimeout(timeout);
    }
  }, [digit, previousDigit]);

  return (
    <div className="flip-digit">
      <div className={`flip-card ${flipping ? 'flipping' : ''}`}>
        <div className="flip-card-front">{previousDigit}</div>
        <div className="flip-card-back">{digit}</div>
      </div>

      <style jsx>{`
        .flip-digit {
          display: inline-block;
          perspective: 1000px;
          margin: 0 3px;
          width: 40px;
          height: 60px;
          font-size: 2rem;
          font-weight: bold;
          line-height: 60px;
          text-align: center;
          color: #333;
        }
        .flip-card {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s ease-in-out;
        }
        .flipping {
          transform: rotateX(-180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 6px;
          background: #f8c8dc;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .flip-card-front {
          transform: rotateX(0deg);
          z-index: 2;
        }
        .flip-card-back {
          transform: rotateX(180deg);
          z-index: 1;
          color: #a8325f;
        }
      `}</style>
    </div>
  );
}
