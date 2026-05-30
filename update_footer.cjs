const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const badgeHtml = `
    <div style="display: flex; align-items: flex-start; gap: 8px; margin-top: 24px; font-size: 13px; color: #1A1A1A; font-weight: 500; background: #EAE6DF; padding: 12px 16px; border-radius: 8px; border: 1px solid #DDD8CF; max-width: 260px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A27A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
      <div>Every batch is independently lab-tested for nutrition & purity.</div>
    </div>`;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('independently lab-tested')) {
    // Add to footer
    content = content.replace(
      '<p class="footer-tagline">Discipline starts at breakfast. Clean food for people who show up.</p>',
      '<p class="footer-tagline">Discipline starts at breakfast. Clean food for people who show up.</p>' + badgeHtml
    );
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
}
