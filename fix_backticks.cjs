const fs = require('fs');

let code = fs.readFileSync('gen_products.cjs', 'utf8');

// First remove the bad handleAddToCart to restore sanity
code = code.replace(/window\.handleAddToCart = function\(\) \{[\s\S]*?\}\n/g, '');

// Now add it properly, without using backticks inside the alert, which would break the template string.
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
              
              const msg = 'Added to cart! \\n\\nType: ' + optionType + '\\nTotal: ₹' + (window.currentTotal * qty) + '\\n- Bundle discounts applied at checkout -\\n\\n(Manage subscriptions from your account section)';
              alert(msg);
          }
`;
    return match + extra;
});

fs.writeFileSync('gen_products.cjs', code);
