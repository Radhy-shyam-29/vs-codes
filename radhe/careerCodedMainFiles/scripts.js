 // Enhanced JavaScript for advanced functionality
      document.addEventListener("DOMContentLoaded", function () {
        // Header scroll effect
        const header = document.getElementById("header");
        window.addEventListener("scroll", function () {
          if (window.scrollY > 50) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        });

        // Back to top button
        const backToTopButton = document.querySelector(".back-to-top");
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            backToTopButton.classList.add("visible");
          } else {
            backToTopButton.classList.remove("visible");
          }
        });

        backToTopButton.addEventListener("click", (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // Text Slider
        const sliderTexts = document.querySelectorAll(".slider-text");
        let currentSlide = 0;

        function showNextSlide() {
          sliderTexts[currentSlide].classList.remove("active");
          sliderTexts[currentSlide].classList.add("prev");

          currentSlide = (currentSlide + 1) % sliderTexts.length;

          sliderTexts[currentSlide].classList.remove("prev");
          sliderTexts[currentSlide].classList.add("active");
        }

        setInterval(showNextSlide, 4000);

        // Animate elements on scroll
        const animatedElements = document.querySelectorAll(
          ".feature-card, .course-card, .team-member, .stat-card, .feature-item"
        );

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
              }
            });
          },
          { threshold: 0.1 }
        );

        animatedElements.forEach((element) => {
          element.style.opacity = 0;
          element.style.transform = "translateY(50px)";
          element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          observer.observe(element);
        });

        // Marquee animation
        const marquee = document.querySelector(".marquee");
        marquee.innerHTML += marquee.innerHTML;

        // Course filtering
        const filterButtons = document.querySelectorAll(".filter-btn");
        const courseCards = document.querySelectorAll(".course-card");

        filterButtons.forEach((button) => {
          button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            courseCards.forEach((card) => {
              if (
                filterValue === "all" ||
                card.getAttribute("data-category") === filterValue
              ) {
                card.style.display = "block";
                setTimeout(() => {
                  card.style.opacity = 1;
                  card.style.transform = "translateY(0)";
                }, 10);
              } else {
                card.style.opacity = 0;
                card.style.transform = "translateY(20px)";
                setTimeout(() => {
                  card.style.display = "none";
                }, 500);
              }
            });
          });
        });

        // Modal management
        const modals = document.querySelectorAll(".modal");
        const closeModalButtons = document.querySelectorAll(".close-modal");

        // Function to open a modal
        function openModal(modalId) {
          modals.forEach((modal) => {
            if (modal.id === modalId) {
              modal.style.display = "flex";
              document.body.style.overflow = "hidden";
            }
          });
        }

        // Function to close all modals
        function closeAllModals() {
          modals.forEach((modal) => {
            modal.style.display = "none";
          });
          document.body.style.overflow = "auto";
        }

        // Close modal when clicking on close button
        closeModalButtons.forEach((button) => {
          button.addEventListener("click", closeAllModals);
        });

        // Close modal when clicking outside of modal content
        modals.forEach((modal) => {
          modal.addEventListener("click", (event) => {
            if (event.target === modal) {
              closeAllModals();
            }
          });
        });

        // Sidebar functionality
        const sidebar = document.querySelector(".sidebar");
        const sidebarOverlay = document.querySelector(".sidebar-overlay");
        const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
        const closeSidebarBtn = document.querySelector(".close-sidebar");

        function openSidebar() {
          sidebar.classList.add("active");
          sidebarOverlay.classList.add("active");
          document.body.style.overflow = "hidden";
        }

        function closeSidebar() {
          sidebar.classList.remove("active");
          sidebarOverlay.classList.remove("active");
          document.body.style.overflow = "auto";
        }

        mobileMenuBtn.addEventListener("click", openSidebar);
        closeSidebarBtn.addEventListener("click", closeSidebar);
        sidebarOverlay.addEventListener("click", closeSidebar);

        // Sidebar navigation links
        const sidebarLinks = document.querySelectorAll(".sidebar-links a");
        sidebarLinks.forEach((link) => {
          link.addEventListener("click", closeSidebar);
        });

        // Sidebar specific buttons
        document
          .getElementById("sidebarFreeTrial")
          .addEventListener("click", (e) => {
            e.preventDefault();
            closeSidebar();
            openModal("registerModal");
          });

        // Registration modal
        document
          .getElementById("freeTrialBtn")
          .addEventListener("click", (e) => {
            e.preventDefault();
            openModal("registerModal");
          });

        // Batch registration button
        document
          .getElementById("batchRegisterBtn")
          .addEventListener("click", (e) => {
            e.preventDefault();
            openModal("registerModal");
          });

        // Enrollment modal
        const enrollButtons = document.querySelectorAll(".enroll-btn");
        const courseNameSpan = document.getElementById("courseName");

        enrollButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const courseName = button.getAttribute("data-course");
            courseNameSpan.textContent = courseName;
            openModal("enrollmentModal");
          });
        });

        // Syllabus modal
        const syllabusButtons = document.querySelectorAll(".syllabus-btn");
        const syllabusCourseName =
          document.getElementById("syllabusCourseName");
        const syllabusContent = document.getElementById("syllabusContent");

        // Syllabus data for each course
        const syllabusData = {
          DSA: `
                    <div class="syllabus-module">
                        <h3>Module 1: Introduction to Data Structures</h3>
                        <ul>
                            <li>Arrays and Strings</li>
                            <li>Linked Lists</li>
                            <li>Stacks and Queues</li>
                            <li>Hash Tables</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 2: Trees and Graphs</h3>
                        <ul>
                            <li>Binary Trees</li>
                            <li>Binary Search Trees</li>
                            <li>AVL Trees</li>
                            <li>Graph Representations</li>
                            <li>Graph Traversal Algorithms</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 3: Sorting and Searching</h3>
                        <ul>
                            <li>Bubble, Selection, Insertion Sort</li>
                            <li>Merge Sort and Quick Sort</li>
                            <li>Heap Sort</li>
                            <li>Linear and Binary Search</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 4: Advanced Algorithms</h3>
                        <ul>
                            <li>Dynamic Programming</li>
                            <li>Greedy Algorithms</li>
                            <li>Backtracking</li>
                            <li>Complexity Analysis</li>
                        </ul>
                    </div>
                `,
          "Java Full Stack Development": `
                    <div class="syllabus-module">
                        <h3>Module 1: Core Java</h3>
                        <ul>
                            <li>Java Fundamentals</li>
                            <li>OOP Concepts</li>
                            <li>Exception Handling</li>
                            <li>Collections Framework</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 2: Database Management</h3>
                        <ul>
                            <li>SQL Fundamentals</li>
                            <li>MySQL Database</li>
                            <li>JDBC Connectivity</li>
                            <li>Database Design</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 3: Frontend Development</h3>
                        <ul>
                            <li>HTML5 & CSS3</li>
                            <li>JavaScript ES6+</li>
                            <li>Bootstrap Framework</li>
                            <li>React.js Fundamentals</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 4: Backend Development</h3>
                        <ul>
                            <li>Spring Framework</li>
                            <li>Spring Boot</li>
                            <li>RESTful Web Services</li>
                            <li>Microservices Architecture</li>
                        </ul>
                    </div>
                `,
          "MERN Full Stack Development": `
                    <div class="syllabus-module">
                        <h3>Module 1: Frontend Fundamentals</h3>
                        <ul>
                            <li>HTML5 & CSS3</li>
                            <li>JavaScript ES6+</li>
                            <li>React.js Fundamentals</li>
                            <li>State Management with Redux</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 2: Backend with Node.js</h3>
                        <ul>
                            <li>Node.js Fundamentals</li>
                            <li>Express.js Framework</li>
                            <li>RESTful API Development</li>
                            <li>Authentication & Authorization</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 3: Database with MongoDB</h3>
                        <ul>
                            <li>MongoDB Fundamentals</li>
                            <li>Data Modeling</li>
                            <li>Mongoose ODM</li>
                            <li>Database Operations</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 4: Advanced Concepts</h3>
                        <ul>
                            <li>Deployment Strategies</li>
                            <li>Performance Optimization</li>
                            <li>Testing Applications</li>
                            <li>Project Deployment</li>
                        </ul>
                    </div>
                `,
          "Data Analysis with Python": `
                    <div class="syllabus-module">
                        <h3>Module 1: Python Fundamentals</h3>
                        <ul>
                            <li>Python Basics</li>
                            <li>Data Structures in Python</li>
                            <li>Functions and Modules</li>
                            <li>File Handling</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 2: Data Manipulation</h3>
                        <ul>
                            <li>NumPy Fundamentals</li>
                            <li>Pandas DataFrames</li>
                            <li>Data Cleaning</li>
                            <li>Data Transformation</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 3: Data Visualization</h3>
                        <ul>
                            <li>Matplotlib</li>
                            <li>Seaborn</li>
                            <li>Plotly</li>
                            <li>Interactive Visualizations</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 4: Statistical Analysis</h3>
                        <ul>
                            <li>Descriptive Statistics</li>
                            <li>Inferential Statistics</li>
                            <li>Hypothesis Testing</li>
                            <li>Statistical Modeling</li>
                        </ul>
                    </div>
                `,
          "AI Data Science with Python": `
                    <div class="syllabus-module">
                        <h3>Module 1: Python for Data Science</h3>
                        <ul>
                            <li>Python Programming</li>
                            <li>NumPy and Pandas</li>
                            <li>Data Visualization</li>
                            <li>Statistical Analysis</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 2: Machine Learning</h3>
                        <ul>
                            <li>Supervised Learning</li>
                            <li>Unsupervised Learning</li>
                            <li>Model Evaluation</li>
                            <li>Feature Engineering</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 3: Deep Learning</h3>
                        <ul>
                            <li>Neural Networks</li>
                            <li>TensorFlow & Keras</li>
                            <li>Convolutional Neural Networks</li>
                            <li>Recurrent Neural Networks</li>
                        </ul>
                    </div>
                    <div class="syllabus-module">
                        <h3>Module 4: AI Applications</h3>
                        <ul>
                            <li>Natural Language Processing</li>
                            <li>Computer Vision</li>
                            <li>Reinforcement Learning</li>
                            <li>AI Project Development</li>
                        </ul>
                    </div>
                `,
        };
        syllabusButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const courseName = button.getAttribute("data-course");
            syllabusCourseName.textContent = courseName;

            // Set the syllabus content based on the course
            if (syllabusData[courseName]) {
              syllabusContent.innerHTML = syllabusData[courseName];
            } else {
              syllabusContent.innerHTML = `<p>Syllabus details for ${courseName} will be available soon.</p>`;
            }

            openModal("syllabusModal");
          });
        });

        // Form submissions
       // Notification System
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `form-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .form-notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                border-left: 4px solid #4CAF50;
                z-index: 10000;
                max-width: 400px;
                transform: translateX(400px);
                transition: transform 0.3s ease;
            }
            .form-notification.error {
                border-left-color: #f44336;
            }
            .form-notification.success {
                border-left-color: #4CAF50;
            }
            .notification-content {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .notification-content i {
                font-size: 1.2rem;
            }
            .notification-content i.fa-check-circle {
                color: #4CAF50;
            }
            .notification-content i.fa-exclamation-circle {
                color: #f44336;
            }
            .notification-close {
                background: none;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                margin-left: auto;
                color: #666;
            }
            .form-notification.show {
                transform: translateX(0);
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Enhanced Form Submission Function
async function submitForm(formData, formType) {
    try {
        // Show loading state
        const submitButton = document.querySelector('#registerForm button[type="submit"]') || 
                           document.querySelector('#enrollmentForm button[type="submit"]') ||
                           document.querySelector('#contactForm button[type="submit"]');
        
        if (submitButton) {
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            submitButton.disabled = true;
        }

        // Prepare data for Google Apps Script
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzGE0QYnikPpAkIJp1yw94ofhxEeaSnRw8yWytnrLAS3MWXM1fgXo8AkAuSZ23LfIEDog/exec';
        
        // Create URL with parameters for GET request
        const params = new URLSearchParams({
            'name': formData.name || '',
            'email': formData.email || '',
            'phone': formData.phone || '',
            'college': formData.institute || formData.college || '',
            'course': formData.course || '',
            'degree': formData.degree || '',
            'message': formData.message || '',
            'source': formType || 'Website Form',
            'timestamp': new Date().toISOString()
        });

        // Use GET request instead of POST
        const fullURL = `${scriptURL}?${params.toString()}`;
        
        const response = await fetch(fullURL, {
            method: 'GET',
            mode: 'no-cors'
        });

        // Reset button state
        if (submitButton) {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
        
        showNotification('Form submitted successfully! We will contact you soon.', 'success');
        return true;
        
    } catch (error) {
        console.error('Error:', error);
        
        // Reset button state
        const submitButton = document.querySelector('#registerForm button[type="submit"]') || 
                           document.querySelector('#enrollmentForm button[type="submit"]') ||
                           document.querySelector('#contactForm button[type="submit"]');
        if (submitButton) {
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
        
        showNotification('Form submitted! If you have any questions, please contact us directly.', 'success');
        return true;
    }
}

// Update your form submission handlers
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    const success = await submitForm(data, 'Registration');
    
    if (success) {
        // Get the selected course
        const selectedCourse = data.course;
        
        // Reset form
        e.target.reset();
        
        // Show coupon modal after successful registration
        showCouponModal(selectedCourse);
        
        // Close registration modal after delay
        setTimeout(() => {
            closeAllModals();
        }, 2000);
    }
});

document.getElementById("enrollmentForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.course = document.getElementById("courseName").textContent;
    
    const success = await submitForm(data, 'Enrollment');
    
    if (success) {
        // Get the selected course
        const selectedCourse = data.course;
        
        // Reset form
        e.target.reset();
        
        // Show coupon modal after successful enrollment
        showCouponModal(selectedCourse);
        
        // Close enrollment modal after delay
        setTimeout(() => {
            closeAllModals();
        }, 2000);
    }
});

document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    const success = await submitForm(data, 'Contact');
    
    if (success) {
        // Reset form
        e.target.reset();
        showNotification('Message sent successfully! We will get back to you soon.', 'success');
    }
});
        // CTA button
        document.getElementById("ctaBtn").addEventListener("click", (e) => {
          e.preventDefault();
          openModal("registerModal");
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: "smooth",
              });
            }
          });
        });

        // Announcement Card Functionality
        const announcementCard = document.querySelector(".announcement-card");
        const closeAnnouncementBtn = document.querySelector(
          ".close-announcement"
        );
        const announcementRegisterBtn = document.getElementById(
          "announcementRegisterBtn"
        );

        // Function to show announcement card
        function showAnnouncementCard() {
          // Random delay between 2-5 minutes (120000-300000 ms)
          const delay = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;

          setTimeout(() => {
            announcementCard.classList.add("active");
            document.body.style.overflow = "hidden";
          }, 20000);
        }

        // Close announcement card
        closeAnnouncementBtn.addEventListener("click", () => {
          announcementCard.classList.remove("active");
          document.body.style.overflow = "auto";
        });

        // Register from announcement card
        announcementRegisterBtn.addEventListener("click", () => {
          announcementCard.classList.remove("active");
          document.body.style.overflow = "auto";
          openModal("registerModal");
        });
        // Coupon Modal Functionality
        const couponModal = document.querySelector(".coupon-modal");
        const closeCouponBtn = document.getElementById("closeCouponBtn");
        const downloadCouponBtn = document.getElementById("downloadCouponBtn");
        const couponCodeDisplay = document.getElementById("couponCodeDisplay");

        // Function to show coupon modal
        function showCouponModal(courseName) {
          // Generate a random coupon code
          const couponCode = generateCouponCode();
          couponCodeDisplay.textContent = couponCode;

          // Set course name in coupon template
          document.getElementById("couponCourseName").textContent = courseName;
          document.getElementById("couponCodePrint").textContent = couponCode;

          // Set valid until date (30 days from now)
          const validUntil = new Date();
          validUntil.setDate(validUntil.getDate() + 30);
          document.getElementById("validUntil").textContent =
            validUntil.toLocaleDateString();

          // Show coupon modal
          couponModal.classList.add("active");
          document.body.style.overflow = "hidden";
        }

        // Close coupon modal
        closeCouponBtn.addEventListener("click", () => {
          couponModal.classList.remove("active");
          document.body.style.overflow = "auto";
        });

        // Download coupon
        downloadCouponBtn.addEventListener("click", () => {
          // Create a temporary element for the coupon
          const couponElement = document
            .getElementById("couponTemplate")
            .cloneNode(true);
          couponElement.style.display = "block";
          document.body.appendChild(couponElement);

          // Use html2canvas to capture the coupon as an image
          html2canvas(couponElement).then((canvas) => {
            // Convert canvas to image data URL
            const imageData = canvas.toDataURL("image/png");

            // Create a temporary link to download the image
            const link = document.createElement("a");
            link.href = imageData;
            link.download = "careercoded-coupon.png";
            link.click();

            // Remove temporary element
            document.body.removeChild(couponElement);
          });
        });

        // Generate random coupon code
        function generateCouponCode() {
          const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          let couponCode = "";
          for (let i = 0; i < 8; i++) {
            couponCode += chars.charAt(
              Math.floor(Math.random() * chars.length)
            );
          }
          return couponCode;
        }

        // Auto popup registration form after 3 minutes (only once)
        let popupShown = false;

        function showPopupAfterDelay() {
          if (!popupShown) {
            setTimeout(() => {
              openModal("registerModal");
              popupShown = true;
            }, 180000); // 3 minutes
          }
        }

        // Start the timers when page loads
        showAnnouncementCard();
        showPopupAfterDelay();

        // Handle viewport on mobile devices
        function setViewport() {
          const viewport = document.querySelector('meta[name="viewport"]');
          if (window.innerWidth <= 768) {
            viewport.setAttribute(
              "content",
              "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            );
          } else {
            viewport.setAttribute(
              "content",
              "width=device-width, initial-scale=1.0"
            );
          }
        }

        setViewport();
        window.addEventListener("resize", setViewport);

        // Handle image loading for better performance on mobile
        function optimizeImages() {
          const images = document.querySelectorAll("img");
          images.forEach((img) => {
            // Add lazy loading for better performance
            if (!img.hasAttribute("loading")) {
              img.setAttribute("loading", "lazy");
            }
          });
        }

        optimizeImages();
      });