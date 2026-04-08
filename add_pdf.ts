import fs from 'fs';

let appContent = fs.readFileSync('src/App.tsx', 'utf8');

// Add imports
appContent = appContent.replace(
    "import { Printer } from 'lucide-react';",
    "import { Download, Loader2 } from 'lucide-react';\nimport html2pdf from 'html2pdf.js';\nimport { useRef, useState } from 'react';"
);

// Update App component
const oldAppStart = `export default function App() {
  const handlePrint = () => {
    window.print();
  };`;

const newAppStart = `export default function App() {
  const [isGenerating, setIsGenerating] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    if (!contentRef.current) return;
    
    setIsGenerating(true);
    
    // Add a class to body to trigger PDF-specific styles
    document.body.classList.add('pdf-exporting');
    
    try {
      const element = contentRef.current;
      const opt = {
        margin:       0,
        filename:     'AudioVitality_Scientific_Evidence.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: 'css', avoid: '.avoid-break' }
      };
      
      await html2pdf().set(opt).from(element).save();
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      document.body.classList.remove('pdf-exporting');
      setIsGenerating(false);
    }
  };`;

appContent = appContent.replace(oldAppStart, newAppStart);

// Update button
const oldButton = `{/* Floating Print Button */}
      <button 
        onClick={handlePrint}
        className="fixed bottom-8 right-8 bg-[#1d1d1f] text-white p-4 rounded-full shadow-2xl hover:bg-black transition-all z-50 no-print flex items-center gap-2 group"
      >
        <Printer className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-medium">
          Print / Save PDF
        </span>
      </button>`;

const newButton = `{/* Floating Print Button */}
      <button 
        onClick={handleDownloadPdf}
        disabled={isGenerating}
        className="fixed bottom-8 right-8 bg-[#1d1d1f] text-white p-4 rounded-full shadow-2xl hover:bg-black transition-all z-50 no-print flex items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-medium">
          {isGenerating ? 'Generating PDF...' : 'Download PDF'}
        </span>
      </button>

      <div ref={contentRef} className="pdf-content-wrapper">`;

appContent = appContent.replace(oldButton, newButton);

// Close the new div
appContent = appContent.replace('      </div>\n    </div>\n  );\n}', '        </div>\n      </div>\n    </div>\n  );\n}');

fs.writeFileSync('src/App.tsx', appContent);
console.log('App.tsx updated for PDF download');
