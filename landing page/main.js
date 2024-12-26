// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function (e) {
    const name = document.querySelector('input[placeholder="Your Name"]');
    const email = document.querySelector('input[placeholder="Your Email"]');
    const phone = document.querySelector('input[placeholder="Your Phone"]');
    const message = document.querySelector('textarea[name="message"]');
    let valid = true;

    // Check if fields are empty
    if (name.value === '' || email.value === '' || phone.value === '' || message.value === '') {
        alert('Please fill out all fields');
        valid = false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        alert('Please enter a valid email address');
        valid = false;
    }

    // If the form is not valid, prevent submission
    if (!valid) {
        e.preventDefault();
    }
});

// Scroll-to-top Button
const scrollTopButton = document.createElement('button');
scrollTopButton.textContent = '↑';
scrollTopButton.classList.add('scroll-top-btn');
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
