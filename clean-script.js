// Clean JavaScript for Pro-Level Portfolio

// Case Study Modal Functions
function openCaseStudy(projectId) {
    const modal = document.getElementById('caseStudyModal');
    const content = document.getElementById('caseStudyContent');
    
    if (!modal || !content) {
        console.error('Modal elements not found');
        alert('Modal not found! Check console for details.');
        return;
    }
    
    console.log('Opening case study for:', projectId);
    console.log('Modal element:', modal);
    console.log('Content element:', content);
    
    // Case study data
    const caseStudies = {
        'smart-campus': {
            title: 'Smart Campus Hub',
            subtitle: 'Revolutionizing campus management through technology',
            problem: `
                <h2 class="text-2xl font-bold text-white mb-4">The Problem</h2>
                <p class="text-gray-300 mb-4">
                    Traditional campus management systems are often fragmented, with separate systems for student services, 
                    course management, and administrative operations. This leads to inefficiencies, data silos, and poor user experiences 
                    for both students and staff.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Multiple disconnected systems requiring separate logins</li>
                    <li>Inconsistent data across departments</li>
                    <li>Poor mobile experience for students</li>
                    <li>Limited real-time communication capabilities</li>
                </ul>
            `,
            solution: `
                <h2 class="text-2xl font-bold text-white mb-4">The Solution</h2>
                <p class="text-gray-300 mb-6">
                    I developed a comprehensive campus management platform that integrates all student services and administrative 
                    functions into a single, cohesive system. The solution features a modern, responsive interface with real-time 
                    updates and powerful analytics.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <i class="fas fa-users text-accent-purple text-2xl mb-3"></i>
                        <h3 class="text-white font-semibold mb-2">Unified User Management</h3>
                        <p class="text-gray-400 text-sm">Single sign-on system with role-based access control for students, faculty, and administrators.</p>
                    </div>
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <i class="fas fa-chart-line text-accent-purple text-2xl mb-3"></i>
                        <h3 class="text-white font-semibold mb-2">Real-time Analytics</h3>
                        <p class="text-gray-400 text-sm">Comprehensive dashboard with live data visualization and reporting capabilities.</p>
                    </div>
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <i class="fas fa-mobile-alt text-accent-purple text-2xl mb-3"></i>
                        <h3 class="text-white font-semibold mb-2">Mobile-First Design</h3>
                        <p class="text-gray-400 text-sm">Fully responsive interface optimized for mobile devices and tablets.</p>
                    </div>
                </div>
            `,
            tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
            demoUrl: 'http://localhost/student-system/'
        },
        'student-management': {
            title: 'Student Management System',
            subtitle: 'Streamlining academic administration and student services',
            problem: `
                <h2 class="text-2xl font-bold text-white mb-4">The Problem</h2>
                <p class="text-gray-300 mb-4">
                    Educational institutions often struggle with manual student record management, leading to lost data, 
                    inefficient processes, and poor communication between departments. Students face difficulties accessing 
                    their information and tracking their academic progress.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Paper-based record keeping prone to errors and loss</li>
                    <li>Time-consuming manual data entry and retrieval</li>
                    <li>Lack of centralized student information database</li>
                    <li>Difficulty tracking academic progress and attendance</li>
                    <li>Poor communication between students, faculty, and administration</li>
                </ul>
            `,
            solution: `
                <h2 class="text-2xl font-bold text-white mb-4">The Solution</h2>
                <p class="text-gray-300 mb-6">
                    I built a comprehensive Student Management System that digitizes all student-related processes, 
                    providing a centralized platform for academic administration. The system automates routine tasks and 
                    improves data accuracy and accessibility.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <i class="fas fa-graduation-cap text-accent-purple text-2xl mb-3"></i>
                        <h3 class="text-white font-semibold mb-2">Academic Records</h3>
                        <p class="text-gray-400 text-sm">Digital student profiles with complete academic history, grades, and attendance tracking.</p>
                    </div>
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <i class="fas fa-calendar-alt text-accent-purple text-2xl mb-3"></i>
                        <h3 class="text-white font-semibold mb-2">Course Management</h3>
                        <p class="text-gray-400 text-sm">Automated course registration, scheduling, and grade management system.</p>
                    </div>
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <i class="fas fa-bell text-accent-purple text-2xl mb-3"></i>
                        <h3 class="text-white font-semibold mb-2">Communication Hub</h3>
                        <p class="text-gray-400 text-sm">Integrated messaging system for announcements and student-faculty communication.</p>
                    </div>
                </div>
            `,
            tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'AJAX'],
            demoUrl: 'http://localhost/student-system/'
        },
        'shoes-hub': {
            title: 'SHOES_HUB',
            subtitle: 'Modern e-commerce platform for footwear retail',
            problem: `
                <h2 class="text-2xl font-bold text-white mb-4">The Problem</h2>
                <p class="text-gray-300 mb-4">
                    Traditional shoe retailers face challenges in reaching online customers and managing inventory effectively. 
                    Many lack a robust digital presence, missing out on the growing e-commerce market and struggling with 
                    manual inventory management and order processing.
                </p>
                <ul class="list-disc list-inside text-gray-300 space-y-2">
                    <li>Limited online presence and customer reach</li>
                    <li>Manual inventory tracking leading to stock issues</li>
                    <li>Inefficient order processing and fulfillment</li>
                    <li>Lack of customer data and analytics</li>
                    <li>Poor user experience on mobile devices</li>
                </ul>
            `,
            solution: `
                <h2 class="text-2xl font-bold text-white mb-4">The Solution</h2>
                <p class="text-gray-300 mb-6">
                    I developed SHOES_HUB, a full-featured e-commerce platform specifically designed for footwear retail. 
                    The platform provides a seamless shopping experience with advanced inventory management, secure payment processing, 
                    and comprehensive analytics.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <i class="fas fa-shopping-cart text-accent-purple text-2xl mb-3"></i>
                        <h3 class="text-white font-semibold mb-2">E-commerce Engine</h3>
                        <p class="text-gray-400 text-sm">Complete shopping cart system with secure checkout and multiple payment options.</p>
                    </div>
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <i class="fas fa-boxes text-accent-purple text-2xl mb-3"></i>
                        <h3 class="text-white font-semibold mb-2">Inventory Management</h3>
                        <p class="text-gray-400 text-sm">Real-time stock tracking, automated alerts, and supplier management system.</p>
                    </div>
                    <div class="bg-gray-800 p-6 rounded-lg">
                        <i class="fas fa-chart-bar text-accent-purple text-2xl mb-3"></i>
                        <h3 class="text-white font-semibold mb-2">Sales Analytics</h3>
                        <p class="text-gray-400 text-sm">Comprehensive dashboard with sales reports, customer insights, and trend analysis.</p>
                    </div>
                </div>
            `,
            tech: ['PHP', 'MySQL', 'JavaScript', 'Stripe API', 'Bootstrap'],
            demoUrl: 'http://localhost/SHOES_HUB/'
        }
    };
    
    const caseStudy = caseStudies[projectId];
    if (!caseStudy) return;
    
    // Populate content with animations
    content.innerHTML = `
        <div class="space-y-8">
            <div class="case-study-header" style="opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s ease forwards;">
                <h1 class="text-4xl font-bold text-white mb-2">${caseStudy.title}</h1>
                <p class="text-gray-400 text-lg">${caseStudy.subtitle}</p>
            </div>
            
            <div class="bg-gray-800 p-8 rounded-lg problem-section" style="opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s ease 0.2s forwards;">
                ${caseStudy.problem}
            </div>
            
            <div class="bg-gray-800 p-8 rounded-lg solution-section" style="opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s ease 0.4s forwards;">
                ${caseStudy.solution}
            </div>
            
            <div class="bg-gray-800 p-8 rounded-lg tech-section" style="opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s ease 0.6s forwards;">
                <h2 class="text-2xl font-bold text-white mb-4">Technologies Used</h2>
                <div class="flex flex-wrap gap-3">
                    ${caseStudy.tech.map(tech => `
                        <span class="px-4 py-2 bg-accent-purple/20 text-accent-purple rounded-full font-inter font-medium transform hover:scale-110 transition-transform duration-300">${tech}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="flex justify-center demo-section" style="opacity: 0; transform: translateY(20px); animation: fadeInUp 0.6s ease 0.8s forwards;">
                <a href="${caseStudy.demoUrl}" target="_blank" class="bg-accent-purple hover:bg-accent-purple-dark text-white px-8 py-3 rounded-lg font-inter font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    View Live Demo
                </a>
            </div>
        </div>
    `;
    
    // Show modal - direct style approach
    modal.style.display = 'block';
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    document.body.style.overflow = 'hidden';
    console.log('Case study modal opened for:', projectId);
}

function closeCaseStudy() {
    const modal = document.getElementById('caseStudyModal');
    if (modal) {
        modal.style.display = 'none';
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        document.body.style.overflow = 'auto';
        console.log('Case study modal closed');
    }
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Reveal Animations on Scroll
function initRevealAnimations() {
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
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    
    // Get form elements
    const form = event.target.closest('form');
    const nameInput = form.querySelector('input[type="text"]');
    const emailInput = form.querySelector('input[type="email"]');
    const messageInput = form.querySelector('textarea');
    
    // Basic validation
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showToast('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        showToast('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
    
    // Clear form
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}

// Simple Particle System
function initSimpleParticles() {
    const container = document.getElementById('particleSystem');
    if (!container) return;
    
    // Create a few particles
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.className = 'dynamic-particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particle.style.animationDelay = Math.random() * 6 + 's';
        container.appendChild(particle);
    }
}

// Animated Name Effects
function initAnimatedName() {
    const nameElement = document.getElementById('animatedName');
    if (!nameElement) {
        console.log('Name element not found');
        return;
    }
    
    const name = "Abebe Getachew";
    nameElement.innerHTML = '';
    
    // Create letter-by-letter animation with exact 0.1s delay
    name.split('').forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.className = 'name-letter';
        span.style.setProperty('--letter-index', index);
        span.style.animationDelay = `${index * 0.1}s`;
        nameElement.appendChild(span);
    });
    
    console.log('Name letters created:', nameElement.children.length);
    
    // Create purple particle system orbiting around name
    createOrbitingParticles(nameElement);
    
    // Add simple animation class
    nameElement.classList.add('name-animated');
}

// Purple Particle System Orbiting Around Name
function createOrbitingParticles(container) {
    const particleCount = 8;
    const orbitRadius = 80;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'name-particle';
        
        // Set orbit radius and initial position
        particle.style.setProperty('--orbit-radius', `${orbitRadius}px`);
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.animationDelay = `${i * 1}s`;
        
        // Create particle trail effect
        createParticleTrail(container, i, orbitRadius);
        
        container.appendChild(particle);
    }
    
    console.log('Created', particleCount, 'orbiting particles');
}

// Create particle trail effect
function createParticleTrail(container, particleIndex, radius) {
    setInterval(() => {
        const trail = document.createElement('div');
        trail.className = 'particle-trail';
        
        // Calculate current particle position
        const angle = (Date.now() / 1000 + particleIndex) * (Math.PI * 2 / 8);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        trail.style.left = `calc(50% + ${x}px)`;
        trail.style.top = `calc(50% + ${y}px)`;
        
        container.appendChild(trail);
        
        // Remove trail after animation
        setTimeout(() => {
            trail.remove();
        }, 1000);
    }, 200);
}

// Create particles around the name
function createNameParticles(container) {
    const rect = container.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'name-particle';
        
        // Random starting position around the name
        const angle = (Math.PI * 2 * i) / 8;
        const radius = 100;
        const startX = Math.cos(angle) * radius;
        const startY = Math.sin(angle) * radius;
        
        // Random end positions
        const endAngle = angle + (Math.PI / 4);
        const endRadius = radius + 50;
        const endX = Math.cos(endAngle) * endRadius;
        const endY = Math.sin(endAngle) * endRadius;
        
        // Set CSS variables for animation
        particle.style.setProperty('--tx', `${startX}px`);
        particle.style.setProperty('--ty', `${startY}px`);
        particle.style.setProperty('--tx2', `${endX}px`);
        particle.style.setProperty('--ty2', `${endY}px`);
        particle.style.setProperty('--tx3', `${endX * 1.5}px`);
        particle.style.setProperty('--ty3', `${endY * 1.5}px`);
        
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.animationDelay = `${i * 0.5}s`;
        
        container.appendChild(particle);
    }
}

// Create sparkle effects
function createSparkles(container) {
    for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'name-sparkle';
        
        // Random position around the name
        const x = Math.random() * 100 - 50;
        const y = Math.random() * 100 - 50;
        
        sparkle.style.left = `${50 + x}%`;
        sparkle.style.top = `${50 + y}%`;
        sparkle.style.animationDelay = `${Math.random() * 3}s`;
        
        container.appendChild(sparkle);
    }
}

// Interactive name hover effects
function initNameInteractions() {
    const nameContainer = document.querySelector('.name-container');
    if (!nameContainer) return;
    
    nameContainer.addEventListener('mouseenter', () => {
        // Add extra particles on hover
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'name-particle';
                
                const angle = Math.random() * Math.PI * 2;
                const radius = 50;
                particle.style.setProperty('--tx', `${Math.cos(angle) * radius}px`);
                particle.style.setProperty('--ty', `${Math.sin(angle) * radius}px`);
                particle.style.setProperty('--tx2', `${Math.cos(angle) * radius * 2}px`);
                particle.style.setProperty('--ty2', `${Math.sin(angle) * radius * 2}px`);
                particle.style.setProperty('--tx3', `${Math.cos(angle) * radius * 3}px`);
                particle.style.setProperty('--ty3', `${Math.sin(angle) * radius * 3}px`);
                
                particle.style.left = '50%';
                particle.style.top = '50%';
                
                nameContainer.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    particle.remove();
                }, 6000);
            }, i * 100);
        }
    });
}

// Scroll Animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all project cards
    const projectCards = document.querySelectorAll('.project-card-premium');
    projectCards.forEach(card => {
        card.classList.add('animate-on-scroll');
        observer.observe(card);
    });

    // Observe tech stack icons
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.classList.add('animate-on-scroll');
        observer.observe(icon);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core features
    initSmoothScroll();
    initRevealAnimations();
    initSimpleParticles();
    
    // Initialize animated name effects
    initAnimatedName();
    initNameInteractions();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Fallback: Direct animation if the above doesn't work
    setTimeout(() => {
        const nameElement = document.getElementById('animatedName');
        if (nameElement && nameElement.children.length === 0) {
            console.log('Applying fallback animation');
            nameElement.style.animation = 'namePulse 2s ease-in-out infinite';
        }
    }, 1000);
    
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCaseStudy();
    }
});

// Close modal on background click
document.addEventListener('click', (e) => {
    if (e.target.id === 'caseStudyModal') {
        closeCaseStudy();
    }
    if (e.target.id === 'systemArchitectureModal') {
        closeSystemArchitecture();
    }
});

// System Architecture Modal Functions
function openSystemArchitecture(projectId) {
    const modal = document.getElementById('systemArchitectureModal');
    const content = document.getElementById('systemArchitectureContent');
    
    if (!modal || !content) return;
    
    // System Architecture data
    const architectures = {
        'smart-campus': {
            title: 'Smart Campus Hub - System Architecture',
            security: `
                <h2 class="text-2xl font-bold text-white mb-6">Backend Security Practices</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-shield-alt text-green-400 text-xl"></i>
                            <h3 class="text-white font-semibold">Prepared Statements</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">All database queries use prepared statements to prevent SQL injection attacks.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-green-400 font-mono">
                            $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
                            $stmt->execute([$email]);
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-lock text-blue-400 text-xl"></i>
                            <h3 class="text-white font-semibold">XSS Protection</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">All user inputs are sanitized and output is escaped to prevent XSS attacks.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-blue-400 font-mono">
                            echo htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-key text-yellow-400 text-xl"></i>
                            <h3 class="text-white font-semibold">Password Security</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Passwords are hashed using bcrypt with salt for secure storage.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-yellow-400 font-mono">
                            password_hash($password, PASSWORD_BCRYPT);
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-user-shield text-purple-400 text-xl"></i>
                            <h3 class="text-white font-semibold">Session Management</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Secure session handling with regeneration and timeout protection.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-purple-400 font-mono">
                            session_regenerate_id(true);
                        </div>
                    </div>
                </div>
            `,
            architecture: `
                <h2 class="text-2xl font-bold text-white mb-6">System Architecture</h2>
                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                                <i class="fas fa-server text-accent-purple text-sm"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">Backend Layer</h3>
                                <p class="text-gray-400 text-sm">PHP 8.x with MySQL database</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                                <i class="fas fa-shield-alt text-accent-purple text-sm"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">Security Layer</h3>
                                <p class="text-gray-400 text-sm">Input validation, XSS protection, CSRF tokens</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                                <i class="fas fa-database text-accent-purple text-sm"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">Data Layer</h3>
                                <p class="text-gray-400 text-sm">Normalized database with foreign key constraints</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                                <i class="fas fa-code text-accent-purple text-sm"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">Frontend Layer</h3>
                                <p class="text-gray-400 text-sm">Responsive HTML5, CSS3, JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'student-management': {
            title: 'Student Management System - System Architecture',
            security: `
                <h2 class="text-2xl font-bold text-white mb-6">Backend Security Practices</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-shield-alt text-green-400 text-xl"></i>
                            <h3 class="text-white font-semibold">Input Validation</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">All form inputs are validated server-side before processing.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-green-400 font-mono">
                            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                                throw new Exception('Invalid email');
                            }
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-lock text-blue-400 text-xl"></i>
                            <h3 class="text-white font-semibold">Role-Based Access</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Different access levels for students, faculty, and administrators.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-blue-400 font-mono">
                            if ($_SESSION['role'] !== 'admin') {
                                header('HTTP/1.0 403 Forbidden');
                            }
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-key text-yellow-400 text-xl"></i>
                            <h3 class="text-white font-semibold">CSRF Protection</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Cross-Site Request Forgery tokens for form submissions.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-yellow-400 font-mono">
                            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-user-shield text-purple-400 text-xl"></i>
                            <h3 class="text-white font-semibold">Data Encryption</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Sensitive data encrypted before database storage.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-purple-400 font-mono">
                            $encrypted = openssl_encrypt($data, 'AES-256-CBC', $key);
                        </div>
                    </div>
                </div>
            `,
            architecture: `
                <h2 class="text-2xl font-bold text-white mb-6">System Architecture</h2>
                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                                <i class="fas fa-graduation-cap text-accent-purple text-sm"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">Academic Module</h3>
                                <p class="text-gray-400 text-sm">Course management, grades, attendance tracking</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                                <i class="fas fa-users text-accent-purple text-sm"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">Student Module</h3>
                                <p class="text-gray-400 text-sm">Registration, records, profile management</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                                <i class="fas fa-chart-bar text-accent-purple text-sm"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">Reporting Module</h3>
                                <p class="text-gray-400 text-sm">Analytics, reports, data visualization</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        'shoes-hub': {
            title: 'SHOES_HUB - System Architecture',
            security: `
                <h2 class="text-2xl font-bold text-white mb-6">Backend Security Practices</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-credit-card text-green-400 text-xl"></i>
                            <h3 class="text-white font-semibold">Payment Security</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Stripe API integration with secure payment processing.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-green-400 font-mono">
                            $stripe->paymentIntents->create([
                                'amount' => $amount,
                                'currency' => 'usd'
                            ]);
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-shopping-cart text-blue-400 text-xl"></i>
                            <h3 class="text-white font-semibold">Cart Security</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Session-based cart with server-side validation.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-blue-400 font-mono">
                            $_SESSION['cart'] = serialize($cartItems);
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-box text-yellow-400 text-xl"></i>
                            <h3 class="text-white font-semibold">Inventory Protection</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Stock validation and atomic transactions.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-yellow-400 font-mono">
                            BEGIN TRANSACTION;
                            UPDATE products SET stock = stock - 1;
                        </div>
                    </div>
                    
                    <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <div class="flex items-center space-x-3 mb-4">
                            <i class="fas fa-user-shield text-purple-400 text-xl"></i>
                            <h3 class="text-white font-semibold">API Rate Limiting</h3>
                        </div>
                        <p class="text-gray-300 text-sm mb-3">Rate limiting to prevent abuse and attacks.</p>
                        <div class="bg-gray-900 p-3 rounded text-xs text-purple-400 font-mono">
                            $rateLimiter->check($clientIP, 100, 3600);
                        </div>
                    </div>
                </div>
            `,
            architecture: `
                <h2 class="text-2xl font-bold text-white mb-6">System Architecture</h2>
                <div class="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                                <i class="fas fa-store text-accent-purple text-sm"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">Product Catalog</h3>
                                <p class="text-gray-400 text-sm">Inventory management, product listings</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                                <i class="fas fa-shopping-bag text-accent-purple text-sm"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">Order Processing</h3>
                                <p class="text-gray-400 text-sm">Cart management, checkout flow</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="w-8 h-8 bg-accent-purple/20 rounded-lg flex items-center justify-center">
                                <i class="fas fa-credit-card text-accent-purple text-sm"></i>
                            </div>
                            <div>
                                <h3 class="text-white font-medium">Payment Gateway</h3>
                                <p class="text-gray-400 text-sm">Stripe integration, transaction handling</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    };
    
    const architecture = architectures[projectId];
    if (!architecture) return;
    
    // Populate content
    content.innerHTML = `
        <div class="space-y-8">
            <div>
                <h1 class="text-4xl font-bold text-white mb-2">${architecture.title}</h1>
            </div>
            
            ${architecture.security}
            ${architecture.architecture}
            
            <div class="flex justify-center">
                <a href="${caseStudies[projectId]?.demoUrl || '#'}" target="_blank" class="bg-accent-purple hover:bg-accent-purple-dark text-white px-8 py-3 rounded-lg font-inter font-medium transition-colors duration-300">
                    View Live Demo
                </a>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeSystemArchitecture() {
    const modal = document.getElementById('systemArchitectureModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Toast Notification Function
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    
    // Update toast color based on type
    const toastDiv = toast.querySelector('div');
    if (type === 'success') {
        toastDiv.className = 'bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3';
    } else if (type === 'error') {
        toastDiv.className = 'bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3';
    } else if (type === 'info') {
        toastDiv.className = 'bg-blue-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3';
    }
    
    // Show toast
    toast.classList.remove('translate-x-full');
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.add('translate-x-full');
    }, 3000);
}
