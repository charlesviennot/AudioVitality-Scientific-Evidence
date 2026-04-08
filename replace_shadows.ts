import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    content = content.replace(/shadow-sm/g, 'shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]');
    content = content.replace(/shadow-2xl/g, 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]');
    
    if (content !== original) {
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
}

const files = [
    'src/App.tsx',
    'src/components/A4Page.tsx',
    'src/components/Charts.tsx',
    'src/components/EvidenceGrid.tsx',
    'src/components/Header.tsx'
];

files.forEach(f => {
    if (fs.existsSync(f)) replaceInFile(f);
});
