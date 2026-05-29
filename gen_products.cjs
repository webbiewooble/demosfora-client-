const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const headMatch = html.match(/([\s\S]*?)<body>/)[1];
const headWithOffset = headMatch.replace('</style>', `.page-offset { padding-top: 140px !important; }\n</style>`);
const navMatch = html.match(/(<nav class="nav-9am">[\s\S]*?<\/nav>)/)[1];
const footerMatch = html.match(/(<footer class="footer">[\s\S]*?<\/footer>)/)[1];
const scriptsMatch = html.match(/(<script>[\s\S]*?<\/html>)/)[1];

function createPage(filename, content) {
  fs.writeFileSync(filename, headWithOffset + '<body>\n' + navMatch + '\n' + content + '\n' + footerMatch + '\n' + scriptsMatch);
  console.log('Created', filename);
}

// Product 1: Bowl
createPage('product-bowl.html', `
<section class="section page-offset" style="padding-top: 140px; padding-bottom: 80px; background: #FAF9F6;">
  <div class="ctn">
    <!-- Breadcrumbs -->
    <nav style="margin-bottom: 24px; font-size: 13px; color: #8A8A8A;">
      <a href="index.html" style="color: inherit; text-decoration: none;">Home</a> <span style="margin: 0 8px;">/</span> 
      <a href="products.html" style="color: inherit; text-decoration: none;">Products</a> <span style="margin: 0 8px;">/</span> 
      <span style="color: #1A1A1A;">Mango Oats</span>
    </nav>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;" class="product-layout">
      <!-- Left: Image Gallery -->
      <div style="position: sticky; top: 120px;">
        <div style="border-radius: 20px; overflow: hidden; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
          <img src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=1000&q=80&auto=format&fit=crop" style="width:100%; aspect-ratio: 1/1; object-fit: cover; display: block;" alt="Mango Oats">
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 12px;">
          <div style="border-radius: 12px; overflow: hidden; border: 2px solid #C8A27A; cursor: pointer;"><img src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=200&q=80&auto=format&fit=crop" style="width:100%; aspect-ratio: 1/1; object-fit: cover;"></div>
          <div style="border-radius: 12px; overflow: hidden; border: 2px solid transparent; opacity: 0.7; cursor: pointer;"><img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=200&q=80&auto=format&fit=crop" style="width:100%; aspect-ratio: 1/1; object-fit: cover;"></div>
          <div style="border-radius: 12px; overflow: hidden; border: 2px solid transparent; opacity: 0.7; cursor: pointer;"><img src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=200&q=80&auto=format&fit=crop" style="width:100%; aspect-ratio: 1/1; object-fit: cover;"></div>
        </div>
      </div>
      
      <!-- Right: Product Info -->
      <div style="padding-bottom: 40px;">
        <!-- Reviews -->
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
          <div style="color: #FFB800; display: flex; gap: 2px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <span style="font-size: 14px; color: #8A8A8A;">(128 Reviews)</span>
        </div>
        
        <h1 style="margin-bottom: 8px; font-size: clamp(32px, 4vw, 42px); line-height: 1.1;">Mango Oats – Focus Breakfast</h1>
        <p style="font-size: 16px; color: #8A8A8A; margin-bottom: 24px;">Flavor: Mango | Net Weight: 350g | Servings: 5 (70g each)</p>
        
        <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 32px;">
          <span style="font-family:'DM Serif Display'; font-size: 32px; color: #1A1A1A;">₹499</span>
          <span style="font-size: 18px; color: #8A8A8A; text-decoration: line-through;">₹599</span>
          <span style="background: #C8A27A; color: #fff; font-size: 12px; font-weight: 600; padding: 4px 8px; border-radius: 4px; text-transform: uppercase;">Save 16%</span>
        </div>
        
        <p style="margin-bottom:24px; color:#1A1A1A; font-size:16px; line-height: 1.6;">
          A delicious blend of mango, oats, ragi, and seeds crafted for busy mornings and healthier lifestyles.
        </p>

        <div style="display: flex; gap: 12px; margin-bottom: 32px; flex-wrap: wrap;">
            <span style="background: #F8F6F2; padding: 6px 12px; border-radius: 16px; font-size: 13px; font-weight: 600; color: #1A1A1A;">18g Protein</span>
            <span style="background: #F8F6F2; padding: 6px 12px; border-radius: 16px; font-size: 13px; font-weight: 600; color: #1A1A1A;">High Fibre</span>
            <span style="background: #F8F6F2; padding: 6px 12px; border-radius: 16px; font-size: 13px; font-weight: 600; color: #1A1A1A;">Whole Grains</span>
            <span style="background: #F8F6F2; padding: 6px 12px; border-radius: 16px; font-size: 13px; font-weight: 600; color: #1A1A1A;">No Added Sugar</span>
            <span style="background: #F8F6F2; padding: 6px 12px; border-radius: 16px; font-size: 13px; font-weight: 600; color: #1A1A1A;">Steady Energy Release</span>
        </div>

        
        <!-- Subscription & Purchase Options -->
        <div class="purchase-options" style="margin-bottom: 32px;" id="purchase-options-container">
          <style>
            .po-card {
              border: 1px solid #DDD8CF;
              border-radius: 8px;
              padding: 16px;
              margin-bottom: 12px;
              cursor: pointer;
              display: flex;
              flex-direction: column;
              gap: 8px;
              background: #fff;
              transition: all 0.2s;
              position: relative;
            }
            .po-card.active {
              border: 2px solid #1A1A1A;
              background: #F8F6F2;
            }
            .po-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-weight: 600;
              font-size: 16px;
              color: #1A1A1A;
            }
            .po-desc {
              font-size: 14px;
              color: #8A8A8A;
            }
            .po-tag {
              background: #C8A27A;
              color: #fff;
              font-size: 12px;
              padding: 2px 8px;
              border-radius: 4px;
              font-weight: 600;
            }
            .po-radio {
              accent-color: #1A1A1A;
              width: 18px;
              height: 18px;
              cursor: pointer;
            }
            .po-extra {
              display: none;
              margin-top: 12px;
              padding-top: 12px;
              border-top: 1px dashed #DDD8CF;
            }
            .po-card.active .po-extra {
              display: block;
            }
            .qty-control {
              display: flex;
              align-items: center;
              border: 1px solid #DDD8CF;
              border-radius: 6px;
              overflow: hidden;
              width: fit-content;
              background: #fff;
            }
            .qty-btn {
              padding: 8px 12px;
              background: transparent;
              border: none;
              font-size: 16px;
              cursor: pointer;
            }
            .qty-input {
              width: 40px;
              text-align: center;
              border: none;
              font-size: 14px;
              font-weight: 600;
              background: transparent;
            }
            .sub-select {
              width: 100%;
              padding: 10px;
              border: 1px solid #DDD8CF;
              border-radius: 6px;
              font-size: 14px;
              background: #fff;
              font-family: inherit;
              outline: none;
            }
          </style>

          <p style="font-size: 14px; font-weight: 600; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Select Purchase Option:</p>

          <!-- Option 1: One-Time -->
          <label class="po-card active" onclick="updatePrice(1, 499, 0, this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="onetime" checked>
                One-Time Order
              </div>
              <span>₹499</span>
            </div>
            <div class="po-desc">Standard add to cart.</div>
          </label>

          <!-- Option 2: 5-Day Pack -->
          <label class="po-card" onclick="updatePrice(5, 2485, 10, this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="5day">
                5-Day Starter Pack
              </div>
              <span>₹2485</span>
            </div>
            <div class="po-desc">5 packets together. <span class="po-tag">Save ₹10 on 5-Day Pack</span></div>
          </label>

          

          <!-- Option 4: Custom Sub -->
          <label class="po-card" onclick="updateCustomPrice(this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="custom">
                Build Your Custom Plan
              </div>
              <span id="custom-price-display">₹499</span>
            </div>
            <div class="po-desc">Select custom number of packets/days.</div>
            <div class="po-extra" onclick="event.stopPropagation()">
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                  <p style="font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #1A1A1A;">Packets per delivery:</p>
                  <div class="qty-control">
                    <button type="button" class="qty-btn" onclick="changeCustomQty(-1)">-</button>
                    <input type="text" id="custom-qty" class="qty-input" value="1" readonly>
                    <button type="button" class="qty-btn" onclick="changeCustomQty(1)">+</button>
                  </div>
                </div>
                <div>
                  <p style="font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #1A1A1A;">Delivery Frequency:</p>
                  <select class="sub-select" id="custom-freq">
                    <option value="everyday">Every day</option>
                    <option value="alternate">Alternate days</option>
                    <option value="weekly">Weekly delivery</option>
                  </select>
                </div>
              </div>
            </div>
          </label>
        </div>

        <!-- Global Add To Cart Button Area -->
        <div style="display: flex; gap: 16px; margin-bottom: 40px;">
          <div style="display: flex; border: 1px solid #1A1A1A; border-radius: 8px; overflow: hidden; background:#fff; align-items: center;">
            <button style="padding: 16px 20px; background: transparent; border: none; font-size: 18px; cursor: pointer; height: 100%;" onclick="changeGlobalQty(-1)">-</button>
            <input type="text" id="global-qty" value="1" style="width: 40px; text-align: center; border: none; font-size: 16px; font-weight: 600; background: transparent;" readonly>
            <button style="padding: 16px 20px; background: transparent; border: none; font-size: 18px; cursor: pointer; height: 100%;" onclick="changeGlobalQty(1)">+</button>
          </div>
          <button id="main-add-btn" class="btn btn-dark" onclick="handleAddToCart()" style="flex: 1; padding: 16px; font-size: 16px;">Add to Cart - ₹499</button>
        </div>

        <script>
          let customQty = 1;
          
          function getPageContext(element) {
             // Find closest product area container if we had multiple, but we only have 1 product per page here.
             return document;
          }

          function getElements() {
             return {
                cards: document.querySelectorAll('.po-card'),
                radios: document.querySelectorAll('.po-radio'),
                customPriceDisplay: document.getElementById('custom-price-display'),
                customQtyInput: document.getElementById('custom-qty'),
                globalQtyInput: document.getElementById('global-qty'),
                mainAddBtn: document.getElementById('main-add-btn')
             };
          }

          // Scope state to window to avoid redeclarations if multiple scripts tag exist (not the case here but good practice)
          window.currentBasePrice = 499;
          window.currentTotal = 499;
          window.isCustom = false;

          document.querySelectorAll('.po-radio').forEach(radio => {
            radio.addEventListener('change', function(e) {
              const els = getElements();
              els.cards.forEach(card => card.classList.remove('active'));
              this.closest('.po-card').classList.add('active');
            });
          });

          window.updatePrice = function(itemsCount, price, discount, el) {
            window.isCustom = false;
            window.currentTotal = price;
            const els = getElements();
            if (el) {
                els.cards.forEach(card => card.classList.remove('active'));
                el.classList.add('active');
                const radio = el.querySelector('.po-radio');
                if (radio) radio.checked = true;
            }
            updateMainBtn();
          }

          window.updateCustomPrice = function(el) {
            window.isCustom = true;
            const els = getElements();
            if (el) {
                els.cards.forEach(card => card.classList.remove('active'));
                el.classList.add('active');
                const radio = el.querySelector('.po-radio');
                if (radio) radio.checked = true;
            }
            calculateCustomTotal();
          }

          window.changeCustomQty = function(delta) {
            customQty += delta;
            if (customQty < 1) customQty = 1;
            const els = getElements();
            if (els.customQtyInput) els.customQtyInput.value = customQty;
            if (window.isCustom) calculateCustomTotal();
          }

          window.calculateCustomTotal = function() {
            window.currentTotal = window.currentBasePrice * customQty;
            const els = getElements();
            if (els.customPriceDisplay) els.customPriceDisplay.innerText = '₹' + window.currentTotal;
            updateMainBtn();
          }

          window.changeGlobalQty = function(delta) {
            const els = getElements();
            if (!els.globalQtyInput) return;
            let globalQty = parseInt(els.globalQtyInput.value);
            globalQty += delta;
            if (globalQty < 1) globalQty = 1;
            els.globalQtyInput.value = globalQty;
            updateMainBtn();
          }

          window.updateMainBtn = function() {
            const els = getElements();
            if (!els.globalQtyInput || !els.mainAddBtn) return;
            let globalQty = parseInt(els.globalQtyInput.value);
            let finalTotal = window.currentTotal * globalQty;
            let text = window.isCustom ? "Subscribe Now" : "Add to Cart";
            els.mainAddBtn.innerText = text + " - ₹" + finalTotal;
          }

          window.handleAddToCart = function() {
              let freq = "";
              if (window.isCustom) {
                  freq = document.getElementById('custom-freq').value;
              }
              const qty = document.getElementById('global-qty').value;
              
              const optionRadio = Array.from(document.querySelectorAll('.po-radio')).find(r => r.checked);
              const optionType = optionRadio ? optionRadio.value : 'onetime';
              
              const msg = 'Added to cart! \n\nType: ' + optionType + '\nTotal: ₹' + (window.currentTotal * qty) + '\n- Bundle discounts applied at checkout -\n\n(Manage subscriptions from your account section)';
              alert(msg);
          }

                        const qty = document.getElementById('global-qty').value;
              
              const optionRadio = Array.from(document.querySelectorAll('.po-radio')).find(r => r.checked);
              const optionType = optionRadio ? optionRadio.value : 'onetime';
              
              const msg = 'Added to cart! \nType: ' + optionType + '\nTotal: ₹' + (window.currentTotal * qty) + '\n- Bundle discounts applied at checkout -\n\n(Manage subscriptions from your account section)'; alert(msg);
          }
        </script>

        
        <!-- Accordions -->
        <div style="border-top: 1px solid #DDD8CF;">
          <details style="padding: 24px 0; border-bottom: 1px solid #DDD8CF;" open>
            <summary style="font-weight: 600; font-size: 18px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
              About Mango Oats <span style="font-size: 24px; font-weight: 300;">+</span>
            </summary>
            <div style="padding-top: 16px; color: #8A8A8A; line-height: 1.6; font-size: 15px;">
              <p style="margin-bottom: 12px; font-weight: 600; color: #1A1A1A;">Healthy Breakfast That Actually Tastes Good</p>
              <p style="margin-bottom: 16px;">Our Mango Oats combine nutrition and flavor in one convenient breakfast solution. Made with oats, ragi, seeds, and natural mango flavor, this breakfast keeps you fuller for longer while supporting your daily energy needs.</p>
              
              <p style="margin-bottom: 8px; font-weight: 600; color: #1A1A1A;">Perfect for:</p>
              <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 4px;">
                <li>Working professionals</li>
                <li>Fitness enthusiasts</li>
                <li>Students</li>
                <li>Healthy lifestyle seekers</li>
                <li>Busy mornings</li>
              </ul>
            </div>
          </details>
          <details style="padding: 24px 0; border-bottom: 1px solid #DDD8CF;">
            <summary style="font-weight: 600; font-size: 18px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
              What's Inside? <span style="font-size: 24px; font-weight: 300;">+</span>
            </summary>
            <div style="padding-top: 16px; color: #8A8A8A; line-height: 1.6; font-size: 15px;">
              <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #DDD8CF; padding-bottom: 4px;"><span>Mango</span> <strong>12%</strong></div>
                  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #DDD8CF; padding-bottom: 4px;"><span>Oats</span> <strong>30%</strong></div>
                  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #DDD8CF; padding-bottom: 4px;"><span>Seeds</span> <strong>5%</strong></div>
                  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed #DDD8CF; padding-bottom: 4px;"><span>Ragi</span> <strong>35%</strong></div>
              </div>
              <p>Crafted using wholesome ingredients with balanced nutrition in every serving.</p>
            </div>
          </details>
          <details style="padding: 24px 0; border-bottom: 1px solid #DDD8CF;">
            <summary style="font-weight: 600; font-size: 18px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
              Benefits You'll Feel <span style="font-size: 24px; font-weight: 300;">+</span>
            </summary>
            <div style="padding-top: 16px; color: #8A8A8A; line-height: 1.6; font-size: 15px;">
              <div style="margin-bottom: 16px;">
                 <p style="font-weight: 600; color: #1A1A1A; margin-bottom: 4px;">Steady Energy</p>
                 <p>Whole grains help provide longer-lasting energy without sudden crashes.</p>
              </div>
              <div style="margin-bottom: 16px;">
                 <p style="font-weight: 600; color: #1A1A1A; margin-bottom: 4px;">High Protein</p>
                 <p>18g protein supports active lifestyles and keeps you satisfied.</p>
              </div>
              <div style="margin-bottom: 16px;">
                 <p style="font-weight: 600; color: #1A1A1A; margin-bottom: 4px;">Fibre Rich</p>
                 <p>Supports digestion and healthy eating habits.</p>
              </div>
              <div>
                 <p style="font-weight: 600; color: #1A1A1A; margin-bottom: 4px;">No Added Sugar</p>
                 <p>Clean nutrition without unnecessary sweetness.</p>
              </div>
            </div>
          </details>
          
        </div>
      </div>
    </div>
    
  </div>
</section>


<!-- Ingredients Section -->
<section style="padding: 80px 0; background: #fff; text-align: center;">
  <div class="ctn">
    <h2 style="font-size: 36px; font-weight: 800; text-transform: capitalize; margin-bottom: 48px; color: #000;">Ingredients</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
      
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
        <h3 style="color: #8C593B; font-size: 24px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; text-transform: uppercase;">JAGGERY<br>POWDER</h3>
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 24px; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
           <img src="https://images.unsplash.com/photo-1620986794689-d4da44ecfc87?auto=format&fit=crop&q=80&w=300" alt="Jaggery Powder" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="font-size: 14px; font-weight: 500; color: #555; line-height: 1.5;">Natural sweetness that gives energy, not a sugar crash.</p>
      </div>

      <div style="background: #F5F5F3; border-radius: 16px; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <h3 style="color: #8C593B; font-size: 24px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; text-transform: uppercase;">FLAX<br>SEEDS</h3>
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 24px; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
           <img src="https://images.unsplash.com/photo-1506456073749-d7da4073bd31?auto=format&fit=crop&q=80&w=300" alt="Flax Seeds" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="font-size: 14px; font-weight: 500; color: #555; line-height: 1.5;">For smoother digestion and everyday gut support.</p>
      </div>

    </div>
  </div>
</section>

<!-- FAQ Section -->
<section style="padding: 80px 0; background: #fff; border-top: 1px solid #DDD8CF;">
  <div class="ctn" style="max-width: 800px;">
    <h2 style="font-size: 48px; font-weight: 800; text-align: center; margin-bottom: 48px; letter-spacing: -0.02em;">FAQs</h2>
    
    <div style="display: flex; flex-direction: column; gap: 12px; font-family: 'Inter', sans-serif;" class="custom-faq-list">
      
      <details style="background: #1A1A1A; color: #F8F6F2; border-radius: 8px; overflow: hidden; font-family: inherit;">
        <summary style="padding: 20px 24px; font-weight: 600; font-size: 16px; list-style: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
          <span>Is Mango Oats good for weight loss?</span>
          <span style="font-size: 20px; font-family: monospace;" class="faq-icon">›</span>
        </summary>
        <div style="padding: 0 24px 24px; font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.6;">
          Yes, it is high in fibre and protein which helps keep you full for longer.
        </div>
      </details>

      <details style="background: #1A1A1A; color: #F8F6F2; border-radius: 8px; overflow: hidden; font-family: inherit;">
        <summary style="padding: 20px 24px; font-weight: 600; font-size: 16px; list-style: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
          <span>Can I eat Mango Oats daily?</span>
          <span style="font-size: 20px; font-family: monospace;" class="faq-icon">›</span>
        </summary>
        <div style="padding: 0 24px 24px; font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.6;">
          Yes, it is suitable as a regular healthy breakfast option.
        </div>
      </details>

      <details style="background: #1A1A1A; color: #F8F6F2; border-radius: 8px; overflow: hidden; font-family: inherit;">
        <summary style="padding: 20px 24px; font-weight: 600; font-size: 16px; list-style: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
          <span>Does it contain added sugar?</span>
          <span style="font-size: 20px; font-family: monospace;" class="faq-icon">›</span>
        </summary>
        <div style="padding: 0 24px 24px; font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.6;">
          No, this product contains no added sugar.
        </div>
      </details>

      <details style="background: #1A1A1A; color: #F8F6F2; border-radius: 8px; overflow: hidden; font-family: inherit;">
        <summary style="padding: 20px 24px; font-weight: 600; font-size: 16px; list-style: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
          <span>Is it suitable for gym diets?</span>
          <span style="font-size: 20px; font-family: monospace;" class="faq-icon">›</span>
        </summary>
        <div style="padding: 0 24px 24px; font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.6;">
          Yes, the 18g protein content makes it suitable for fitness-focused diets.
        </div>
      </details>

      <details style="background: #1A1A1A; color: #F8F6F2; border-radius: 8px; overflow: hidden; font-family: inherit;">
        <summary style="padding: 20px 24px; font-weight: 600; font-size: 16px; list-style: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer;">
          <span>Can kids eat Mango Oats?</span>
          <span style="font-size: 20px; font-family: monospace;" class="faq-icon">›</span>
        </summary>
        <div style="padding: 0 24px 24px; font-size: 15px; color: rgba(255,255,255,0.8); line-height: 1.6;">
          Yes, it can be enjoyed by both kids and adults.
        </div>
      </details>

    </div>
  </div>
</section>

<!-- Include CSS to rotate the arrow icon when details is open -->
<style>
.custom-faq-list details[open] summary .faq-icon {
  transform: rotate(90deg);
}
.custom-faq-list details summary::-webkit-details-marker {
  display:none;
}
.custom-faq-list .faq-icon {
  transition: transform 0.2s ease;
  display: inline-block;
}
</style>



<!-- You might also like section -->

<section style="padding: 80px 0; background: #FAF9F6; border-top: 1px solid #DDD8CF;">
  <div class="ctn">
    <h3 style="font-size: 32px; margin-bottom: 40px; text-align: center;">You May Also Like</h3>
    <div class="prod-grid ymal-custom-grid">
      
    <div class="prod-card">
      <a href="product-bar.html" class="prod-img-wrap"><img src="https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=400&q=80&auto=format&fit=crop" alt="9AM Protein Bar" style="border-radius:12px" /></a>
      <div class="prod-body">
        <div class="prod-top"><div style="flex:1"><a href="product-bar.html" style="text-decoration: none; color: inherit;"><h3 style="margin-bottom:2px">9AM Protein Bar</h3></a><p class="prod-tagline">Fuel, not a treat</p></div><span class="badge">30g Protein</span></div>
        <div class="divider"></div>
        <div class="prod-ingredients"><span>Real Cocoa</span><span>Whey Protein</span><span>Oats</span></div>
        <div class="prod-bottom" style="margin-top: 16px;"><span class="prod-price">₹149</span><button class="btn btn-dark btn-sm">Add to cart</button></div>
      </div>
    </div>

    <div class="prod-card">
      <a href="product-pb.html" class="prod-img-wrap"><img src="https://images.unsplash.com/photo-1612187209234-1c7a8f377ba4?w=400&q=80&auto=format&fit=crop" alt="Stone-Ground PB" style="border-radius:12px" /></a>
      <div class="prod-body">
        <div class="prod-top"><div style="flex:1"><a href="product-pb.html" style="text-decoration: none; color: inherit;"><h3 style="margin-bottom:2px">Stone-Ground PB</h3></a><p class="prod-tagline">One ingredient</p></div><span class="badge">10g Protein</span></div>
        <div class="divider"></div>
        <div class="prod-ingredients"><span>Peanuts</span><span>That's it.</span></div>
        <div class="prod-bottom" style="margin-top: 16px;"><span class="prod-price">₹399</span><button class="btn btn-dark btn-sm">Add to cart</button></div>
      </div>
    </div>

    </div>
  </div>
</section>
<style>
.ymal-custom-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 800px;
  margin: 0 auto;
}
</style>
<!-- Include CSS for the layout to be responsive -->
<style>
@media (max-width: 768px) {
  .product-layout {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
  .product-layout > div:first-child {
    position: static !important;
  }
}
</style>
`);


// Product 2: Bar
createPage('product-bar.html', `
<section class="section page-offset" style="padding-top: 140px; padding-bottom: 80px; background: #FAF9F6;">
  <div class="ctn">
    <!-- Breadcrumbs -->
    <nav style="margin-bottom: 24px; font-size: 13px; color: #8A8A8A;">
      <a href="index.html" style="color: inherit; text-decoration: none;">Home</a> <span style="margin: 0 8px;">/</span> 
      <a href="products.html" style="color: inherit; text-decoration: none;">Products</a> <span style="margin: 0 8px;">/</span> 
      <span style="color: #1A1A1A;">9AM Protein Bar</span>
    </nav>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;" class="product-layout">
      <!-- Left: Image Gallery -->
      <div style="position: sticky; top: 120px;">
        <div style="border-radius: 20px; overflow: hidden; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
          <img src="https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=1000&q=80&auto=format&fit=crop" style="width:100%; aspect-ratio: 1/1; object-fit: cover; display: block;" alt="9AM Protein Bar">
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 12px;">
          <div style="border-radius: 12px; overflow: hidden; border: 2px solid #C8A27A; cursor: pointer;"><img src="https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=200&q=80&auto=format&fit=crop" style="width:100%; aspect-ratio: 1/1; object-fit: cover;"></div>
          <div style="border-radius: 12px; overflow: hidden; border: 2px solid transparent; opacity: 0.7; cursor: pointer;"><img src="https://images.unsplash.com/photo-1548685121-789a7fb3bddd?w=200&q=80&auto=format&fit=crop" style="width:100%; aspect-ratio: 1/1; object-fit: cover;"></div>
        </div>
      </div>
      
      <!-- Right: Product Info -->
      <div style="padding-bottom: 40px;">
        <!-- Reviews -->
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
          <div style="color: #FFB800; display: flex; gap: 2px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <span style="font-size: 14px; color: #8A8A8A;">(85 Reviews)</span>
        </div>
        
        <h1 style="margin-bottom: 8px; font-size: clamp(32px, 4vw, 42px); line-height: 1.1;">9AM Protein Bar</h1>
        <p style="font-size: 16px; color: #8A8A8A; margin-bottom: 24px;">Flavor: Double Chocolate | Net Weight: 60g | Servings: 1</p>
        
        <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 32px;">
          <span style="font-family:'DM Serif Display'; font-size: 32px; color: #1A1A1A;">₹149</span>
          <span style="font-size: 18px; color: #8A8A8A; text-decoration: line-through;">₹175</span>
          <span style="background: #C8A27A; color: #fff; font-size: 12px; font-weight: 600; padding: 4px 8px; border-radius: 4px; text-transform: uppercase;">Save 14%</span>
        </div>
        
        <p style="margin-bottom:24px; color:#1A1A1A; font-size:16px; line-height: 1.6;">
          Tastes like a reward, works like fuel. Packed with real ingredients and 30g of protein, this is the uncompromising bar for when you are on the move.
        </p>

        
        <!-- Subscription & Purchase Options -->
        <div class="purchase-options" style="margin-bottom: 32px;" id="purchase-options-container">
          <style>
            .po-card {
              border: 1px solid #DDD8CF;
              border-radius: 8px;
              padding: 16px;
              margin-bottom: 12px;
              cursor: pointer;
              display: flex;
              flex-direction: column;
              gap: 8px;
              background: #fff;
              transition: all 0.2s;
              position: relative;
            }
            .po-card.active {
              border: 2px solid #1A1A1A;
              background: #F8F6F2;
            }
            .po-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-weight: 600;
              font-size: 16px;
              color: #1A1A1A;
            }
            .po-desc {
              font-size: 14px;
              color: #8A8A8A;
            }
            .po-tag {
              background: #C8A27A;
              color: #fff;
              font-size: 12px;
              padding: 2px 8px;
              border-radius: 4px;
              font-weight: 600;
            }
            .po-radio {
              accent-color: #1A1A1A;
              width: 18px;
              height: 18px;
              cursor: pointer;
            }
            .po-extra {
              display: none;
              margin-top: 12px;
              padding-top: 12px;
              border-top: 1px dashed #DDD8CF;
            }
            .po-card.active .po-extra {
              display: block;
            }
            .qty-control {
              display: flex;
              align-items: center;
              border: 1px solid #DDD8CF;
              border-radius: 6px;
              overflow: hidden;
              width: fit-content;
              background: #fff;
            }
            .qty-btn {
              padding: 8px 12px;
              background: transparent;
              border: none;
              font-size: 16px;
              cursor: pointer;
            }
            .qty-input {
              width: 40px;
              text-align: center;
              border: none;
              font-size: 14px;
              font-weight: 600;
              background: transparent;
            }
            .sub-select {
              width: 100%;
              padding: 10px;
              border: 1px solid #DDD8CF;
              border-radius: 6px;
              font-size: 14px;
              background: #fff;
              font-family: inherit;
              outline: none;
            }
          </style>

          <p style="font-size: 14px; font-weight: 600; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Select Purchase Option:</p>

          <!-- Option 1: One-Time -->
          <label class="po-card active" onclick="updatePrice(1, 149, 0, this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="onetime" checked>
                One-Time Order
              </div>
              <span>₹149</span>
            </div>
            <div class="po-desc">Standard add to cart.</div>
          </label>

          <!-- Option 2: 5-Day Pack -->
          <label class="po-card" onclick="updatePrice(5, 735, 10, this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="5day">
                5-Day Starter Pack
              </div>
              <span>₹735</span>
            </div>
            <div class="po-desc">5 packets together. <span class="po-tag">Save ₹10 on 5-Day Pack</span></div>
          </label>

          

          <!-- Option 4: Custom Sub -->
          <label class="po-card" onclick="updateCustomPrice(this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="custom">
                Build Your Custom Plan
              </div>
              <span id="custom-price-display">₹149</span>
            </div>
            <div class="po-desc">Select custom number of packets/days.</div>
            <div class="po-extra" onclick="event.stopPropagation()">
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                  <p style="font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #1A1A1A;">Packets per delivery:</p>
                  <div class="qty-control">
                    <button type="button" class="qty-btn" onclick="changeCustomQty(-1)">-</button>
                    <input type="text" id="custom-qty" class="qty-input" value="1" readonly>
                    <button type="button" class="qty-btn" onclick="changeCustomQty(1)">+</button>
                  </div>
                </div>
                <div>
                  <p style="font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #1A1A1A;">Delivery Frequency:</p>
                  <select class="sub-select" id="custom-freq">
                    <option value="everyday">Every day</option>
                    <option value="alternate">Alternate days</option>
                    <option value="weekly">Weekly delivery</option>
                  </select>
                </div>
              </div>
            </div>
          </label>
        </div>

        <!-- Global Add To Cart Button Area -->
        <div style="display: flex; gap: 16px; margin-bottom: 40px;">
          <div style="display: flex; border: 1px solid #1A1A1A; border-radius: 8px; overflow: hidden; background:#fff; align-items: center;">
            <button style="padding: 16px 20px; background: transparent; border: none; font-size: 18px; cursor: pointer; height: 100%;" onclick="changeGlobalQty(-1)">-</button>
            <input type="text" id="global-qty" value="1" style="width: 40px; text-align: center; border: none; font-size: 16px; font-weight: 600; background: transparent;" readonly>
            <button style="padding: 16px 20px; background: transparent; border: none; font-size: 18px; cursor: pointer; height: 100%;" onclick="changeGlobalQty(1)">+</button>
          </div>
          <button id="main-add-btn" class="btn btn-dark" onclick="handleAddToCart()" style="flex: 1; padding: 16px; font-size: 16px;">Add to Cart - ₹149</button>
        </div>

        <script>
          let customQty = 1;
          
          function getPageContext(element) {
             // Find closest product area container if we had multiple, but we only have 1 product per page here.
             return document;
          }

          function getElements() {
             return {
                cards: document.querySelectorAll('.po-card'),
                radios: document.querySelectorAll('.po-radio'),
                customPriceDisplay: document.getElementById('custom-price-display'),
                customQtyInput: document.getElementById('custom-qty'),
                globalQtyInput: document.getElementById('global-qty'),
                mainAddBtn: document.getElementById('main-add-btn')
             };
          }

          // Scope state to window to avoid redeclarations if multiple scripts tag exist (not the case here but good practice)
          window.currentBasePrice = 149;
          window.currentTotal = 149;
          window.isCustom = false;

          document.querySelectorAll('.po-radio').forEach(radio => {
            radio.addEventListener('change', function(e) {
              const els = getElements();
              els.cards.forEach(card => card.classList.remove('active'));
              this.closest('.po-card').classList.add('active');
            });
          });

          window.updatePrice = function(itemsCount, price, discount, el) {
            window.isCustom = false;
            window.currentTotal = price;
            const els = getElements();
            if (el) {
                els.cards.forEach(card => card.classList.remove('active'));
                el.classList.add('active');
                const radio = el.querySelector('.po-radio');
                if (radio) radio.checked = true;
            }
            updateMainBtn();
          }

          window.updateCustomPrice = function(el) {
            window.isCustom = true;
            const els = getElements();
            if (el) {
                els.cards.forEach(card => card.classList.remove('active'));
                el.classList.add('active');
                const radio = el.querySelector('.po-radio');
                if (radio) radio.checked = true;
            }
            calculateCustomTotal();
          }

          window.changeCustomQty = function(delta) {
            customQty += delta;
            if (customQty < 1) customQty = 1;
            const els = getElements();
            if (els.customQtyInput) els.customQtyInput.value = customQty;
            if (window.isCustom) calculateCustomTotal();
          }

          window.calculateCustomTotal = function() {
            window.currentTotal = window.currentBasePrice * customQty;
            const els = getElements();
            if (els.customPriceDisplay) els.customPriceDisplay.innerText = '₹' + window.currentTotal;
            updateMainBtn();
          }

          window.changeGlobalQty = function(delta) {
            const els = getElements();
            if (!els.globalQtyInput) return;
            let globalQty = parseInt(els.globalQtyInput.value);
            globalQty += delta;
            if (globalQty < 1) globalQty = 1;
            els.globalQtyInput.value = globalQty;
            updateMainBtn();
          }

          window.updateMainBtn = function() {
            const els = getElements();
            if (!els.globalQtyInput || !els.mainAddBtn) return;
            let globalQty = parseInt(els.globalQtyInput.value);
            let finalTotal = window.currentTotal * globalQty;
            let text = window.isCustom ? "Subscribe Now" : "Add to Cart";
            els.mainAddBtn.innerText = text + " - ₹" + finalTotal;
          }

          window.handleAddToCart = function() {
              let freq = "";
              if (window.isCustom) {
                  freq = document.getElementById('custom-freq').value;
              }
              const qty = document.getElementById('global-qty').value;
              
              const optionRadio = Array.from(document.querySelectorAll('.po-radio')).find(r => r.checked);
              const optionType = optionRadio ? optionRadio.value : 'onetime';
              
              const msg = 'Added to cart! \n\nType: ' + optionType + '\nTotal: ₹' + (window.currentTotal * qty) + '\n- Bundle discounts applied at checkout -\n\n(Manage subscriptions from your account section)';
              alert(msg);
          }

                        const qty = document.getElementById('global-qty').value;
              
              const optionRadio = Array.from(document.querySelectorAll('.po-radio')).find(r => r.checked);
              const optionType = optionRadio ? optionRadio.value : 'onetime';
              
              const msg = 'Added to cart! \nType: ' + optionType + '\nTotal: ₹' + (window.currentTotal * qty) + '\n- Bundle discounts applied at checkout -\n\n(Manage subscriptions from your account section)'; alert(msg);
          }
        </script>

        
        <!-- Accordions -->
        <div style="border-top: 1px solid #DDD8CF;">
          <details style="padding: 24px 0; border-bottom: 1px solid #DDD8CF;" open>
            <summary style="font-weight: 600; font-size: 18px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
              Why You'll Love It <span style="font-size: 24px; font-weight: 300;">+</span>
            </summary>
            <div style="padding-top: 16px; color: #8A8A8A; line-height: 1.6; font-size: 15px;">
              <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
                <li><strong>30g Protein:</strong> Maximum muscle recovery and satiety in a single bar.</li>
                <li><strong>No Junk:</strong> We hate sugar alcohols and maltitol. We use real cocoa and stevia.</li>
                <li><strong>Perfect Texture:</strong> Soft, chewy interior with a satisfying crunchy coating.</li>
              </ul>
            </div>
          </details>
          
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Ingredients Section -->
<section style="padding: 80px 0; background: #fff; text-align: center;">
  <div class="ctn">
    <h2 style="font-size: 36px; font-weight: 800; text-transform: capitalize; margin-bottom: 48px; color: #000;">Ingredients</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
      
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
        <h3 style="color: #8C593B; font-size: 24px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; text-transform: uppercase;">JAGGERY<br>POWDER</h3>
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 24px; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
           <img src="https://images.unsplash.com/photo-1620986794689-d4da44ecfc87?auto=format&fit=crop&q=80&w=300" alt="Jaggery Powder" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="font-size: 14px; font-weight: 500; color: #555; line-height: 1.5;">Natural sweetness that gives energy, not a sugar crash.</p>
      </div>

      <div style="background: #F5F5F3; border-radius: 16px; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <h3 style="color: #8C593B; font-size: 24px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; text-transform: uppercase;">FLAX<br>SEEDS</h3>
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 24px; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
           <img src="https://images.unsplash.com/photo-1506456073749-d7da4073bd31?auto=format&fit=crop&q=80&w=300" alt="Flax Seeds" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="font-size: 14px; font-weight: 500; color: #555; line-height: 1.5;">For smoother digestion and everyday gut support.</p>
      </div>

    </div>
  </div>
</section>

<!-- You might also like section -->

<section style="padding: 80px 0; background: #FAF9F6; border-top: 1px solid #DDD8CF;">
  <div class="ctn">
    <h3 style="font-size: 32px; margin-bottom: 40px; text-align: center;">You May Also Like</h3>
    <div class="prod-grid ymal-custom-grid">
      
    <div class="prod-card">
      <a href="product-bowl.html" class="prod-img-wrap"><img src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&q=80&auto=format&fit=crop" alt="Mango Oats" style="border-radius:12px" /></a>
      <div class="prod-body">
        <div class="prod-top"><div style="flex:1"><a href="product-bowl.html" style="text-decoration: none; color: inherit;"><h3 style="margin-bottom:2px">Mango Oats</h3></a><p class="prod-tagline">Focus Breakfast</p></div><span class="badge">18g Protein</span></div>
        <div class="divider"></div>
        <div class="prod-ingredients"><span>Mango</span><span>Oats</span><span>Seeds</span><span>Ragi</span></div>
        <div class="prod-bottom" style="margin-top: 16px;"><span class="prod-price">₹499</span><button class="btn btn-dark btn-sm">Add to cart</button></div>
      </div>
    </div>

    <div class="prod-card">
      <a href="product-pb.html" class="prod-img-wrap"><img src="https://images.unsplash.com/photo-1612187209234-1c7a8f377ba4?w=400&q=80&auto=format&fit=crop" alt="Stone-Ground PB" style="border-radius:12px" /></a>
      <div class="prod-body">
        <div class="prod-top"><div style="flex:1"><a href="product-pb.html" style="text-decoration: none; color: inherit;"><h3 style="margin-bottom:2px">Stone-Ground PB</h3></a><p class="prod-tagline">One ingredient</p></div><span class="badge">10g Protein</span></div>
        <div class="divider"></div>
        <div class="prod-ingredients"><span>Peanuts</span><span>That's it.</span></div>
        <div class="prod-bottom" style="margin-top: 16px;"><span class="prod-price">₹399</span><button class="btn btn-dark btn-sm">Add to cart</button></div>
      </div>
    </div>

    </div>
  </div>
</section>
<style>
.ymal-custom-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 800px;
  margin: 0 auto;
}
</style>
`);

// Product 3: PB
createPage('product-pb.html', `
<section class="section page-offset" style="padding-top: 140px; padding-bottom: 80px; background: #FAF9F6;">
  <div class="ctn">
    <!-- Breadcrumbs -->
    <nav style="margin-bottom: 24px; font-size: 13px; color: #8A8A8A;">
      <a href="index.html" style="color: inherit; text-decoration: none;">Home</a> <span style="margin: 0 8px;">/</span> 
      <a href="products.html" style="color: inherit; text-decoration: none;">Products</a> <span style="margin: 0 8px;">/</span> 
      <span style="color: #1A1A1A;">Stone-Ground PB</span>
    </nav>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;" class="product-layout">
      <!-- Left: Image Gallery -->
      <div style="position: sticky; top: 120px;">
        <div style="border-radius: 20px; overflow: hidden; background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.03);">
          <img src="https://images.unsplash.com/photo-1612187209234-1c7a8f377ba4?w=1000&q=80&auto=format&fit=crop" style="width:100%; aspect-ratio: 1/1; object-fit: cover; display: block;" alt="Stone-Ground PB">
        </div>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 12px;">
          <div style="border-radius: 12px; overflow: hidden; border: 2px solid #C8A27A; cursor: pointer;"><img src="https://images.unsplash.com/photo-1612187209234-1c7a8f377ba4?w=200&q=80&auto=format&fit=crop" style="width:100%; aspect-ratio: 1/1; object-fit: cover;"></div>
        </div>
      </div>
      
      <!-- Right: Product Info -->
      <div style="padding-bottom: 40px;">
        <!-- Reviews -->
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
          <div style="color: #FFB800; display: flex; gap: 2px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <span style="font-size: 14px; color: #8A8A8A;">(210 Reviews)</span>
        </div>
        
        <h1 style="margin-bottom: 8px; font-size: clamp(32px, 4vw, 42px); line-height: 1.1;">Stone-Ground Peanut Butter</h1>
        <p style="font-size: 16px; color: #8A8A8A; margin-bottom: 24px;">Flavor: Roasted Unsweetened | Net Weight: 500g | Servings: 15 (30g each)</p>
        
        <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 32px;">
          <span style="font-family:'DM Serif Display'; font-size: 32px; color: #1A1A1A;">₹399</span>
          <span style="font-size: 18px; color: #8A8A8A; text-decoration: line-through;">₹450</span>
          <span style="background: #C8A27A; color: #fff; font-size: 12px; font-weight: 600; padding: 4px 8px; border-radius: 4px; text-transform: uppercase;">Save 11%</span>
        </div>
        
        <p style="margin-bottom:24px; color:#1A1A1A; font-size:16px; line-height: 1.6;">
          One ingredient. Zero compromise. No palm oil, no added sugar, no emulsifiers. The perfect base for your 9 AM ritual, stone-ground to preserve all the natural nutrients.
        </p>

        
        <!-- Subscription & Purchase Options -->
        <div class="purchase-options" style="margin-bottom: 32px;" id="purchase-options-container">
          <style>
            .po-card {
              border: 1px solid #DDD8CF;
              border-radius: 8px;
              padding: 16px;
              margin-bottom: 12px;
              cursor: pointer;
              display: flex;
              flex-direction: column;
              gap: 8px;
              background: #fff;
              transition: all 0.2s;
              position: relative;
            }
            .po-card.active {
              border: 2px solid #1A1A1A;
              background: #F8F6F2;
            }
            .po-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              font-weight: 600;
              font-size: 16px;
              color: #1A1A1A;
            }
            .po-desc {
              font-size: 14px;
              color: #8A8A8A;
            }
            .po-tag {
              background: #C8A27A;
              color: #fff;
              font-size: 12px;
              padding: 2px 8px;
              border-radius: 4px;
              font-weight: 600;
            }
            .po-radio {
              accent-color: #1A1A1A;
              width: 18px;
              height: 18px;
              cursor: pointer;
            }
            .po-extra {
              display: none;
              margin-top: 12px;
              padding-top: 12px;
              border-top: 1px dashed #DDD8CF;
            }
            .po-card.active .po-extra {
              display: block;
            }
            .qty-control {
              display: flex;
              align-items: center;
              border: 1px solid #DDD8CF;
              border-radius: 6px;
              overflow: hidden;
              width: fit-content;
              background: #fff;
            }
            .qty-btn {
              padding: 8px 12px;
              background: transparent;
              border: none;
              font-size: 16px;
              cursor: pointer;
            }
            .qty-input {
              width: 40px;
              text-align: center;
              border: none;
              font-size: 14px;
              font-weight: 600;
              background: transparent;
            }
            .sub-select {
              width: 100%;
              padding: 10px;
              border: 1px solid #DDD8CF;
              border-radius: 6px;
              font-size: 14px;
              background: #fff;
              font-family: inherit;
              outline: none;
            }
          </style>

          <p style="font-size: 14px; font-weight: 600; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Select Purchase Option:</p>

          <!-- Option 1: One-Time -->
          <label class="po-card active" onclick="updatePrice(1, 399, 0, this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="onetime" checked>
                One-Time Order
              </div>
              <span>₹399</span>
            </div>
            <div class="po-desc">Standard add to cart.</div>
          </label>

          <!-- Option 2: 5-Day Pack -->
          <label class="po-card" onclick="updatePrice(5, 1985, 10, this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="5day">
                5-Day Starter Pack
              </div>
              <span>₹1985</span>
            </div>
            <div class="po-desc">5 packets together. <span class="po-tag">Save ₹10 on 5-Day Pack</span></div>
          </label>

          

          <!-- Option 4: Custom Sub -->
          <label class="po-card" onclick="updateCustomPrice(this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="custom">
                Build Your Custom Plan
              </div>
              <span id="custom-price-display">₹399</span>
            </div>
            <div class="po-desc">Select custom number of packets/days.</div>
            <div class="po-extra" onclick="event.stopPropagation()">
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                  <p style="font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #1A1A1A;">Packets per delivery:</p>
                  <div class="qty-control">
                    <button type="button" class="qty-btn" onclick="changeCustomQty(-1)">-</button>
                    <input type="text" id="custom-qty" class="qty-input" value="1" readonly>
                    <button type="button" class="qty-btn" onclick="changeCustomQty(1)">+</button>
                  </div>
                </div>
                <div>
                  <p style="font-size: 13px; font-weight: 600; margin-bottom: 6px; color: #1A1A1A;">Delivery Frequency:</p>
                  <select class="sub-select" id="custom-freq">
                    <option value="everyday">Every day</option>
                    <option value="alternate">Alternate days</option>
                    <option value="weekly">Weekly delivery</option>
                  </select>
                </div>
              </div>
            </div>
          </label>
        </div>

        <!-- Global Add To Cart Button Area -->
        <div style="display: flex; gap: 16px; margin-bottom: 40px;">
          <div style="display: flex; border: 1px solid #1A1A1A; border-radius: 8px; overflow: hidden; background:#fff; align-items: center;">
            <button style="padding: 16px 20px; background: transparent; border: none; font-size: 18px; cursor: pointer; height: 100%;" onclick="changeGlobalQty(-1)">-</button>
            <input type="text" id="global-qty" value="1" style="width: 40px; text-align: center; border: none; font-size: 16px; font-weight: 600; background: transparent;" readonly>
            <button style="padding: 16px 20px; background: transparent; border: none; font-size: 18px; cursor: pointer; height: 100%;" onclick="changeGlobalQty(1)">+</button>
          </div>
          <button id="main-add-btn" class="btn btn-dark" onclick="handleAddToCart()" style="flex: 1; padding: 16px; font-size: 16px;">Add to Cart - ₹399</button>
        </div>

        <script>
          let customQty = 1;
          
          function getPageContext(element) {
             // Find closest product area container if we had multiple, but we only have 1 product per page here.
             return document;
          }

          function getElements() {
             return {
                cards: document.querySelectorAll('.po-card'),
                radios: document.querySelectorAll('.po-radio'),
                customPriceDisplay: document.getElementById('custom-price-display'),
                customQtyInput: document.getElementById('custom-qty'),
                globalQtyInput: document.getElementById('global-qty'),
                mainAddBtn: document.getElementById('main-add-btn')
             };
          }

          // Scope state to window to avoid redeclarations if multiple scripts tag exist (not the case here but good practice)
          window.currentBasePrice = 399;
          window.currentTotal = 399;
          window.isCustom = false;

          document.querySelectorAll('.po-radio').forEach(radio => {
            radio.addEventListener('change', function(e) {
              const els = getElements();
              els.cards.forEach(card => card.classList.remove('active'));
              this.closest('.po-card').classList.add('active');
            });
          });

          window.updatePrice = function(itemsCount, price, discount, el) {
            window.isCustom = false;
            window.currentTotal = price;
            const els = getElements();
            if (el) {
                els.cards.forEach(card => card.classList.remove('active'));
                el.classList.add('active');
                const radio = el.querySelector('.po-radio');
                if (radio) radio.checked = true;
            }
            updateMainBtn();
          }

          window.updateCustomPrice = function(el) {
            window.isCustom = true;
            const els = getElements();
            if (el) {
                els.cards.forEach(card => card.classList.remove('active'));
                el.classList.add('active');
                const radio = el.querySelector('.po-radio');
                if (radio) radio.checked = true;
            }
            calculateCustomTotal();
          }

          window.changeCustomQty = function(delta) {
            customQty += delta;
            if (customQty < 1) customQty = 1;
            const els = getElements();
            if (els.customQtyInput) els.customQtyInput.value = customQty;
            if (window.isCustom) calculateCustomTotal();
          }

          window.calculateCustomTotal = function() {
            window.currentTotal = window.currentBasePrice * customQty;
            const els = getElements();
            if (els.customPriceDisplay) els.customPriceDisplay.innerText = '₹' + window.currentTotal;
            updateMainBtn();
          }

          window.changeGlobalQty = function(delta) {
            const els = getElements();
            if (!els.globalQtyInput) return;
            let globalQty = parseInt(els.globalQtyInput.value);
            globalQty += delta;
            if (globalQty < 1) globalQty = 1;
            els.globalQtyInput.value = globalQty;
            updateMainBtn();
          }

          window.updateMainBtn = function() {
            const els = getElements();
            if (!els.globalQtyInput || !els.mainAddBtn) return;
            let globalQty = parseInt(els.globalQtyInput.value);
            let finalTotal = window.currentTotal * globalQty;
            let text = window.isCustom ? "Subscribe Now" : "Add to Cart";
            els.mainAddBtn.innerText = text + " - ₹" + finalTotal;
          }

          window.handleAddToCart = function() {
              let freq = "";
              if (window.isCustom) {
                  freq = document.getElementById('custom-freq').value;
              }
              const qty = document.getElementById('global-qty').value;
              
              const optionRadio = Array.from(document.querySelectorAll('.po-radio')).find(r => r.checked);
              const optionType = optionRadio ? optionRadio.value : 'onetime';
              
              const msg = 'Added to cart! \n\nType: ' + optionType + '\nTotal: ₹' + (window.currentTotal * qty) + '\n- Bundle discounts applied at checkout -\n\n(Manage subscriptions from your account section)';
              alert(msg);
          }

                        const qty = document.getElementById('global-qty').value;
              
              const optionRadio = Array.from(document.querySelectorAll('.po-radio')).find(r => r.checked);
              const optionType = optionRadio ? optionRadio.value : 'onetime';
              
              const msg = 'Added to cart! \nType: ' + optionType + '\nTotal: ₹' + (window.currentTotal * qty) + '\n- Bundle discounts applied at checkout -\n\n(Manage subscriptions from your account section)'; alert(msg);
          }
        </script>

        
        <!-- Accordions -->
        <div style="border-top: 1px solid #DDD8CF;">
          <details style="padding: 24px 0; border-bottom: 1px solid #DDD8CF;" open>
            <summary style="font-weight: 600; font-size: 18px; cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center;">
              Why You'll Love It <span style="font-size: 24px; font-weight: 300;">+</span>
            </summary>
            <div style="padding-top: 16px; color: #8A8A8A; line-height: 1.6; font-size: 15px;">
              <ul style="padding-left: 20px; display: flex; flex-direction: column; gap: 8px;">
                <li><strong>Just Peanuts:</strong> Truly uncompromised. If you see oil on top, that means it's real!</li>
                <li><strong>Stone-Ground:</strong> Traditional grinding ensures maximum retention of micronutrients and flavor.</li>
                <li><strong>Heart Healthy:</strong> Full of good fats, perfect for sustained energy with your oats.</li>
              </ul>
            </div>
          </details>
          
        </div>
      </div>
    </div>
  </div>
</section>


<!-- Ingredients Section -->
<section style="padding: 80px 0; background: #fff; text-align: center;">
  <div class="ctn">
    <h2 style="font-size: 36px; font-weight: 800; text-transform: capitalize; margin-bottom: 48px; color: #000;">Ingredients</h2>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;">
      
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
        <h3 style="color: #8C593B; font-size: 24px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; text-transform: uppercase;">JAGGERY<br>POWDER</h3>
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 24px; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
           <img src="https://images.unsplash.com/photo-1620986794689-d4da44ecfc87?auto=format&fit=crop&q=80&w=300" alt="Jaggery Powder" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="font-size: 14px; font-weight: 500; color: #555; line-height: 1.5;">Natural sweetness that gives energy, not a sugar crash.</p>
      </div>

      <div style="background: #F5F5F3; border-radius: 16px; padding: 40px 24px; display: flex; flex-direction: column; align-items: center; text-align: center;">
        <h3 style="color: #8C593B; font-size: 24px; font-weight: 900; line-height: 1.1; margin-bottom: 24px; text-transform: uppercase;">FLAX<br>SEEDS</h3>
        <div style="width: 140px; height: 140px; border-radius: 50%; overflow: hidden; margin-bottom: 24px; background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,0.06);">
           <img src="https://images.unsplash.com/photo-1506456073749-d7da4073bd31?auto=format&fit=crop&q=80&w=300" alt="Flax Seeds" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <p style="font-size: 14px; font-weight: 500; color: #555; line-height: 1.5;">For smoother digestion and everyday gut support.</p>
      </div>

    </div>
  </div>
</section>

<!-- You might also like section -->

<section style="padding: 80px 0; background: #FAF9F6; border-top: 1px solid #DDD8CF;">
  <div class="ctn">
    <h3 style="font-size: 32px; margin-bottom: 40px; text-align: center;">You May Also Like</h3>
    <div class="prod-grid ymal-custom-grid">
      
    <div class="prod-card">
      <a href="product-bowl.html" class="prod-img-wrap"><img src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&q=80&auto=format&fit=crop" alt="Mango Oats" style="border-radius:12px" /></a>
      <div class="prod-body">
        <div class="prod-top"><div style="flex:1"><a href="product-bowl.html" style="text-decoration: none; color: inherit;"><h3 style="margin-bottom:2px">Mango Oats</h3></a><p class="prod-tagline">Focus Breakfast</p></div><span class="badge">18g Protein</span></div>
        <div class="divider"></div>
        <div class="prod-ingredients"><span>Mango</span><span>Oats</span><span>Seeds</span><span>Ragi</span></div>
        <div class="prod-bottom" style="margin-top: 16px;"><span class="prod-price">₹499</span><button class="btn btn-dark btn-sm">Add to cart</button></div>
      </div>
    </div>

    <div class="prod-card">
      <a href="product-bar.html" class="prod-img-wrap"><img src="https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=400&q=80&auto=format&fit=crop" alt="9AM Protein Bar" style="border-radius:12px" /></a>
      <div class="prod-body">
        <div class="prod-top"><div style="flex:1"><a href="product-bar.html" style="text-decoration: none; color: inherit;"><h3 style="margin-bottom:2px">9AM Protein Bar</h3></a><p class="prod-tagline">Fuel, not a treat</p></div><span class="badge">30g Protein</span></div>
        <div class="divider"></div>
        <div class="prod-ingredients"><span>Real Cocoa</span><span>Whey Protein</span><span>Oats</span></div>
        <div class="prod-bottom" style="margin-top: 16px;"><span class="prod-price">₹149</span><button class="btn btn-dark btn-sm">Add to cart</button></div>
      </div>
    </div>

    </div>
  </div>
</section>
<style>
.ymal-custom-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 800px;
  margin: 0 auto;
}
</style>
`);

// Adding custom CSS for YMAL if not already there
