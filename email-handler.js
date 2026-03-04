/**
 * Getiva Solutions - Email Handler
 * Sends professional HTML emails via EmailJS
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://www.emailjs.com and create a free account
 * 2. Add your email service (Zoho SMTP recommended):
 *    - SMTP Server: smtp.zoho.com
 *    - Port: 465 (SSL) or 587 (TLS)
 *    - Username: info@getivasolutions.com
 *    - Password: Your Zoho app password
 * 3. Create email templates (see email-templates folder for HTML)
 * 4. Replace the placeholder values below with your actual IDs
 */

// ============================================
// EMAILJS CONFIGURATION - UPDATE THESE VALUES
// ============================================
const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY',        // Get from EmailJS Dashboard > Account > API Keys
  serviceId: 'YOUR_SERVICE_ID',        // Get from EmailJS Dashboard > Email Services
  contactTemplateId: 'contact_form',   // Template ID for contact form
  careersTemplateId: 'careers_form'    // Template ID for careers/job applications
};

// Initialize EmailJS
(function() {
  // Load EmailJS SDK
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
  script.onload = function() {
    emailjs.init(EMAILJS_CONFIG.publicKey);
    console.log('EmailJS initialized');
  };
  document.head.appendChild(script);
})();

/**
 * Send Contact Form Email
 * Sends both notification to team and auto-response to user
 */
async function sendContactEmail(formData) {
  const templateParams = {
    // To team
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || 'Not provided',
    role: formData.role || 'Not specified',
    company: formData.company || 'Not provided',
    subject: formData.subject,
    message: formData.message,
    
    // For auto-response
    to_name: formData.name,
    to_email: formData.email,
    reply_to: formData.email
  };

  try {
    // Send notification to team
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.contactTemplateId,
      templateParams
    );
    
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, message: error.text || 'Failed to send email' };
  }
}

/**
 * Send Careers/Job Application Email
 * Sends both notification to recruiting team and auto-response to applicant
 */
async function sendCareersEmail(formData) {
  const fullName = `${formData.firstName} ${formData.lastName}`;
  
  const templateParams = {
    // To recruiting team
    from_name: fullName,
    first_name: formData.firstName,
    last_name: formData.lastName,
    from_email: formData.email,
    phone: formData.phone,
    position: formData.position,
    experience: formData.experience,
    work_authorization: formData.workAuthorization,
    linkedin: formData.linkedin || 'Not provided',
    portfolio: formData.portfolio || 'Not provided',
    cover_letter: formData.coverLetter || 'Not provided',
    
    // For auto-response
    to_name: fullName,
    to_email: formData.email,
    reply_to: formData.email
  };

  try {
    // Send notification to recruiting team
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.careersTemplateId,
      templateParams
    );
    
    return { success: true, message: 'Application submitted successfully' };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, message: error.text || 'Failed to send application' };
  }
}

/**
 * Handle Contact Form Submission
 */
function handleContactForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  // Collect form data
  const formData = {
    name: form.querySelector('#name').value,
    email: form.querySelector('#email').value,
    phone: form.querySelector('#phone')?.value,
    role: form.querySelector('#role')?.value,
    company: form.querySelector('#company')?.value,
    subject: form.querySelector('#subject').value,
    message: form.querySelector('#message').value
  };
  
  sendContactEmail(formData).then(result => {
    if (result.success) {
      // Show success message
      showNotification('success', 'Thank you! Your message has been sent. We\'ll get back to you within 24 hours.');
      form.reset();
    } else {
      showNotification('error', 'Sorry, there was an error sending your message. Please try again or email us directly.');
    }
    
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  });
}

/**
 * Handle Careers Form Submission
 */
function handleCareersForm(event) {
  event.preventDefault();
  
  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting Application...';
  
  // Collect form data
  const formData = {
    firstName: form.querySelector('#firstName').value,
    lastName: form.querySelector('#lastName').value,
    email: form.querySelector('#email').value,
    phone: form.querySelector('#phone').value,
    position: form.querySelector('#position').value,
    experience: form.querySelector('#experience').value,
    workAuthorization: form.querySelector('#workAuth')?.value,
    linkedin: form.querySelector('#linkedin')?.value,
    portfolio: form.querySelector('#portfolio')?.value,
    coverLetter: form.querySelector('#coverLetter')?.value
  };
  
  sendCareersEmail(formData).then(result => {
    if (result.success) {
      showNotification('success', 'Thank you! Your application has been submitted. Our team will review it within 3-5 business days.');
      form.reset();
    } else {
      showNotification('error', 'Sorry, there was an error submitting your application. Please try again or email careers@getivasolutions.com directly.');
    }
    
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  });
}

/**
 * Show notification toast
 */
function showNotification(type, message) {
  // Remove existing notifications
  const existing = document.querySelector('.email-notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = `email-notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">${type === 'success' ? '✅' : '❌'}</span>
      <span class="notification-message">${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 10 seconds
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 300);
  }, 10000);
}

// Initialize forms when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
  }
  
  // Careers/Application form
  const careersForm = document.getElementById('application-form');
  if (careersForm) {
    careersForm.addEventListener('submit', handleCareersForm);
  }
});

// Add notification styles
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  .email-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    max-width: 400px;
    animation: slideIn 0.3s ease;
  }
  
  .email-notification.fade-out {
    animation: slideOut 0.3s ease forwards;
  }
  
  .notification-content {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 16px 20px;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  }
  
  .email-notification.success .notification-content {
    background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
    border: 1px solid #10b981;
  }
  
  .email-notification.error .notification-content {
    background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
    border: 1px solid #ef4444;
  }
  
  .notification-icon {
    font-size: 20px;
    flex-shrink: 0;
  }
  
  .notification-message {
    flex: 1;
    font-size: 14px;
    line-height: 1.5;
    color: #1a1a2e;
  }
  
  .notification-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #64748b;
    padding: 0;
    line-height: 1;
  }
  
  .notification-close:hover {
    color: #1a1a2e;
  }
  
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
  
  @media (max-width: 480px) {
    .email-notification {
      left: 10px;
      right: 10px;
      max-width: none;
    }
  }
`;
document.head.appendChild(notificationStyles);
