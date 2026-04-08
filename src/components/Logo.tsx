import React from 'react';
import logo from './logo/AVI_Logo_Black.png';

export const Logo = ({ className }: { className?: string }) => (
  <img src={logo} alt="AudioVitality Logo" className={className} />
);
