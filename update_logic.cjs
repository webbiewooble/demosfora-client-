const fs = require('fs');
let code = fs.readFileSync('gen_products.cjs', 'utf8');

// replace <input ... value="1"> for qty to 7 for custom qty inputs
// We need to be careful not to replace regular qty, only custom-qty if they are the same or not.
// In gen_products, custom input looks like:
// <input type="text" id="custom-qty" class="qty-input" value="1" readonly>
code = code.replace(/<input type="text" id="custom-qty" class="qty-input" value="1" readonly>/g, '<input type="text" id="custom-qty" class="qty-input" value="7" readonly>');

code = code.replace(/let customQty = 1;/g, 'let customQty = 7;');
code = code.replace(/if \(customQty < 1\) customQty = 1;/g, 'if (customQty < 7) customQty = 7;');

fs.writeFileSync('gen_products.cjs', code);
console.log('Fixed customQty bounds');
