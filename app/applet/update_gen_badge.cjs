const fs = require('fs');

const badgeHtml = `
        <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 40px; font-size: 13px; color: #1A1A1A; font-weight: 500; background: #EAE6DF; padding: 12px 16px; border-radius: 8px; border: 1px solid #DDD8CF;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
          <div>Independently lab-tested for purity and nutrition. Quality you can trust.</div>
        </div>
`;

let code = fs.readFileSync('gen_products.cjs', 'utf8');

// The line before is: <button id="main-add-btn" class="btn btn-dark" onclick="handleAddToCart()" style="flex: 1; padding: 16px; font-size: 16px;">Add to Cart - ₹499</button>\n        </div>
code = code.replace(/(<button id="main-add-btn"[\s\S]*?<\/button>\s*<\/div>)/g, `$1\n${badgeHtml}`);

fs.writeFileSync('gen_products.cjs', code);
console.log('Updated gen_products badge');
