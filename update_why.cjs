const fs = require('fs');

let index = fs.readFileSync('index.html', 'utf8');
let why = fs.readFileSync('why.html', 'utf8');

const target = '<li><span class="dot dot-gold"></span>Built for consistency, not trends</li>';
const replacement = target + '\n        <li><span class="dot dot-gold"></span>Independently lab tested for purity & nutrition</li>';

index = index.replace(target, replacement);
why = why.replace(target, replacement);

// Manifest item in index.html
const manifestTarget = '<div class="manifesto-item"><span class="manifesto-icon">✕</span><span class="manifesto-text">No nonsense</span></div>';
const manifestReplacement = manifestTarget + '\n    <div class="manifesto-item"><span class="manifesto-icon">✓</span><span class="manifesto-text">Lab Tested</span></div>';
index = index.replace(manifestTarget, manifestReplacement);

fs.writeFileSync('index.html', index);
fs.writeFileSync('why.html', why);

console.log('Updated index and why differences lists');
