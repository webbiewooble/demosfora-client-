const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Title tags
  content = content.replace(/<title>9AM — Own Your Morning<\/title>/g, '<title>9AM — High Protein Oats | Own Your Morning</title>');
  content = content.replace(/<title>Why 9AM<\/title>/g, '<title>Why 9AM — High Protein Oats</title>');
  content = content.replace(/<title>Products \| 9AM<\/title>/g, '<title>High Protein Oats Products | 9AM</title>');
  content = content.replace(/<title>Subscribe \| 9AM<\/title>/g, '<title>Subscribe | High Protein Oats | 9AM</title>');
  
  // Description tags
  content = content.replace(
    /<meta name="description" content="A disciplined lifestyle system built around your 9 AM routine\. No sugar\. No shortcuts\. Real nutrition\." \/>/g,
    '<meta name="description" content="A disciplined lifestyle system built around your 9 AM routine. Premium high protein oats. No sugar. No shortcuts. Real nutrition." />'
  );

  // Hero in index.html specifically
  if (file === 'index.html') {
    content = content.replace(
      '<h1>Healthy Breakfast in 30 Seconds | The 9 AM Co.</h1>',
      '<h1>High Protein Oats in 30 Seconds | The 9 AM Co.</h1>'
    );
    content = content.replace(
      '<p class="hero-sub">Quick healthy oats made for busy mornings. Real ingredients, no refined sugar, and ready in just 30 seconds.</p>',
      '<p class="hero-sub">Quick, clean, high protein oats made for busy mornings. Real ingredients, no refined sugar, and ready in just 30 seconds.</p>'
    );
  }

  // Footer Tagline (this shows up in almost all files)
  // Let's add it there too for good measure
  content = content.replace(
    '<p class="footer-tagline">Discipline starts at breakfast. Clean food for people who show up.</p>',
    '<p class="footer-tagline">Discipline starts at breakfast. Premium high protein oats for people who show up.</p>'
  );

  fs.writeFileSync(file, content);
  console.log(`Updated SEO for ${file}`);
}

// Now update gen_products.cjs
let genCode = fs.readFileSync('gen_products.cjs', 'utf8');
genCode = genCode.replace(
  /<title>\$\{product\.name\} \| 9AM<\/title>/g,
  '<title>${product.name} | High Protein Oats | 9AM</title>'
);
genCode = genCode.replace(
  /<meta name="description" content="Shop \$\{product\.name\} from 9AM\. Clean ingredients, no added sugar, perfectly portioned for your 9 AM routine\." \/>/g,
  '<meta name="description" content="Shop ${product.name} from 9AM. Premium high protein oats. Clean ingredients, no added sugar, perfectly portioned for your 9 AM routine." />'
);
fs.writeFileSync('gen_products.cjs', genCode);
console.log('Updated gen_products.cjs for SEO');

