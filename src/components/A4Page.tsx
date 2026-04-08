import React from 'react';
import { cn } from '../lib/utils';

interface A4PageProps {
  children: React.ReactNode;
  pageNumber?: number;
  className?: string;
}

export const A4Page: React.FC<A4PageProps> = ({ children, pageNumber, className }) => {
  return (
    <div 
      className={cn(
        "w-[210mm] min-h-[297mm] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] mx-auto my-12 p-[20mm] relative box-border flex flex-col",
        "before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom_right,#eff6ff4d,transparent,#faf5ff4d)] before:pointer-events-none",
        "print:m-0 print:shadow-none print:bg-white print:before:hidden print:p-[20mm] print:w-[210mm] print:h-[297mm] print:page-break-after-always pdf-page-break",
        className
      )}
    >
      <div className="flex-grow z-10 relative">
        {children}
      </div>
      {pageNumber && (
        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-[10px] text-[#86868b] font-mono no-print z-10">
          {pageNumber}
        </div>
      )}
    </div>
  );
};
