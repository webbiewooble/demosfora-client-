const fs = require('fs');
let code = fs.readFileSync('gen_products.cjs', 'utf8');
code = code.replace(/<div class="po-desc">Select custom number of packets\/days\.<\/div>/g, '<div class="po-desc">Select custom number of packets/days (minimum 7 packets).</div>');
fs.writeFileSync('gen_products.cjs', code);
console.log('Done');
