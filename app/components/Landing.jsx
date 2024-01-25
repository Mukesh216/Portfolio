'use client'

import { useState, useEffect } from 'react';

const Particle = ({ x, y }) => (
  <div className="particle" style={{ left: x, top: y }}></div>
);

const Landing = () => {

  const [particles, setParticles] = useState([]);
  
  const handleMouseMove = (event) => {
    const newParticles = [
      ...particles,
      { id: particles.length, x: event.clientX, y: event.clientY },
    ];
    setParticles(newParticles);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setParticles((prevParticles) => {
        // Remove particles after a certain time or distance
        return prevParticles.filter((particle) => particle.id < particles.length && particle.id > particles.length - 10);
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [particles]);

  return (
    <div className="w-full h-full" onMouseMove={handleMouseMove}>
      <div className="flex justify-center items-center w-full h-full relative">
        {/* Your existing content */}
        <div className="w-1/2">
          {/* Your text content */}
        </div>

        {/* Particle animations */}
        {particles.map((particle) => (
          <Particle key={particle.id} x={particle.x} y={particle.y} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
