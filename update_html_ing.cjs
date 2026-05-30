const fs = require('fs');
let indexCode = fs.readFileSync('index.html', 'utf8');
let productsCode = fs.readFileSync('products.html', 'utf8');

const regex = /<div class="prod-ingredients">.*?<\/div>/g;
function replacer(match) {
    if (match.includes("Mango")) {
        return '<div class="prod-ingredients"><span>Ragi</span><span>Whey</span><span>Mango</span></div>';
    } else if (match.includes("Coffee")) {
        return '<div class="prod-ingredients"><span>Ragi</span><span>Whey</span><span>Coffee</span></div>';
    } else if (match.includes("Almonds") || match.includes("Cocoa")) {
        return '<div class="prod-ingredients"><span>Ragi</span><span>Whey</span><span>Cocoa</span></div>';
    }
    return '<div class="prod-ingredients"><span>Ragi</span><span>Whey</span><span>Oats</span></div>';
}

indexCode = indexCode.replace(regex, replacer);
productsCode = productsCode.replace(regex, replacer);

fs.writeFileSync('index.html', indexCode);
fs.writeFileSync('products.html', productsCode);
console.log("Updated index.html and products.html ingredients");
