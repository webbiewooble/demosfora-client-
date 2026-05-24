const fs = require('fs');

const replacement = `<div class="pricing-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); max-width: 1000px;">
      <div class="price-card std">
        <h3>7-Day Pack Bundle</h3>
        <p style="font-size: 14px; color: #8A8A8A; margin: 8px 0 16px;">Buy 7 packets together for the week.</p>
        <ul class="price-features">
          <li><svg class="check" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="#C8A27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>7 packets delivered together</li>
          <li><svg class="check" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="#C8A27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Flat ₹10 discount on total price</li>
        </ul>
        <a href="products.html" class="btn btn-dark" style="width:100%; text-decoration: none;">Shop 7-Day Pack</a>
      </div>
      <div class="price-card hl">
        <span class="price-badge">Monthly Pack</span>
        <h3>30-Day Pack Bundle</h3>
        <p style="font-size: 14px; color: rgba(255,255,255,.7); margin: 8px 0 16px;">Buy 30 packets together for the month.</p>
        <ul class="price-features">
          <li><svg class="check" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="#C8A27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>30 packets delivered together</li>
          <li><svg class="check" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="#C8A27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Flat ₹25 discount on total price</li>
        </ul>
        <a href="products.html" class="btn btn-accent" style="width:100%; text-decoration: none;">Shop 30-Day Pack</a>
      </div>
      <div class="price-card std">
        <h3>Custom Subscription</h3>
        <p style="font-size: 14px; color: #8A8A8A; margin: 8px 0 16px;">Select custom number of packets and days.</p>
        <ul class="price-features">
          <li><svg class="check" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="#C8A27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Adjustable custom quantity</li>
          <li><svg class="check" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="#C8A27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Choose delivery frequency</li>
          <li><svg class="check" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-6" stroke="#C8A27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Every day, alternate, or weekly delivery</li>
        </ul>
        <a href="products.html" class="btn btn-dark" style="width:100%; text-decoration: none;">Customize Subscription</a>
      </div>
    </div>`;

for (let file of ['index.html', 'subscribe.html']) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Instead of regex, split on `<div class="pricing-grid"`
    let parts = content.split('<div class="pricing-grid"');
    if (parts.length > 1) {
        // the grid ends where we have </div> </div> and then <div style="background:#F8F6F2;
        // let's just find the end of the 3 price cards. We know the last button is "Customize Plan</button></div>"
        // Let's find "Customize Plan</button>"
        let endIdx = parts[1].indexOf('Customize Plan</button>');
        if(endIdx !== -1) {
             let divEndIdx = parts[1].indexOf('</div>', endIdx);
             let fullEndIdx = parts[1].indexOf('</div>', divEndIdx + 6);
             // parts[1] up to fullEndIdx + 6 is our old grid.
             content = parts[0] + replacement + parts[1].substring(fullEndIdx + 6);
             fs.writeFileSync(file, content);
             console.log("Updated", file);
        } else {
             console.log("Could not find end button in", file);
        }
    }
}
