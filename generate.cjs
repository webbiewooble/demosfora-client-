const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const headMatch = html.match(/([\s\S]*?)<body>/)[1];

// We add a utility class to push the content down so it's not hidden behind the fixed header.
const headWithOffset = headMatch.replace('</style>', `
.page-offset { padding-top: 140px !important; }
</style>`);

const navTemplate = `
<!-- NAV -->
<nav class="nav-9am">
<div class="ctn nav-inner">
  <a href="index.html" class="nav-logo">9AM</a>
  <div class="nav-links">
    <a href="why.html">Why 9AM</a>
    <a href="products.html">Products</a>
    <a href="system.html">The System</a>
    <a href="subscribe.html">Subscribe</a>
    <a href="about.html">About</a>
  </div>
  <a href="subscribe.html" class="btn btn-dark btn-sm nav-cta">Start Your 9 AM Routine</a>
  <button class="hamburger" onclick="document.getElementById('mob').classList.toggle('open')" aria-label="Menu">
    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  </button>
</div>
<div class="mobile-menu" id="mob">
  <a href="why.html" onclick="this.parentElement.classList.remove('open')">Why 9AM</a>
  <a href="products.html" onclick="this.parentElement.classList.remove('open')">Products</a>
  <a href="system.html" onclick="this.parentElement.classList.remove('open')">The System</a>
  <a href="subscribe.html" onclick="this.parentElement.classList.remove('open')">Subscribe</a>
  <a href="about.html" onclick="this.parentElement.classList.remove('open')">About</a>
</div>
</nav>`;

const footerTemplate = `
<!-- FOOTER -->
<footer class="footer">
<div class="ctn">
  <div class="footer-top">
    <div class="footer-brand">
      <span class="nav-logo">9AM</span>
      <p class="footer-tagline">Discipline starts at breakfast. Clean food for people who show up.</p>
    </div>
    <div class="footer-cols">
      <div class="footer-col"><h4 class="footer-col-title">Shop</h4><a href="products.html">Products</a><a href="system.html">The System</a><a href="subscribe.html">Subscribe</a></div>
      <div class="footer-col"><h4 class="footer-col-title">Company</h4><a href="about.html">About</a><a href="#">Careers</a><a href="#">Contact</a></div>
      <div class="footer-col"><h4 class="footer-col-title">Legal</h4><a href="#">Terms &amp; Conditions</a><a href="#">Privacy Policy</a><a href="#">Refund Policy</a><a href="#">Shipping Info</a></div>
    </div>
  </div>
  <div class="footer-divider"></div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2026 9AM. All rights reserved.</span>
    <div class="footer-socials">
      <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg></a>
      <a href="#" aria-label="Twitter"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4l6.5 8L4 20h2l5.5-6.5L16 20h4l-7-8.5L19.5 4H18l-5 5.5L9 4H4z"/></svg></a>
      <a href="#" aria-label="YouTube"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="4"/><path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none"/></svg></a>
    </div>
  </div>
</div>
</footer>`;

const scriptsTemplate = `
<script>
// Tracker
!function(){var g=document.getElementById('tracker');if(g){for(var i=0;i<30;i++){var c=document.createElement('div');c.className='tracker-cell '+(i<18?'filled':'empty');g.appendChild(c)}}}();
// Scroll reveal
!function(){var els=document.querySelectorAll('.reveal');var obs=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('visible');obs.unobserve(x.target)}})},{threshold:.1});els.forEach(function(el){obs.observe(el)})}();
</script>
</body>
</html>`;

const extractSection = (id) => {
    const regex = new RegExp(`(<section[^>]*id="${id}"[^>]*>[\\s\\S]*?</section>)`);
    const match = html.match(regex);
    if (!match) {
        console.error("Could not find section with id " + id);
        return '';
    }
    let section = match[1];
    // Add page-offset
    section = section.replace(/<section\s+class="([^"]+)"/, '<section class="$1 page-offset"');
    return section;
};

const pages = [
  { name: 'why.html', id: 'why' },
  { name: 'products.html', id: 'products' },
  { name: 'system.html', id: 'system' },
  { name: 'subscribe.html', id: 'pricing' },
  { name: 'about.html', id: 'about' },
];

pages.forEach(p => {
   const sectionContent = extractSection(p.id);
   const fullPage = headWithOffset + '<body>\n' + navTemplate + '\n' + sectionContent + '\n' + footerTemplate + '\n' + scriptsTemplate;
   fs.writeFileSync(p.name, fullPage);
   console.log('Created ' + p.name);
});

let newIndex = html.replace(/<nav class="nav-9am">[\s\S]*?<\/nav>/, navTemplate);
newIndex = newIndex.replace(/<footer class="footer">[\s\S]*?<\/footer>/, footerTemplate);

// also let's make sure the page-offset css is in index.html too in case the user navigates?
// no, the user wants homepage unchanged visually. I won't change its css.
// Wait, the nav hrefs point to real files, which works.

fs.writeFileSync('index.html', newIndex);
console.log('Updated index.html');
