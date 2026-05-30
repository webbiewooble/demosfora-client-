const fs = require('fs');
let code = fs.readFileSync('gen_products.cjs', 'utf8');

// 1. Update Accordion Ingredients
// They currently look like:
// <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
//   <li>Oats</li>
//   <li>Mango Powder</li>
//   <li>Seeds</li>
//   <li>Ragi</li>
//   <li>Whey Protein</li>
// </ul>
// We can just replace the whole UL block for each product.
const accordionRegex = /<ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">[\s\S]*?<\/ul>/g;

let count = 0;
code = code.replace(accordionRegex, (match) => {
    let flavor = "";
    if (match.includes("Mango")) flavor = "<li>Mango Powder</li>";
    if (match.includes("Coffee")) flavor = "<li>Coffee</li>\n                 <li>Cocoa</li>";
    if (match.includes("Cocoa") && !match.includes("Coffee")) flavor = "<li>Cocoa</li>\n                 <li>Almonds</li>";

    return `<ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
                 <li>Ragi (Main Ingredient)</li>
                 <li>Oats</li>
                 <li>Whey Protein</li>
                 <li>Date Powder</li>
                 <li>Chia & Flax Seeds</li>
                 ${flavor}
              </ul>`;
});

// 2. Update .prod-ingredients tags
// Currently: <div class="prod-ingredients"><span>Coffee</span><span>Cocoa</span><span>Oats</span></div>
// I'll change them to something uniform: Ragi, Whey, Oats or adding flavor.
// Wait, for Mocha it was Coffee, Cocoa, Oats
// Let's replace the innerHTML of .prod-ingredients based on the product.
const prodIngRegex = /<div class="prod-ingredients">.*?<\/div>/g;
code = code.replace(prodIngRegex, (match) => {
    if (match.includes("Mango")) {
        return '<div class="prod-ingredients"><span>Ragi</span><span>Whey</span><span>Mango</span></div>';
    } else if (match.includes("Coffee")) {
        return '<div class="prod-ingredients"><span>Ragi</span><span>Whey</span><span>Coffee</span></div>';
    } else if (match.includes("Almonds") || match.includes("Cocoa")) {
        return '<div class="prod-ingredients"><span>Ragi</span><span>Whey</span><span>Cocoa</span></div>';
    }
    // Fallback
    return '<div class="prod-ingredients"><span>Ragi</span><span>Whey</span><span>Oats</span></div>';
});

// 3. Update <!-- Ingredients Section --> cards
const newCards = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">

      <div style="background: #F5F5F3; border-radius: 16px; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <h3 style="color: #8C593B; font-size: 24px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; text-transform: uppercase;">RAGI</h3>
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 24px; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
           <img src="https://images.unsplash.com/photo-1588684490013-05ec0deec14b?auto=format&fit=crop&q=80&w=300" alt="Ragi" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="font-size: 14px; font-weight: 500; color: #555; line-height: 1.5;">Our power-packed main ingredient for sustained energy and daily fibre.</p>
      </div>
      
      <div style="background: #F5F5F3; border-radius: 16px; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <h3 style="color: #8C593B; font-size: 24px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; text-transform: uppercase;">WHEY<br>PROTEIN</h3>
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 24px; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
           <img src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=300" alt="Whey Protein" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="font-size: 14px; font-weight: 500; color: #555; line-height: 1.5;">For longer fullness and steady energy, without feeling heavy.</p>
      </div>

      <div style="background: #F5F5F3; border-radius: 16px; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <h3 style="color: #8C593B; font-size: 24px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; text-transform: uppercase;">DATE<br>POWDER</h3>
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 24px; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
           <img src="https://images.unsplash.com/photo-1596541603597-94420bf051c5?auto=format&fit=crop&q=80&w=300" alt="Date Powder" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="font-size: 14px; font-weight: 500; color: #555; line-height: 1.5;">Naturally sweet, nutrient-rich energy in every bite.</p>
      </div>

      <div style="background: #F5F5F3; border-radius: 16px; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <h3 style="color: #8C593B; font-size: 24px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; text-transform: uppercase;">CHIA &amp;<br>FLAX</h3>
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 24px; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
           <img src="https://images.unsplash.com/photo-1506456073749-d7da4073bd31?auto=format&fit=crop&q=80&w=300" alt="Chia and Flax Seeds" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="font-size: 14px; font-weight: 500; color: #555; line-height: 1.5;">A unified blend for smoother digestion and everyday gut support.</p>
      </div>

    </div>`;

const cardsRegex = /<div style="display: grid; grid-template-columns: repeat\(auto-fit, minmax\(260px, 1fr\)\); gap: 24px;">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>\s*<!-- FAQ Section -->/g;

code = code.replace(cardsRegex, newCards + '\n  </div>\n</section>\n\n<!-- FAQ Section -->');

fs.writeFileSync('gen_products.cjs', code);
console.log("Updated ingredients across the board.");
