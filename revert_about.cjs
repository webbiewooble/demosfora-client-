const fs = require('fs');

const replacement = `<!-- ABOUT -->
<section class="section about reveal" id="about">
<div class="ctn">
  <p class="label">Our Story</p>
  <h2>We were tired of complicated health food.</h2>
  <p class="about-text">Every "healthy" brand we tried had a paragraph of ingredients we couldn't pronounce. Sugar hidden behind ten different names. Marketing louder than the product.</p>
  <p class="about-text">So we built something simple. Premium products. Real ingredients. One system. Show up at 9 AM, eat clean, and track your consistency. That's the whole philosophy.</p>
  <p class="about-text" style="color:#C8A27A;font-style:italic;font-weight:600;">"We're not building a brand. We're building a habit."</p>
</div>
</section>`;

let indexCode = fs.readFileSync('index.html', 'utf8');
indexCode = indexCode.replace(/<style>\s*@media \(min-width: 768px\) \{\s*\.about-grid[\s\S]*?<\/style>\s*<section class="section about reveal" id="about"[^>]*>[\s\S]*?<\/section>/, replacement);
fs.writeFileSync('index.html', indexCode);

let aboutCode = fs.readFileSync('about.html', 'utf8');
const aboutReplacement = replacement.replace('class="section about reveal"', 'class="section about reveal page-offset"');
aboutCode = aboutCode.replace(/<style>\s*@media \(min-width: 768px\) \{\s*\.about-grid[\s\S]*?<\/style>\s*<section class="section about reveal page-offset" id="about" [^>]*>[\s\S]*?<\/section>/, aboutReplacement);
// fallback if the class was not exactly page-offset in regex
aboutCode = aboutCode.replace(/<style>\s*@media \(min-width: 768px\) \{\s*\.about-grid[\s\S]*?<\/style>\s*<section class="section about reveal"[^>]*>[\s\S]*?<\/section>/, aboutReplacement);

fs.writeFileSync('about.html', aboutCode);
console.log('Done replacing');
