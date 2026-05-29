const fs = require('fs');

let code = fs.readFileSync('gen_products.cjs', 'utf8');

// We have 3 products, let's just do a string replacement.
// The ingredients section starts with `<!-- Ingredients Section -->` and ends with `</section>\n\n<!-- You might also like section -->`

// Actually, wait, let's extract the ingredients block and place it before `<!-- FAQ Section -->`.
code = code.replace(/(<!-- FAQ Section -->[\s\S]*?<\/section>\n\n)(<!-- Ingredients Section -->[\s\S]*?<\/section>\n\n)/g, '$2$1');

fs.writeFileSync('gen_products.cjs', code);
