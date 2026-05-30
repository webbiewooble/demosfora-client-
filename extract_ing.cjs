const fs = require('fs');
const code = fs.readFileSync('gen_products.cjs', 'utf8');
const lines = code.split('\n');
let start = lines.findIndex(l => l.includes('<!-- Ingredients Section -->'));
console.log(lines.slice(start, start + 100).join('\n'));
