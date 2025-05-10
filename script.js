// Loading Screen Animation
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
    
    // Navbar Menu Toggle for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Navbar Active State on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                    if (navLink.getAttribute('href') === `#${sectionId}`) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Schedule Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const daySchedules = document.querySelectorAll('.day-schedule');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const day = btn.getAttribute('data-day');
            
            // Remove active class from all buttons and schedules
            tabBtns.forEach(btn => btn.classList.remove('active'));
            daySchedules.forEach(schedule => schedule.classList.remove('active'));
            
            // Add active class to selected button and schedule
            btn.classList.add('active');
            document.getElementById(day).classList.add('active');
        });
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Interest Form Submission
    const interestForm = document.getElementById('interestForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (interestForm) {
        interestForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form fields
            const teamName = document.getElementById('teamName').value;
            const leaderName = document.getElementById('leaderName').value;
            const leaderEmail = document.getElementById('leaderEmail').value;
            const memberCount = document.getElementById('memberCount').value;
            const track = document.getElementById('track').value;
            
            if (!teamName || !leaderName || !leaderEmail || !memberCount || !track) {
                alert('Please fill all required fields');
                return;
            }
            
            // Form validation passed
            // In a real implementation, this would send data to a server
            // For demo purposes, just show success message
            interestForm.style.display = 'none';
            formSuccess.style.display = 'flex';
            
            // Clear form fields
            interestForm.reset();
            
            // Log form data (for demo purposes)
            console.log({
                teamName,
                leaderName,
                leaderEmail,
                memberCount,
                track
            });
        });
    }
    
    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.track-card, .about-text, .about-image, .criteria-item, .prize-card, .timeline-item, .jury-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Initial animation check
    animateOnScroll();
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            // In a real implementation, this would send the email to a server
            // For demo purposes, just show an alert
            alert('Thank you for subscribing to our newsletter!');
            
            // Clear input
            emailInput.value = '';
        });
    }
    
    // FAQ Accordion (if added later)
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Check if the answer is already expanded
            const isExpanded = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';
            
            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.style.maxHeight = '0px';
                item.previousElementSibling.classList.remove('active');
            });
            
            // Open the clicked answer if it wasn't already expanded
            if (!isExpanded) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.classList.add('active');
            }
        });
    });
    
    // Countdown timer (if needed)
    function updateCountdown() {
        // Set the date of the event
        const eventDate = new Date('Gravitas 2025').getTime(); // Replace with actual event date
        const now = new Date().getTime();
        
        // Find the distance between now and the event date
        const distance = eventDate - now;
        
        // If the countdown element exists
        const countdownElement = document.getElementById('countdown');
        
        if (countdownElement && distance > 0) {
            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result
            countdownElement.innerHTML = `
                <div class="countdown-item">
                    <span class="countdown-number">${days}</span>
                    <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${hours}</span>
                    <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${minutes}</span>
                    <span class="countdown-label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span class="countdown-number">${seconds}</span>
                    <span class="countdown-label">Seconds</span>
                </div>
            `;
        }
    }
    
    // Update the countdown every 1 second if the countdown element exists
    if (document.getElementById('countdown')) {
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call
    }
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        if (heroSection) {
            // Adjust the background position based on scroll
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
        }
    });
    
    // Handle registration form validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
    
    const leaderEmailInput = document.getElementById('leaderEmail');
    
    if (leaderEmailInput) {
        leaderEmailInput.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.classList.add('error');
                alert('Please enter a valid email address');
            } else {
                this.classList.remove('error');
            }
        });
    }
});