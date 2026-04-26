<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transport Tracking System - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .tech-badge {
            background: rgba(99, 102, 234, 0.1);
            border: 1px solid rgba(99, 102, 234, 0.3);
        }
        .feature-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
    </style>
</head>
<body class="bg-gray-900 text-white">
    <!-- Navigation -->
    <nav class="bg-gray-800 border-b border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <a href="../index.html" class="text-2xl font-bold text-white">Portfolio</a>
                </div>
                <div class="flex space-x-4">
                    <a href="../index.html" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                    <a href="../projects.html" class="text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                    <a href="../about.html" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                    <a href="../contact.html" class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <div class="gradient-bg py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center">
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Transport Tracking System</h1>
                <p class="text-xl text-gray-200 mb-8">Comprehensive Campus Transport Management Solution</p>
                <div class="flex justify-center space-x-4">
                    <a href="http://localhost/TransportTracking/final_working_system.php" target="_blank" class="px-6 py-3 bg-white text-purple-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        <i data-lucide="external-link" class="w-4 h-4 inline mr-2"></i>
                        Live Demo
                    </a>
                    <a href="#features" class="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
                        View Features
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Project Overview -->
    <div class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl font-bold text-white mb-6">Project Overview</h2>
                    <p class="text-gray-300 mb-6">
                        The Transport Tracking System is a comprehensive campus transport management solution designed to streamline 
                        university transportation services. It features real-time vehicle tracking, digital permit management, 
                        and role-based access control with a unified sidebar architecture.
                    </p>
                    <p class="text-gray-300 mb-6">
                        The system provides different interfaces for students, drivers, and administrators, each with 
                        tailored functionality to meet their specific needs while maintaining a consistent user experience 
                        across all platforms.
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <span class="tech-badge px-3 py-1 rounded-full text-sm">PHP</span>
                        <span class="tech-badge px-3 py-1 rounded-full text-sm">MySQL</span>
                        <span class="tech-badge px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                        <span class="tech-badge px-3 py-1 rounded-full text-sm">Leaflet.js</span>
                        <span class="tech-badge px-3 py-1 rounded-full text-sm">FPDF</span>
                        <span class="tech-badge px-3 py-1 rounded-full text-sm">JavaScript</span>
                    </div>
                </div>
                <div class="bg-gray-800 rounded-xl p-8 border border-gray-700">
                    <h3 class="text-xl font-semibold mb-4">Key Statistics</h3>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-blue-400">3</div>
                            <div class="text-gray-400">User Roles</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-green-400">6</div>
                            <div class="text-gray-400">Core Modules</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-purple-400">100%</div>
                            <div class="text-gray-400">Responsive</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-yellow-400">24/7</div>
                            <div class="text-gray-400">Live Tracking</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Features Section -->
    <div id="features" class="py-16 bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="feature-card rounded-xl p-6 border border-gray-700">
                    <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="shield" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Role-Based Access Control</h3>
                    <p class="text-gray-300">
                        Centralized authentication system with role-based permissions for students, drivers, and administrators.
                    </p>
                </div>

                <div class="feature-card rounded-xl p-6 border border-gray-700">
                    <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="map-pin" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Real-Time Tracking</h3>
                    <p class="text-gray-300">
                        Live vehicle tracking with Leaflet.js integration, updating every 5 seconds with GPS coordinates.
                    </p>
                </div>

                <div class="feature-card rounded-xl p-6 border border-gray-700">
                    <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="credit-card" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Permit Management</h3>
                    <p class="text-gray-300">
                        Complete permit system with PDF generation, QR codes, and verification functionality using FPDF library.
                    </p>
                </div>

                <div class="feature-card rounded-xl p-6 border border-gray-700">
                    <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="radio" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">GPS Broadcasting</h3>
                    <p class="text-gray-300">
                        Driver portal with GPS broadcasting capabilities using navigator.geolocation API for real-time location tracking.
                    </p>
                </div>

                <div class="feature-card rounded-xl p-6 border border-gray-700">
                    <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="layout-dashboard" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">Unified Dashboard</h3>
                    <p class="text-gray-300">
                        Fixed sidebar layout with dynamic content loading and bus capacity progress bars for visual monitoring.
                    </p>
                </div>

                <div class="feature-card rounded-xl p-6 border border-gray-700">
                    <div class="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="database" class="w-6 h-6 text-white"></i>
                    </div>
                    <h3 class="text-xl font-semibold mb-3">System Administration</h3>
                    <p class="text-gray-300">
                        Complete admin panel with user management, system settings, and database management tools.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Technical Implementation -->
    <div class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-white text-center mb-12">Technical Implementation</h2>
            <div class="grid lg:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-xl font-semibold mb-6">Frontend Technologies</h3>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <i data-lucide="code" class="w-5 h-5 text-blue-400"></i>
                            <div>
                                <h4 class="font-medium">HTML5 & CSS3</h4>
                                <p class="text-gray-400 text-sm">Semantic markup with Tailwind CSS for styling</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i data-lucide="zap" class="w-5 h-5 text-yellow-400"></i>
                            <div>
                                <h4 class="font-medium">JavaScript</h4>
                                <p class="text-gray-400 text-sm">Real-time updates, GPS tracking, and dynamic UI</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i data-lucide="map" class="w-5 h-5 text-green-400"></i>
                            <div>
                                <h4 class="font-medium">Leaflet.js</h4>
                                <p class="text-gray-400 text-sm">Interactive maps for vehicle tracking</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i data-lucide="grid" class="w-5 h-5 text-purple-400"></i>
                            <div>
                                <h4 class="font-medium">Lucide Icons</h4>
                                <p class="text-gray-400 text-sm">Modern icon library for UI consistency</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-6">Backend Technologies</h3>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <i data-lucide="server" class="w-5 h-5 text-red-400"></i>
                            <div>
                                <h4 class="font-medium">PHP 8+</h4>
                                <p class="text-gray-400 text-sm">Server-side logic and session management</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i data-lucide="database" class="w-5 h-5 text-blue-400"></i>
                            <div>
                                <h4 class="font-medium">MySQL</h4>
                                <p class="text-gray-400 text-sm">Database for user data and tracking information</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i data-lucide="file-text" class="w-5 h-5 text-green-400"></i>
                            <div>
                                <h4 class="font-medium">FPDF Library</h4>
                                <p class="text-gray-400 text-sm">PDF generation for permits and documentation</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i data-lucide="shield-check" class="w-5 h-5 text-yellow-400"></i>
                            <div>
                                <h4 class="font-medium">Session Security</h4>
                                <p class="text-gray-400 text-sm">Secure authentication and role-based access</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Demo Accounts -->
    <div class="py-16 bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-white text-center mb-12">Try the Demo</h2>
            <div class="bg-gray-900 rounded-xl p-8 border border-gray-700">
                <p class="text-gray-300 mb-6 text-center">
                    Experience the Transport Tracking System with these demo accounts:
                </p>
                <div class="grid md:grid-cols-3 gap-6">
                    <div class="bg-gray-800 rounded-lg p-6 text-center">
                        <div class="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="shield" class="w-8 h-8 text-white"></i>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Administrator</h3>
                        <p class="text-gray-400 mb-4">Full system access</p>
                        <div class="text-sm text-gray-300">
                            <p>Email: admin@campus.com</p>
                            <p>Password: admin123</p>
                        </div>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-6 text-center">
                        <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="user" class="w-8 h-8 text-white"></i>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Student</h3>
                        <p class="text-gray-400 mb-4">Permits & Tracking</p>
                        <div class="text-sm text-gray-300">
                            <p>Email: student@campus.com</p>
                            <p>Password: student123</p>
                        </div>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-6 text-center">
                        <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="bus" class="w-8 h-8 text-white"></i>
                        </div>
                        <h3 class="text-lg font-semibold mb-2">Driver</h3>
                        <p class="text-gray-400 mb-4">GPS Broadcasting</p>
                        <div class="text-sm text-gray-300">
                            <p>Email: driver@campus.com</p>
                            <p>Password: driver123</p>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-8">
                    <a href="http://localhost/TransportTracking/final_working_system.php" target="_blank" class="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        <i data-lucide="external-link" class="w-4 h-4 inline mr-2"></i>
                        Launch Live Demo
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900 border-t border-gray-800 py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-gray-400">© 2024 Transport Tracking System. All rights reserved.</p>
                </div>
                <div class="flex space-x-6">
                    <a href="https://github.com" target="_blank" class="text-gray-400 hover:text-white">
                        <i data-lucide="github" class="w-5 h-5"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-white">
                        <i data-lucide="linkedin" class="w-5 h-5"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" class="text-gray-400 hover:text-white">
                        <i data-lucide="twitter" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        lucide.createIcons();
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>
