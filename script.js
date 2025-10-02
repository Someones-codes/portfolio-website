   // Initialize animations when page loads
        document.addEventListener('DOMContentLoaded', function() {
            // Function to handle scroll animations
            function animateOnScroll() {
                const elements = document.querySelectorAll('.reveal');
                elements.forEach(el => {
                    const elementTop = el.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 50) {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    }
                });
            }
            
            // Initial check on page load
            animateOnScroll();
            
            // Check on scroll
            window.addEventListener('scroll', animateOnScroll);
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Mobile menu toggle
            const mobileToggle = document.querySelector('.mobile-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            mobileToggle.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.style.padding = '0.8rem 0';
                    navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.padding = '1.2rem 0';
                    navbar.style.boxShadow = 'none';
                }
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        navLinks.style.display = 'none';
                    }
                });
            });
        });
