const fs = require('fs');

const code = fs.readFileSync('gen_products.cjs', 'utf8');

const faqIdx = code.indexOf('<!-- FAQ Section -->');
const ingIdx = code.indexOf('<!-- Ingredients Section -->');
const ymalIdx = code.indexOf('<!-- You might also like section -->');

console.log("FAQ at", faqIdx);
console.log("Ingredients at", ingIdx);
console.log("YMAL at", ymalIdx);
