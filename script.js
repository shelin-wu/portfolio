// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                item.style.animation = 'fadeInUp 0.5s ease';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            const width = skillProgress.style.width;
            skillProgress.style.width = '0%';
            setTimeout(() => {
                skillProgress.style.width = width;
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-item').forEach(item => {
    skillObserver.observe(item);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Add fade-in animation to elements on scroll
const fadeElements = document.querySelectorAll('.portfolio-item, .about-content, .contact-content');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// Project Modal Functionality
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDate = document.getElementById('modalDate');
const modalDescription = document.getElementById('modalDescription');
const modalDetails = document.getElementById('modalDetails');
const modalGallery = document.getElementById('modalGallery');

// Project data mapping
const projectData = {
    'brand-identity': {
        image: 'images/portfolio/brand-identity.jpg',
        title: 'Brand Identity Design',
        category: 'Branding',
        date: '2024',
        description: 'A comprehensive visual identity system that captures the essence of the brand through thoughtful design elements, color palettes, and typography.',
        details: 'This project involved creating a complete brand identity including logo design, color schemes, typography selection, and brand guidelines. The design reflects modern aesthetics while maintaining timeless appeal.',
        gallery: []
    },
    'digital-campaign': {
        image: 'images/portfolio/digital-campaign.jpg',
        title: 'Digital Campaign',
        category: 'Digital',
        date: '2024',
        description: 'A comprehensive digital marketing campaign featuring social media graphics, web banners, and interactive elements designed to engage and convert audiences.',
        details: 'This project involved creating cohesive visual assets across multiple digital platforms. The campaign included social media posts, web advertisements, email templates, and interactive web elements, all maintaining a consistent brand voice and visual identity.',
        gallery: []
    },
    'print-design': {
        image: 'images/portfolio/print-design.jpg',
        title: 'Editorial Design',
        category: 'Print',
        date: '2024',
        description: 'A sophisticated magazine layout featuring elegant typography, balanced compositions, and thoughtful use of white space to create an engaging reading experience.',
        details: 'This editorial project required careful attention to typography hierarchy, grid systems, and visual flow. The design balances readability with aesthetic appeal, creating a publication that is both functional and beautiful.',
        gallery: []
    },
    'illustration': {
        image: 'images/portfolio/illustration.jpg',
        title: 'Illustration Series',
        category: 'Illustration',
        date: '2024',
        description: 'A collection of custom illustrations showcasing unique artistic style, vibrant colors, and creative storytelling through visual art.',
        details: 'This series demonstrates versatility in illustration techniques, from digital paintings to vector graphics. Each piece tells a story and conveys emotion through carefully crafted visual elements and color choices.',
        gallery: []
    },
    'logo-design-1': {
        image: 'images/portfolio/logo-design-1.jpg',
        title: 'Logo Design',
        category: 'Branding',
        date: '2024',
        description: 'A versatile logo design with multiple variations, ensuring brand consistency across all applications and media types.',
        details: 'This logo design project included primary and secondary logo variations, monochrome versions, and usage guidelines. The design is scalable, memorable, and works effectively across both digital and print applications.',
        gallery: []
    },
    'logo-design-2': {
        image: 'images/portfolio/logo-design-2.jpg',
        title: 'Logo Design',
        category: 'Branding',
        date: '2024',
        description: 'A creative brand identity featuring a distinctive logo mark with supporting typography and brand elements.',
        details: 'This project involved creating a complete logo system including the main mark, wordmark, and various applications. The design reflects the brand\'s personality while maintaining professional appeal and versatility.',
        gallery: []
    },
    'web-design': {
        image: 'images/portfolio/web-design.jpg',
        title: 'Web Design',
        category: 'Digital',
        date: '2024',
        description: 'A modern, user-friendly web interface design focusing on intuitive navigation, clean aesthetics, and optimal user experience.',
        details: 'This web design project involved creating wireframes, mockups, and a complete design system. The interface prioritizes user experience with clear navigation, responsive layouts, and engaging visual elements that guide users through the content seamlessly.',
        gallery: []
    }
};

function openProjectModal(portfolioItem) {
    // Get project data from data attributes or use default
    const projectId = portfolioItem.getAttribute('data-project');
    const title = portfolioItem.getAttribute('data-title') || portfolioItem.querySelector('h3').textContent;
    const description = portfolioItem.getAttribute('data-description') || portfolioItem.querySelector('p').textContent;
    const details = portfolioItem.getAttribute('data-details') || description;
    const category = portfolioItem.getAttribute('data-category-name') || portfolioItem.getAttribute('data-category');
    const date = portfolioItem.getAttribute('data-date') || '2024';
    
    // Get image source
    const img = portfolioItem.querySelector('img');
    const imageSrc = img ? img.src : `images/portfolio/${projectId}.jpg`;
    
    // Populate modal
    modalImage.src = imageSrc;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalDate.textContent = date;
    modalDescription.textContent = description;
    modalDetails.textContent = details;
    
    // Clear and populate gallery if available
    modalGallery.innerHTML = '';
    const project = projectData[projectId];
    if (project && project.gallery && project.gallery.length > 0) {
        project.gallery.forEach(galleryImage => {
            const img = document.createElement('img');
            img.src = galleryImage;
            img.alt = title;
            img.onclick = () => {
                modalImage.src = galleryImage;
            };
            modalGallery.appendChild(img);
        });
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal events
modalClose.addEventListener('click', closeProjectModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

