/**
 * Getiva Solutions - Cookie Consent Banner
 * GDPR/CCPA compliant cookie consent with professional design
 */

(function() {
  'use strict';

  // Check if consent was already given
  const CONSENT_KEY = 'getiva_cookie_consent';
  const consentGiven = localStorage.getItem(CONSENT_KEY);

  if (consentGiven) {
    return; // Don't show banner if already consented
  }

  // Create banner HTML
  const bannerHTML = `
    <div class="cookie-consent-banner" id="cookie-consent-banner">
      <div class="cookie-consent-container">
        <div class="cookie-consent-content">
          <div class="cookie-consent-icon">🍪</div>
          <div class="cookie-consent-text">
            <h3>We Value Your Privacy</h3>
            <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences or learn more in our <a href="/privacy-policy.html">Privacy Policy</a>.</p>
          </div>
        </div>
        <div class="cookie-consent-actions">
          <button class="cookie-btn cookie-btn-settings" id="cookie-settings-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            Settings
          </button>
          <button class="cookie-btn cookie-btn-reject" id="cookie-reject-btn">Reject All</button>
          <button class="cookie-btn cookie-btn-accept" id="cookie-accept-btn">Accept All</button>
        </div>
      </div>
    </div>

    <!-- Cookie Settings Modal -->
    <div class="cookie-modal-overlay" id="cookie-modal-overlay">
      <div class="cookie-modal">
        <div class="cookie-modal-header">
          <h3>🍪 Cookie Preferences</h3>
          <button class="cookie-modal-close" id="cookie-modal-close">&times;</button>
        </div>
        <div class="cookie-modal-body">
          <div class="cookie-category">
            <div class="cookie-category-header">
              <div class="cookie-category-info">
                <h4>Essential Cookies</h4>
                <p>Required for the website to function properly. Cannot be disabled.</p>
              </div>
              <label class="cookie-toggle disabled">
                <input type="checkbox" checked disabled>
                <span class="cookie-toggle-slider"></span>
              </label>
            </div>
          </div>
          
          <div class="cookie-category">
            <div class="cookie-category-header">
              <div class="cookie-category-info">
                <h4>Analytics Cookies</h4>
                <p>Help us understand how visitors interact with our website.</p>
              </div>
              <label class="cookie-toggle">
                <input type="checkbox" id="cookie-analytics" checked>
                <span class="cookie-toggle-slider"></span>
              </label>
            </div>
          </div>
          
          <div class="cookie-category">
            <div class="cookie-category-header">
              <div class="cookie-category-info">
                <h4>Marketing Cookies</h4>
                <p>Used to deliver personalized advertisements.</p>
              </div>
              <label class="cookie-toggle">
                <input type="checkbox" id="cookie-marketing" checked>
                <span class="cookie-toggle-slider"></span>
              </label>
            </div>
          </div>
          
          <div class="cookie-category">
            <div class="cookie-category-header">
              <div class="cookie-category-info">
                <h4>Functional Cookies</h4>
                <p>Enable enhanced functionality and personalization.</p>
              </div>
              <label class="cookie-toggle">
                <input type="checkbox" id="cookie-functional" checked>
                <span class="cookie-toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="cookie-modal-footer">
          <button class="cookie-btn cookie-btn-reject" id="cookie-save-settings">Save Preferences</button>
          <button class="cookie-btn cookie-btn-accept" id="cookie-accept-all-modal">Accept All</button>
        </div>
      </div>
    </div>
  `;

  // Create styles
  const styles = `
    .cookie-consent-banner {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 99999;
      background: linear-gradient(135deg, #0a1628 0%, #1a365d 100%);
      box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.3);
      animation: slideUp 0.5s ease;
    }

    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }

    .cookie-consent-banner.hiding {
      animation: slideDown 0.3s ease forwards;
    }

    @keyframes slideDown {
      from { transform: translateY(0); }
      to { transform: translateY(100%); }
    }

    .cookie-consent-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
    }

    .cookie-consent-content {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      flex: 1;
    }

    .cookie-consent-icon {
      font-size: 40px;
      flex-shrink: 0;
    }

    .cookie-consent-text h3 {
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
      margin: 0 0 8px;
    }

    .cookie-consent-text p {
      color: #94a3b8;
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
    }

    .cookie-consent-text a {
      color: #1dc3a4;
      text-decoration: none;
    }

    .cookie-consent-text a:hover {
      text-decoration: underline;
    }

    .cookie-consent-actions {
      display: flex;
      gap: 12px;
      flex-shrink: 0;
    }

    .cookie-btn {
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      border: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .cookie-btn-settings {
      background: transparent;
      color: #94a3b8;
      border: 1px solid #334155;
    }

    .cookie-btn-settings:hover {
      background: #1e293b;
      border-color: #475569;
      color: #ffffff;
    }

    .cookie-btn-reject {
      background: #1e293b;
      color: #ffffff;
      border: 1px solid #334155;
    }

    .cookie-btn-reject:hover {
      background: #334155;
    }

    .cookie-btn-accept {
      background: linear-gradient(135deg, #1dc3a4 0%, #14b8a6 100%);
      color: #ffffff;
    }

    .cookie-btn-accept:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(29, 195, 164, 0.4);
    }

    /* Modal Styles */
    .cookie-modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 100000;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 20px;
      animation: fadeIn 0.3s ease;
    }

    .cookie-modal-overlay.active {
      display: flex;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .cookie-modal {
      background: #ffffff;
      border-radius: 16px;
      max-width: 500px;
      width: 100%;
      max-height: 80vh;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      animation: scaleIn 0.3s ease;
    }

    @keyframes scaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }

    .cookie-modal-header {
      background: linear-gradient(135deg, #0a1628 0%, #1a365d 100%);
      padding: 20px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .cookie-modal-header h3 {
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
      margin: 0;
    }

    .cookie-modal-close {
      background: none;
      border: none;
      color: #94a3b8;
      font-size: 28px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
    }

    .cookie-modal-close:hover {
      color: #ffffff;
    }

    .cookie-modal-body {
      padding: 24px;
      max-height: 400px;
      overflow-y: auto;
    }

    .cookie-category {
      padding: 16px 0;
      border-bottom: 1px solid #e5e7eb;
    }

    .cookie-category:last-child {
      border-bottom: none;
    }

    .cookie-category-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 16px;
    }

    .cookie-category-info h4 {
      color: #0a1628;
      font-size: 15px;
      font-weight: 600;
      margin: 0 0 4px;
    }

    .cookie-category-info p {
      color: #64748b;
      font-size: 13px;
      margin: 0;
      line-height: 1.5;
    }

    /* Toggle Switch */
    .cookie-toggle {
      position: relative;
      width: 48px;
      height: 26px;
      flex-shrink: 0;
    }

    .cookie-toggle input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .cookie-toggle-slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #cbd5e1;
      border-radius: 26px;
      transition: 0.3s;
    }

    .cookie-toggle-slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 3px;
      bottom: 3px;
      background: white;
      border-radius: 50%;
      transition: 0.3s;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .cookie-toggle input:checked + .cookie-toggle-slider {
      background: linear-gradient(135deg, #1dc3a4 0%, #14b8a6 100%);
    }

    .cookie-toggle input:checked + .cookie-toggle-slider:before {
      transform: translateX(22px);
    }

    .cookie-toggle.disabled .cookie-toggle-slider {
      background: #1dc3a4;
      opacity: 0.6;
      cursor: not-allowed;
    }

    .cookie-modal-footer {
      padding: 16px 24px;
      background: #f8fafc;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .cookie-consent-container {
        flex-direction: column;
        padding: 20px;
        gap: 20px;
      }

      .cookie-consent-content {
        flex-direction: column;
        text-align: center;
        align-items: center;
      }

      .cookie-consent-actions {
        width: 100%;
        flex-direction: column;
      }

      .cookie-btn {
        width: 100%;
        justify-content: center;
      }

      .cookie-modal-footer {
        flex-direction: column;
      }

      .cookie-modal-footer .cookie-btn {
        width: 100%;
      }
    }
  `;

  // Inject styles
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);

  // Inject banner
  document.body.insertAdjacentHTML('beforeend', bannerHTML);

  // Get elements
  const banner = document.getElementById('cookie-consent-banner');
  const modal = document.getElementById('cookie-modal-overlay');
  const acceptBtn = document.getElementById('cookie-accept-btn');
  const rejectBtn = document.getElementById('cookie-reject-btn');
  const settingsBtn = document.getElementById('cookie-settings-btn');
  const modalClose = document.getElementById('cookie-modal-close');
  const saveSettingsBtn = document.getElementById('cookie-save-settings');
  const acceptAllModalBtn = document.getElementById('cookie-accept-all-modal');

  // Save consent
  function saveConsent(preferences) {
    const consent = {
      timestamp: new Date().toISOString(),
      preferences: preferences
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  }

  // Hide banner with animation
  function hideBanner() {
    banner.classList.add('hiding');
    setTimeout(() => {
      banner.remove();
      modal.remove();
    }, 300);
  }

  // Accept all cookies
  function acceptAll() {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    });
    hideBanner();
  }

  // Reject all cookies (except essential)
  function rejectAll() {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    });
    hideBanner();
  }

  // Save custom preferences
  function savePreferences() {
    saveConsent({
      essential: true,
      analytics: document.getElementById('cookie-analytics').checked,
      marketing: document.getElementById('cookie-marketing').checked,
      functional: document.getElementById('cookie-functional').checked
    });
    modal.classList.remove('active');
    hideBanner();
  }

  // Event listeners
  acceptBtn.addEventListener('click', acceptAll);
  rejectBtn.addEventListener('click', rejectAll);
  settingsBtn.addEventListener('click', () => modal.classList.add('active'));
  modalClose.addEventListener('click', () => modal.classList.remove('active'));
  saveSettingsBtn.addEventListener('click', savePreferences);
  acceptAllModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    acceptAll();
  });

  // Close modal on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

})();
