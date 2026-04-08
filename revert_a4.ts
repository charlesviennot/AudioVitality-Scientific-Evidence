import fs from 'fs';

let content = fs.readFileSync('src/components/A4Page.tsx', 'utf8');

const replacements = {
    'w-[210mm] h-[297mm] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] mx-auto my-12 p-[15mm] relative box-border flex flex-col overflow-hidden': 'w-[210mm] min-h-[297mm] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] mx-auto my-12 p-[20mm] relative box-border flex flex-col overflow-hidden',
    'print:m-0 print:shadow-none print:bg-white print:before:hidden print:p-[15mm] print:w-[210mm] print:h-[297mm] print:page-break-after-always': 'print:m-0 print:shadow-none print:bg-white print:before:hidden print:p-[20mm] print:w-[210mm] print:h-[297mm] print:page-break-after-always'
};

for (const [oldStr, newStr] of Object.entries(replacements)) {
    content = content.split(oldStr).join(newStr);
}

fs.writeFileSync('src/components/A4Page.tsx', content);
console.log('A4Page.tsx reverted');
