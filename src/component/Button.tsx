import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className='cybr-btn z-10'
    >
      {label}
      <span aria-hidden className="cybr-btn__glitch">{label}</span>
      <span aria-hidden className="cybr-btn__tag z-50">R25</span>
    </button>
  );
};

export default Button;
