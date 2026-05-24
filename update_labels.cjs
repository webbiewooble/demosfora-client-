const fs = require('fs');

let code = fs.readFileSync('gen_products.cjs', 'utf8');

code = code.replace(/One-Time Purchase/g, 'One-Time Order');
code = code.replace(/7-Day Pack Bundle/g, '7-Day Starter Pack');
code = code.replace(/30-Day Pack Bundle/g, '30-Day Monthly Pack <span style="background:#1A1A1A;color:#fff;font-size:10px;padding:2px 6px;border-radius:4px;margin-left:8px;font-weight:600;display:inline-block;">Most Popular</span>');
code = code.replace(/Custom Subscription/g, 'Build Your Custom Plan');

// Let's add an onclick to mainAddBtn to simulate checkout functionality.
code = code.replace(/<button id="main-add-btn"[^>]*>.*?(?=<\/button>)/g, function(match) {
    if(!match.includes('onclick="handleAddToCart()"')) {
        return match.replace('<button id="main-add-btn" class="btn btn-dark"', '<button id="main-add-btn" class="btn btn-dark" onclick="handleAddToCart()"');
    }
    return match;
});

// Let's also add the handleAddToCart function in the script block
code = code.replace(/window\.updateMainBtn = function\(\) \{[\s\S]*?\}\n/g, function(match) {
    let extra = `
          window.handleAddToCart = function() {
              let freq = "";
              if (window.isCustom) {
                  freq = document.getElementById('custom-freq').value;
              }
              const qty = document.getElementById('global-qty').value;
              
              const optionRadio = Array.from(document.querySelectorAll('.po-radio')).find(r => r.checked);
              const optionType = optionRadio ? optionRadio.value : 'onetime';
              
              alert(\`Added to cart! \\n\\nType: \${optionType}\\nTotal: ₹\${window.currentTotal * qty}\\n\\\`Bundle discounts applied at checkout\\\`\\n\\n(Manage subscriptions from your account section)\`);
          }
`;
    if (!code.includes('window.handleAddToCart = function()')) {
        return match + extra;
    }
    return match;
});

fs.writeFileSync('gen_products.cjs', code);

// also let's just make sure to rebuild the html pages
