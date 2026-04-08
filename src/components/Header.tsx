import React from 'react';
import { Logo } from './Logo';

export const Header = () => (
  <div className="flex justify-between items-center pb-4 mb-8">
    <div className="flex items-center gap-2">
      <Logo className="h-8 w-auto" />
    </div>
  </div>
);
