const fs = require('fs');

let code = fs.readFileSync('gen_products.cjs', 'utf8');

// The backticks inside alert are breaking the ES6 template strings.
// Let's replace the alert blocks.
code = code.replace(/alert\(\`([\s\S]*?)\`\);/g, function(match, inner) {
    // Actually just replace all alert(...) entirely
    return `const msg = 'Added to cart! \\nType: ' + optionType + '\\nTotal: ₹' + (window.currentTotal * qty) + '\\n- Bundle discounts applied at checkout -\\n\\n(Manage subscriptions from your account section)'; alert(msg);`;
});

fs.writeFileSync('gen_products.cjs', code);
