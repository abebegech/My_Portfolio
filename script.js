const roles = [
    "Web Developer",
    "PHP & MySQL Developer",
    "Transport Tracking Website Developer",
    "Problem Solver"
];
let i = 0, j = 0;
let current = "";
let deleting = false;

function type() {
    current = roles[i];

    if (deleting) {
        document.getElementById("typing").textContent =
        current.substring(0, j--);
    } else {
        document.getElementById("typing").textContent =
        current.substring(0, j++);
    }

    if (!deleting && j === current.length) {
        deleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
    }

    setTimeout(type, deleting ? 50 : 100);
}

type();

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
    
    // Hero parallax
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Particle background animation
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(56, 189, 248, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

createParticles();

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
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
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    scrollObserver.observe(section);
});

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  const el = project.querySelector('.typing');
  const text = project.dataset.text;
  const speed = parseInt(project.dataset.speed);

  let index = 0;
  let deleting = false;

  const type = () => {
    if (!deleting) {
      el.textContent = text.slice(0, index + 1);
      index++;
      if (index === text.length) {
        deleting = true;
        setTimeout(type, 1000); // pause before deleting
        return;
      }
    } else {
      el.textContent = text.slice(0, index - 1);
      index--;
      if (index === 0) {
        deleting = false;
        setTimeout(type, 500); // pause before typing again
        return;
      }
    }
    setTimeout(type, speed);
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        type();
        observer.unobserve(project); // run only once per project
      }
    });
  }, { threshold: 0.5 });

  observer.observe(project);
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Mouse move effect for hero section
document.querySelector('.hero').addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (clientX - centerX) / 50;
    const moveY = (clientY - centerY) / 50;
    
    const heroImg = document.querySelector('.hero-img img');
    if (heroImg) {
        heroImg.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    }
});

document.querySelector('.hero').addEventListener('mouseleave', () => {
    const heroImg = document.querySelector('.hero-img img');
    if (heroImg) {
        heroImg.style.transform = 'translate(0, 0) scale(1.05)';
    }
});

// PRO-LEVEL PORTFOLIO JAVASCRIPT

// Case Study Modal Functions
function openCaseStudy(projectId) {
    const modal = document.getElementById('caseStudyModal');
    const content = document.getElementById('caseStudyContent');
    
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
            tech: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3']
        }
    };
    
    const caseStudy = caseStudies[projectId];
    if (!caseStudy) return;
    
    // Populate content
    content.innerHTML = `
        <div class="space-y-8">
            <div>
                <h1 class="text-4xl font-bold text-white mb-2">${caseStudy.title}</h1>
                <p class="text-gray-400 text-lg">${caseStudy.subtitle}</p>
            </div>
            
            <div class="bg-gray-800 p-8 rounded-lg">
                ${caseStudy.problem}
            </div>
            
            <div class="bg-gray-800 p-8 rounded-lg">
                ${caseStudy.solution}
            </div>
            
            <div class="bg-gray-800 p-8 rounded-lg">
                <h2 class="text-2xl font-bold text-white mb-4">Technologies Used</h2>
                <div class="flex flex-wrap gap-3">
                    ${caseStudy.tech.map(tech => `
                        <span class="px-4 py-2 bg-accent-purple/20 text-accent-purple rounded-full font-inter font-medium">${tech}</span>
                    `).join('')}
                </div>
            </div>
            
            <div class="flex justify-center">
                <a href="http://localhost/student-system/" target="_blank" class="bg-accent-purple hover:bg-accent-purple-dark text-white px-8 py-3 rounded-lg font-inter font-medium transition-colors duration-300">
                    View Live Demo
                </a>
            </div>
        </div>
    `;
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeCaseStudy() {
    const modal = document.getElementById('caseStudyModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
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

// Animated Counter
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Project Filter System
function initProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.bento-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    // Check if project has the filter category
                    const categories = card.getAttribute('data-categories') || '';
                    if (categories.includes(filter)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// Coding Playground
function initCodingPlayground() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const editorPanes = document.querySelectorAll('.editor-pane');
    const runBtn = document.getElementById('runCode');
    const preview = document.getElementById('preview');
    
    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            
            // Update button states
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update pane visibility
            editorPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.getAttribute('data-pane') === tab) {
                    pane.classList.add('active');
                }
            });
        });
    });
    
    // Run code functionality
    if (runBtn && preview) {
        runBtn.addEventListener('click', () => {
            const htmlCode = document.getElementById('htmlCode').value;
            const cssCode = document.getElementById('cssCode').value;
            const jsCode = document.getElementById('jsCode').value;
            
            // Create complete HTML document
            const fullCode = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>${cssCode}</style>
                </head>
                <body>
                    ${htmlCode}
                    <script>
                        try {
                            ${jsCode}
                        } catch(error) {
                            console.error('JavaScript error:', error);
                        }
                    <\/script>
                </body>
                </html>
            `;
            
            // Update preview
            preview.srcdoc = fullCode;
            
            // Visual feedback
            runBtn.innerHTML = '<i class="fas fa-check"></i> Code Executed';
            runBtn.style.background = 'var(--gradient-accent)';
            
            setTimeout(() => {
                runBtn.innerHTML = '<i class="fas fa-play"></i> Run Code';
                runBtn.style.background = '';
            }, 2000);
        });
    }
    
    // Auto-run on page load
    if (runBtn && preview) {
        setTimeout(() => runBtn.click(), 500);
    }
}

// Advanced Tech Stack Interactions
function initTechStack() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('click', () => {
            const tech = item.getAttribute('data-tech');
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'tech-ripple';
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(59, 130, 246, 0.3);
                transform: translate(-50%, -50%);
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            `;
            
            item.style.position = 'relative';
            item.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
            
            // Show tech details (could be expanded to show modal)
            console.log(`Selected technology: ${tech}`);
        });
    });
}

// Performance Metrics Animation
function initPerformanceMetrics() {
    const metricCards = document.querySelectorAll('.metric-card');
    
    metricCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(card);
    });
}

// Advanced Loading Screen with Performance Metrics
function createAdvancedLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'advanced-loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-container">
            <div class="loading-logo">
                <img src="image/ab11.jpg" alt="Abebe Getachew">
                <div class="loading-spinner"></div>
            </div>
            <div class="loading-content">
                <div class="loading-title">Full Stack Web Developer</div>
                <div class="loading-subtitle">Crafting digital experiences with passion</div>
                <div class="loading-progress">
                    <div class="progress-bar">
                        <div class="progress-fill"></div>
                    </div>
                    <div class="progress-text">Loading amazing experiences...</div>
                </div>
            </div>
            <div class="loading-tech">
                <span>PHP</span>
                <span>MySQL</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Vue.js</span>
            </div>
        </div>
    `;
    
    // Add advanced loading styles
    const style = document.createElement('style');
    style.textContent = `
        .advanced-loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0f172a, #020617, #1e293b);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.8s ease;
        }
        
        .loading-container {
            text-align: center;
            max-width: 500px;
        }
        
        .loading-logo {
            position: relative;
            margin-bottom: 2rem;
        }
        
        .loading-logo img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 4px solid var(--gradient-primary);
            animation: logoSpin 3s linear infinite;
        }
        
        @keyframes logoSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .loading-spinner {
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            border: 3px solid transparent;
            border-top: 3px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        .loading-title {
            font-size: 2rem;
            font-weight: 700;
            background: var(--gradient-primary);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.5rem;
        }
        
        .loading-subtitle {
            color: var(--text-secondary);
            margin-bottom: 2rem;
        }
        
        .progress-bar {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin-bottom: 1rem;
        }
        
        .progress-fill {
            height: 100%;
            background: var(--gradient-primary);
            width: 0;
            animation: progressFill 2s ease-out forwards;
        }
        
        @keyframes progressFill {
            to { width: 100%; }
        }
        
        .progress-text {
            color: var(--text-secondary);
            font-size: 0.875rem;
        }
        
        .loading-tech {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
            flex-wrap: wrap;
        }
        
        .loading-tech span {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border: 1px solid var(--border-color);
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-size: 0.75rem;
            color: var(--primary-color);
            font-weight: 600;
            animation: techFade 2s ease-in-out infinite;
        }
        
        .loading-tech span:nth-child(2) { animation-delay: 0.2s; }
        .loading-tech span:nth-child(3) { animation-delay: 0.4s; }
        .loading-tech span:nth-child(4) { animation-delay: 0.6s; }
        .loading-tech span:nth-child(5) { animation-delay: 0.8s; }
        
        @keyframes techFade {
            0%, 100% { opacity: 0.5; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(-2px); }
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(loadingScreen);
    
    return loadingScreen;
}

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Case Study Navigation
function initCaseStudyNavigation() {
    const caseStudyLinks = document.querySelectorAll('a[href^="#case-study-"]');
    const backLinks = document.querySelectorAll('.back-link');
    const caseStudies = document.querySelectorAll('.case-study');
    const mainSections = document.querySelectorAll('section:not(.case-study)');
    
    caseStudyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showCaseStudy(targetId);
        });
    });
    
    backLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            hideCaseStudy();
        });
    });
    
    function showCaseStudy(caseStudyId) {
        const targetCaseStudy = document.getElementById(caseStudyId);
        if (targetCaseStudy) {
            // Hide main sections
            mainSections.forEach(section => {
                section.classList.add('hidden');
            });
            
            // Show target case study
            targetCaseStudy.classList.remove('hidden');
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Add entrance animation
            targetCaseStudy.style.opacity = '0';
            targetCaseStudy.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                targetCaseStudy.style.transition = 'all 0.6s ease';
                targetCaseStudy.style.opacity = '1';
                targetCaseStudy.style.transform = 'translateY(0)';
            }, 100);
        }
    }
    
    function hideCaseStudy() {
        // Hide all case studies
        caseStudies.forEach(caseStudy => {
            caseStudy.classList.add('hidden');
        });
        
        // Show main sections
        mainSections.forEach(section => {
            section.classList.remove('hidden');
        });
        
        // Smooth scroll to projects section
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Glassmorphism Form Interactions
function initContactForm() {
    const form = document.querySelector('.glassmorphism-form');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Add floating label effect
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        input.addEventListener('input', () => {
            if (input.value) {
                input.parentElement.classList.add('has-value');
            } else {
                input.parentElement.classList.remove('has-value');
            }
        });
    });
    
    // Form submission
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Validate form
            const isValid = validateForm(inputs);
            
            if (isValid) {
                // Show loading state
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                    submitBtn.style.background = 'var(--gradient-accent)';
                    
                    // Reset form after success
                    setTimeout(() => {
                        form.reset();
                        submitBtn.innerHTML = 'Send Message';
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                        
                        // Remove focused states
                        inputs.forEach(input => {
                            input.parentElement.classList.remove('focused', 'has-value');
                        });
                    }, 2000);
                }, 1500);
            }
        });
    }
    
    function validateForm(inputs) {
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                
                // Add error state
                input.parentElement.classList.add('error');
                input.style.borderColor = 'var(--error-color, #ef4444)';
                
                // Remove error after 3 seconds
                setTimeout(() => {
                    input.parentElement.classList.remove('error');
                    input.style.borderColor = '';
                }, 3000);
            }
        });
        
        return isValid;
    }
}

// Enhanced Project Card Interactions
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add tilt effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Enhanced Animations for Pro Design
function initProAnimations() {
    // Animate hero elements on load
    const heroElements = document.querySelectorAll('.hero-name, .hero-title, .hero-description');
    
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300 * (index + 1));
    });
    
    // Animate floating cards
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 1000 + (200 * index));
    });
    
    // Animate project cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const bentoItems = document.querySelectorAll('.bento-item');
    
    bentoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.8s ease';
        
        scrollObserver.observe(item);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize pro-level features
    initSmoothScroll();
    initRevealAnimations();
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
});

// Close modal on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCaseStudy();
    }
});

// Close modal on background click
document.getElementById('caseStudyModal').addEventListener('click', (e) => {
    if (e.target.id === 'caseStudyModal') {
        closeCaseStudy();
    }
});

// Re-initialize on page load (for navigation)
window.addEventListener('load', () => {
    initProAnimations();
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
} else {
    // Default to dark mode
    html.setAttribute('data-theme', 'dark');
}

// Apply initial theme
applyTheme();

function applyTheme() {
    const currentTheme = html.getAttribute('data-theme');
    console.log('Current theme:', currentTheme);
    
    // Add smooth transition
    document.body.style.transition = 'background 0.5s ease, color 0.5s ease';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    console.log('Switching from', currentTheme, 'to', newTheme);
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Apply theme changes
    applyTheme();
    
    // Add visual feedback
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 100);
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        html.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        applyTheme();
    }
});

// Enhanced Loading Screen
function createLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'pro-loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-container">
            <div class="loading-logo">
                <img src="image/ab11.jpg" alt="Abebe Getachew">
            </div>
            <div class="loading-spinner"></div>
            <div class="loading-text">Building amazing experiences...</div>
        </div>
    `;
    
    // Add loading screen styles
    const style = document.createElement('style');
    style.textContent = `
        .pro-loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--dark-bg);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }
        
        .loading-container {
            text-align: center;
        }
        
        .loading-logo img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 3px solid var(--gradient-primary);
            margin-bottom: 2rem;
            animation: logoPulse 2s ease-in-out infinite;
        }
        
        @keyframes logoPulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        .loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(59, 130, 246, 0.2);
            border-top: 3px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1.5rem;
        }
        
        .loading-text {
            color: var(--text-secondary);
            font-size: 1.1rem;
            font-weight: 500;
            animation: textFade 2s ease-in-out infinite;
        }
        
        @keyframes textFade {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(loadingScreen);
    
    return loadingScreen;
}

// Create and manage advanced loading screen
const loadingScreen = createAdvancedLoadingScreen();

// Remove loading screen when page is loaded
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 800);
    }, 2000);
});
