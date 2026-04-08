import React from 'react';

export const MainLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 600 120" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="main-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="30" fill="url(#main-logo-grad)" />
    <text x="120" y="80" font-family="Inter, sans-serif" font-weight="800" font-size="60" letter-spacing="0.05em" fill="#1d1d1f">
      AUDIOVITALITY
    </text>
    <text x="120" y="110" font-family="Inter, sans-serif" font-weight="500" font-size="24" letter-spacing="0.05em" fill="#515154">
      Scientific Evidence
    </text>
  </svg>
);
