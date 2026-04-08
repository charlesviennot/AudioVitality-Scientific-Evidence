import fs from 'fs';

let content = fs.readFileSync('src/components/Charts.tsx', 'utf8');

const replacements = {
    'h-[240px] w-full mt-6 mb-8': 'h-[280px] w-full mt-8 mb-10',
    'h-[220px] w-full mt-6 mb-8': 'h-[240px] w-full mt-8 mb-10'
};

for (const [oldStr, newStr] of Object.entries(replacements)) {
    content = content.split(oldStr).join(newStr);
}

fs.writeFileSync('src/components/Charts.tsx', content);
console.log('Charts.tsx reverted');
