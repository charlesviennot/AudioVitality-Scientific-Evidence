import React from 'react';
import { cn } from '../lib/utils';
import { useViewMode } from '../ViewContext';

interface A4PageProps {
  children: React.ReactNode;
  pageNumber?: number;
  className?: string;
  mode?: 'web' | 'pdf';
}

export const A4Page: React.FC<A4PageProps> = ({ children, pageNumber, className, mode }) => {
  const contextMode = useViewMode();
  const currentMode = mode || contextMode;
  const isWeb = currentMode === 'web';

  return (
    <div 
      className={cn(
        "bg-white relative box-border flex flex-col",
        isWeb 
          ? "w-full max-w-4xl rounded-2xl shadow-sm mx-auto my-6 p-8 md:p-12 h-auto" 
          : "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] mx-auto my-8 shrink-0 pdf-page-break overflow-hidden",
        !isWeb && "before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom_right,#eff6ff4d,transparent,#faf5ff4d)] before:pointer-events-none",
        "print:m-0 print:shadow-none print:bg-white print:before:hidden print:overflow-hidden print:rounded-none",
        className
      )}
      style={!isWeb ? { 
        width: '210mm', 
        height: '297mm', 
        minWidth: '210mm', 
        maxWidth: '210mm', 
        minHeight: '297mm', 
        maxHeight: '297mm',
        padding: '15mm'
      } : undefined}
    >
      <div className="flex-grow z-10 relative">
        {children}
      </div>
      {!isWeb && pageNumber && (
        <div className="absolute bottom-[10mm] left-0 right-0 text-center text-[10px] text-[#86868b] font-mono no-print z-10">
          {pageNumber}
        </div>
      )}
    </div>
  );
};
