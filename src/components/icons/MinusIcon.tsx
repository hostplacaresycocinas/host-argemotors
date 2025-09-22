import React from 'react';

interface MinusIconProps {
  className?: string;
}

const MinusIcon: React.FC<MinusIconProps> = ({ className = 'w-4 h-4' }) => {
  return (
    <svg
      className={className}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M20 12H4'
      />
    </svg>
  );
};

export default MinusIcon;
