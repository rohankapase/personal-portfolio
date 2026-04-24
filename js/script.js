// ==========================================
// MOBILE MENU TOGGLE
// ==========================================
const menuIcon = document.getElementById('menu-icon');
const navLinksContainer = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });
});

// ==========================================
// NAVIGATION HIGHLIGHT ON SCROLL
// ==========================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// ==========================================
// EMAILJS CONTACT FORM
// ==========================================
const btn = document.getElementById('submit-btn');

document.getElementById('contact-form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.innerText = 'Sending...';

        const serviceID = 'service_49bc0ga';
        const templateID = 'template_1nrd4cu';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerText = 'Send Message';
                alert('Message Sent Successfully!');
                this.reset();
            }, (err) => {
                btn.innerText = 'Send Message';
                alert('Error: ' + JSON.stringify(err));
            });
    });
