const fs = require('fs');

let code = fs.readFileSync('gen_products.cjs', 'utf8');

function getPurchaseOptionsHtml(basePrice) {
  return `
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
          <label class="po-card active" onclick="updatePrice(1, ${basePrice}, 0, this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="onetime" checked>
                One-Time Purchase
              </div>
              <span>₹${basePrice}</span>
            </div>
            <div class="po-desc">Standard add to cart.</div>
          </label>

          <!-- Option 2: 7-Day Pack -->
          <label class="po-card" onclick="updatePrice(7, ${basePrice * 7 - 10}, 10, this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="7day">
                7-Day Pack Bundle
              </div>
              <span>₹${basePrice * 7 - 10}</span>
            </div>
            <div class="po-desc">7 packets together. <span class="po-tag">Save ₹10 on 7-Day Pack</span></div>
          </label>

          <!-- Option 3: 30-Day Pack -->
          <label class="po-card" onclick="updatePrice(30, ${basePrice * 30 - 25}, 25, this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="30day">
                30-Day Pack Bundle
              </div>
              <span>₹${basePrice * 30 - 25}</span>
            </div>
            <div class="po-desc">30 packets together. <span class="po-tag">Save ₹25 on Monthly Pack</span></div>
          </label>

          <!-- Option 4: Custom Sub -->
          <label class="po-card" onclick="updateCustomPrice(this)">
            <div class="po-header">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="radio" name="purchase_option" class="po-radio" value="custom">
                Custom Subscription
              </div>
              <span id="custom-price-display">₹${basePrice}</span>
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
          <button id="main-add-btn" class="btn btn-dark" style="flex: 1; padding: 16px; font-size: 16px;">Add to Cart - ₹${basePrice}</button>
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
          window.currentBasePrice = ${basePrice};
          window.currentTotal = ${basePrice};
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
        </script>
`;
}

const replacement1 = getPurchaseOptionsHtml(499);
const replacement2 = getPurchaseOptionsHtml(149);
const replacement3 = getPurchaseOptionsHtml(399);

function safeReplace(originalText, targetStartStr, targetEndRegex, newStr) {
  const start = originalText.indexOf(targetStartStr);
  if(start === -1) return originalText;
  const rem = originalText.slice(start);
  const match = rem.match(targetEndRegex);
  if(match) {
    const end = start + match.index + match[0].length;
    return originalText.slice(0, start) + newStr + originalText.slice(end);
  }
  return originalText;
}

code = safeReplace(code, '<!-- Add to cart -->', /<button class="btn btn-accent"[^>]*>Subscribe Monthly \(Save 10%\)<\/button>/, "REPLACE_MARKER_1");
code = safeReplace(code, '<!-- Options -->', /<button class="btn btn-dark"[^>]*>Add to Cart [^<]*<\/button>\s*<\/div>/, "REPLACE_MARKER_2");
code = safeReplace(code, '<!-- Options -->', /<button class="btn btn-dark"[^>]*>Add to Cart [^<]*<\/button>\s*<\/div>/, "REPLACE_MARKER_3");

code = code.replace("REPLACE_MARKER_1", replacement1);
code = code.replace("REPLACE_MARKER_2", replacement2);
code = code.replace("REPLACE_MARKER_3", replacement3);

fs.writeFileSync('gen_products.cjs', code);
