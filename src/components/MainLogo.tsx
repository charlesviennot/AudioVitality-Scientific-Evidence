import React from 'react';
import logo from './logo/AVI_Logo_Black.png';

export const MainLogo = ({ className }: { className?: string }) => (
  <img src={logo} alt="AudioVitality Logo" className={className} />
);
