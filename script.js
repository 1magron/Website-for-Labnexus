// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact Form Handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ Thanks for contacting us! We'll get back to you shortly.");
    contactForm.reset();
  });
}

// Partner Form (on product.html)
const partnerForm = document.getElementById("partnerForm");
if (partnerForm) {
  partnerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("🤝 Thank you for your interest in partnering with us! We'll connect soon.");
    partnerForm.reset();
  });
}
