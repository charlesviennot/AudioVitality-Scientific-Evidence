import React from 'react';

export const Logo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 260 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="20" cy="20" r="12" fill="url(#logo-grad)" />
    <text x="45" y="28" font-family="Inter, sans-serif" font-weight="700" font-size="24" letter-spacing="0.05em" fill="#1d1d1f">
      AUDIOVITALITY
    </text>
  </svg>
);
