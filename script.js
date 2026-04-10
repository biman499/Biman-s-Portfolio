//for about 
document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add smooth scrolling behavior to all links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // If the section exists on the page, scroll to it smoothly
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }

            // Update active state in navbar
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});


// for sservices

document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation anchor tags
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the default jump-to-section behavior
            e.preventDefault();

            // Get the target element's ID from the href
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            // If the element exists, scroll to it smoothly
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Offset for navbar height
                    behavior: 'smooth'
                });
            }

            // Update active styling
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
//for skill
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Offset for navbar
                    behavior: 'smooth'
                });
            }

            // Update the active class styling
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Initialize EmailJS
(function(){
    emailjs.init({
      publicKey: "PUcL8QBCw8wnBqnHd", // Your EmailJS Public Key
    });
})();

// EmailJS Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            
            const status = document.getElementById('formStatus');
            const btn = this.querySelector('button');
            
            if (status) {
                status.textContent = "Sending...";
                status.style.color = "white";
            }
            btn.disabled = true;

            const serviceID = 'service_dl2hqnh';
            const templateID = 'template_pv7ahxb';

            emailjs.sendForm(serviceID, templateID, this)
              .then(() => {
                if (status) {
                    status.textContent = "Message sent successfully!";
                    status.style.color = "#4CAF50"; // Green
                }
                this.reset();
              }, (err) => {
                if (status) {
                    status.textContent = "Error sending message. Please try again.";
                    status.style.color = "#FF5252"; // Red
                }
                console.error('EmailJS Error:', err);
              }).finally(() => {
                btn.disabled = false;
              });
        });
    }
});
