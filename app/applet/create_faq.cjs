const fs = require('fs');
const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

// Extract header and footer from index.html
const indexHtml = fs.readFileSync('index.html', 'utf8');

const headMatch = indexHtml.match(/([\s\S]*?)<body>/)[1];
const navMatch = indexHtml.match(/(<nav class="nav-9am">[\s\S]*?<\/nav>)/)[1];
const footerMatch = indexHtml.match(/(<footer class="footer">[\s\S]*?<\/footer>)/)[1];
const scriptsMatch = indexHtml.match(/(<script>[\s\S]*?<\/html>)/)[1];

const faqHtml = `${headMatch.replace('</style>', '.page-offset { padding-top: 140px !important; }\n.faq-page-list details { background: #1A1A1A; color: #F8F6F2; border-radius: 8px; margin-bottom: 8px; }\n.faq-page-list summary { padding: 20px 24px; font-weight: 600; font-size: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }\n.faq-page-list summary::-webkit-details-marker { display: none; }\n.faq-page-list .faq-icon { font-size: 20px; font-family: monospace; transition: transform 0.2s; }\n.faq-page-list details[open] .faq-icon { transform: rotate(90deg); }\n.faq-page-list .faq-content { padding: 0 24px 24px; font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.6; }\n</style>')}<body>
${navMatch}

<section class="section page-offset" style="min-height: 70vh;">
  <div class="ctn" style="max-width: 800px;">
    <h1 style="font-size: clamp(40px, 5vw, 56px); font-weight: 800; text-align: center; margin-bottom: 24px; letter-spacing: -0.02em; line-height: 1.1;">FAQs</h1>
    <p style="text-align: center; color: #8A8A8A; font-size: 18px; margin-bottom: 48px;">Everything you need to know about 9AM.</p>
    
    <div class="faq-page-list">
      <details>
        <summary>
          <span>Is 9AM Oats good for weight loss?</span>
          <span class="faq-icon">›</span>
        </summary>
        <div class="faq-content">
          Yes, it is high in fibre and protein which helps keep you full for longer, making it a great addition to a weight management plan.
        </div>
      </details>

      <details>
        <summary>
          <span>Can I eat 9AM Oats daily?</span>
          <span class="faq-icon">›</span>
        </summary>
        <div class="faq-content">
          Yes! Our products are designed to be a healthy and satisfying daily breakfast option.
        </div>
      </details>

      <details>
        <summary>
          <span>Do your products contain added sugar?</span>
          <span class="faq-icon">›</span>
        </summary>
        <div class="faq-content">
          No, all 9AM products contain zero added sugar. We naturally sweeten our recipes using premium Date Powder and Jaggery.
        </div>
      </details>

      <details>
        <summary>
          <span>Are they suitable for fitness diets?</span>
          <span class="faq-icon">›</span>
        </summary>
        <div class="faq-content">
          Absolutely. With up to 18g of high-quality protein per serving, it’s an excellent choice for active individuals.
        </div>
      </details>

      <details>
        <summary>
          <span>Can kids eat 9AM Oats?</span>
          <span class="faq-icon">›</span>
        </summary>
        <div class="faq-content">
          Yes, our clean ingredient list makes it a nutritious and safe option for both adults and kids.
        </div>
      </details>

      <details>
        <summary>
          <span>How does the custom subscription plan work?</span>
          <span class="faq-icon">›</span>
        </summary>
        <div class="faq-content">
          Our custom plan allows you to choose your desired number of packets (minimum 7) and select a delivery frequency that suits your routine. You also save on the total price.
        </div>
      </details>
    </div>
  </div>
</section>

${footerMatch}
${scriptsMatch}`;

fs.writeFileSync('faq.html', faqHtml);
console.log('Created faq.html');

// Add FAQ to navigation in all HTML files
for (const file of htmlFiles) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('<a href="faq.html">FAQ</a>')) {
    continue;
  }
  
  // Desktop Nav
  content = content.replace(
    '<a href="about.html">About</a>',
    '<a href="about.html">About</a>\n    <a href="faq.html">FAQ</a>'
  );
  
  // Mobile Nav
  content = content.replace(
    '<a href="about.html" onclick="this.parentElement.classList.remove(\'open\')">About</a>',
    '<a href="about.html" onclick="this.parentElement.classList.remove(\'open\')">About</a>\n  <a href="faq.html" onclick="this.parentElement.classList.remove(\'open\')">FAQ</a>'
  );
  
  fs.writeFileSync(file, content);
  console.log('Updated nav in', file);
}

// Update gen_products.cjs so newly generated products have the FAQ link
let genProducts = fs.readFileSync('gen_products.cjs', 'utf8');

// The nav section in gen_products is typically injected via exact string matches, but it dynamically reads index.html.
// Wait! gen_products.cjs reads index.html dynamically:
// const html = fs.readFileSync('index.html', 'utf8');
// const navMatch = html.match(/(<nav class="nav-9am">[\s\S]*?<\/nav>)/)[1];
// So if index.html is updated, gen_products.cjs will automatically pick up the new nav.
// Let's just manually run gen_products.cjs to regenerate the product pages.
console.log('gen_products reads from index.html automatically. Done.');
