import React from 'react';

interface BouncingBallProps {
  className?: string;
}

export const BouncingBall: React.FC<BouncingBallProps> = ({ className = '' }) => {
  return (
    <div className={`bouncing-ball ${className}`}>
      <div className="ball"></div>
    </div>
  );
};