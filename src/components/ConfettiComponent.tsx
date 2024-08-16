'use client'
import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiComponent = () => {

  useEffect(() => {
    confetti({
      particleCount: 250,
      spread: 100,
      origin: { y: 0.8 },
      colors: ['#ff0f0f', '#ffbc00', '#00d2ff', '#00ff48'],
      gravity: 0.5,
    });
  }, []);

  return (
    <div>
    </div>
  );
};

export default ConfettiComponent;
