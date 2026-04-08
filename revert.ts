import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf8');

const replacements = {
    'text-[14px]': 'text-[15px]',
    'space-y-4': 'space-y-5',
    '<section className="mb-6">': '<section className="mb-8">',
    '<section className="mt-10">': '<section className="mt-16">',
    'text-2xl font-serif': 'text-3xl font-serif',
    'text-xl font-serif': 'text-2xl font-serif',
    'text-lg font-semibold': 'text-xl font-semibold',
    'text-base text-[#1d1d1f]': 'text-lg text-[#1d1d1f]',
    'text-xs font-bold text-blue-600': 'text-sm font-bold text-blue-600'
};

for (const [oldStr, newStr] of Object.entries(replacements)) {
    content = content.split(oldStr).join(newStr);
}

fs.writeFileSync('src/App.tsx', content);
console.log('App.tsx reverted');
