// ===================================
// MOBILE MENU FUNCTIONALITY
// ===================================

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const warnDiv = document.querySelector('.warn');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    warnDiv.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        warnDiv.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        warnDiv.classList.remove('active');
    }
});

// ===================================
// FAQ ACCORDION FUNCTIONALITY
// ===================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// HEADER SCROLL EFFECT
// ===================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ===================================
// ANIMATE ON SCROLL
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.testimonial-card, .product-card, .showcase-item, .promo-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// BUTTON INTERACTIONS
// ===================================

// Add to cart buttons
const addToCartButtons = document.querySelectorAll('.btn-add-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Visual feedback
        const originalText = button.textContent;
        button.textContent = '✔ Añadido!';
        button.style.background = 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
});

// Newsletter button
const newsletterButton = document.querySelector('.btn-newsletter');
if (newsletterButton) {
    newsletterButton.addEventListener('click', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu interés! Próximamente agregaremos el formulario de newsletter.');
    });
}

// Primary CTA buttons
const ctaButtons = document.querySelectorAll('.btn-hero-primary, .btn-promo');
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Scroll to products section
        const productsSection = document.querySelector('#productos');
        if (productsSection) {
            const headerOffset = 80;
            const elementPosition = productsSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Secondary CTA button
const secondaryButton = document.querySelector('.btn-hero-secondary');
if (secondaryButton) {
    secondaryButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Scroll to bestsellers section
        const bestsellersSection = document.querySelector('#nosotros');
        if (bestsellersSection) {
            const headerOffset = 80;
            const elementPosition = bestsellersSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// ===================================
// PRODUCT CARD HOVER EFFECTS
// ===================================

const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const image = card.querySelector('.product-image img');
        if (image) {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        }
    });

    card.addEventListener('mouseleave', () => {
        const image = card.querySelector('.product-image img');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

// ===================================
// LOADING ANIMATION
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// RESPONSIVE MENU HANDLING
// ===================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Close mobile menu on resize to desktop
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    }, 250);
});

// ===================================
// CONSOLE MESSAGE
// ===================================

console.log('%c🔥 Elvapero.es 🔥', 'color: #4353FF; font-size: 24px; font-weight: bold;');
console.log('%cVapers desechables con muchas caladas', 'color: #22c55e; font-size: 14px;');

// ===================================
// SLIDER FUNCTIONALITY
// ===================================

const sliders = {
    merrymiSlider: { index: 0 },
    jnrSlider: { index: 0 },
    fumotSlider: { index: 0 }
};

function moveSlider(sliderId, direction) {
    const sliderContainer = document.getElementById(sliderId);
    if (!sliderContainer) return;

    const track = sliderContainer.querySelector('.slider-track');
    const items = track.querySelectorAll('.slider-item');
    if (items.length === 0) return;

    const totalItems = items.length;

    // Get visible items count from CSS or calculate it
    const containerWidth = sliderContainer.offsetWidth;
    const itemWidth = items[0].getBoundingClientRect().width;

    // Calculate how many items are currently visible
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 0;

    const itemsVisible = Math.round((containerWidth + gap) / (itemWidth + gap)) || 1;
    const maxIndex = totalItems - itemsVisible;

    // Update index
    sliders[sliderId].index += direction;

    // Boundary checks
    if (sliders[sliderId].index < 0) sliders[sliderId].index = 0;
    if (sliders[sliderId].index > maxIndex) sliders[sliderId].index = maxIndex;

    // Calculate translation precisely
    const moveAmount = sliders[sliderId].index * (itemWidth + gap);

    track.style.transform = `translateX(-${moveAmount}px)`;
}

// Global exposure for onclick
window.moveSlider = moveSlider;

// Reset sliders on window resize to prevent alignment issues
window.addEventListener('resize', () => {
    Object.keys(sliders).forEach(id => {
        const track = document.getElementById(id)?.querySelector('.slider-track');
        if (track) {
            sliders[id].index = 0;
            track.style.transform = 'translateX(0)';
        }
    });
});


// Age verification modal
const ageModal = document.getElementById("ageModal");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

window.addEventListener("load", () => {
    if (localStorage.getItem("ageConfirmed") != "true") {
        ageModal.style.display = "flex";
    } else {
        ageModal.style.display = "none";
    }
});

yesBtn.addEventListener("click", () => {
    localStorage.setItem("ageConfirmed", "true");
    ageModal.style.display = "none";
});

noBtn.addEventListener("click", () => {
    alert("Acceso restringido. Solo mayores de 18 años.");
    window.close();
    window.location.href = "https://www.google.pl";
});

// Hide the top warning when the page is scrolled
const warn = document.querySelector(".warn");
if (warn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 10) {
            warn.style.display = "none";
        } else {
            warn.style.display = "";
        }
    });
}

// footer

const city = document.getElementById("city");
const cont = document.querySelectorAll(".foot-cont-three a");
city.addEventListener("click", toggleCont);
function toggleCont() {
    city.classList.toggle("active");
    Array.from(cont).forEach((el) => {
        el.style.display = el.style.display === "block" ? "none" : "block";
    });
}

const yearSpan = document.querySelector('#year');
if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
}
