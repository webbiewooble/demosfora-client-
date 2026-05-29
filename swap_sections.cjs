const fs = require('fs');

let code = fs.readFileSync('gen_products.cjs', 'utf8');

// For product bowl, it has FAQ Section then Ingredients Section.
// Let's capture the FAQ Section
const faqRegex = /<!-- FAQ Section -->[\s\S]*?(?=<!-- Ingredients Section -->)/;
const ingRegex = /<!-- Ingredients Section -->[\s\S]*?<\/section>\n/;

const faqMatch = code.match(faqRegex);
const ingMatch = code.match(ingRegex);

if (faqMatch && ingMatch) {
    // Both exist, so let's swap them.
    // Wait, the block starts with FAQ, ends before Ingredients.
    // So the structure is: [FAQ Content][Ingredients Content]
    // We want: [Ingredients Content][FAQ Content]
    
    // Let's replace the whole combined block.
    const combinedBlockRegex = /(<!-- FAQ Section -->[\s\S]*?)(<!-- Ingredients Section -->[\s\S]*?<\/section>\n)/;
    code = code.replace(combinedBlockRegex, '$2\n$1');
    fs.writeFileSync('gen_products.cjs', code);
    console.log("Swapped for product-bowl!");
} else {
    console.log("Didn't match");
}
