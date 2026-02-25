// Initialize Lucide Icons
lucide.createIcons();

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Particles Configuration
const particlesEl = document.getElementById('particles-js');
if (particlesEl) {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00d4ff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#00d4ff", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
}

// Innovation Tracks Data (17 Tracks)
const tracks = [
    { title: "Smart Automation (SDG 9)", icon: "cpu", desc: "Intelligent systems for industries and home automation." },
    { title: "Smart Education (SDG 4)", icon: "graduation-cap", desc: "Revolutionizing learning with EdTech and digital tools." },
    { title: "Space Technology (SDG 13)", icon: "rocket", desc: "Exploring orbit and beyond with satellite tech." },
    { title: "Tourism & Hospitality (SDG 8)", icon: "map", desc: "Enhancing travel experiences with modern technology." },
    { title: "Smart Vehicles (SDG 7)", icon: "car", desc: "Autonomous driving, EV infra, and smart traffic." },
    { title: "Heritage & Culture (SDG 16)", icon: "landmark", desc: "Preserving history through digital innovation." },
    { title: "Miscellaneous (SDG)", icon: "lightbulb", desc: "Breakthrough ideas outside defined tracks." },
    { title: "Robotics & Drones (SDG 15)", icon: "bot", desc: "Autonomous aerial and ground robotic systems." },
    { title: "Defense / Security (SDG 16)", icon: "shield-check", desc: "National security and advanced defense innovations." },
    { title: "Disaster Management (SDG 13)", icon: "alert-triangle", desc: "Predicting and responding to natural calamities." },
    { title: "Transportation & Logistics (SDG 11)", icon: "truck", desc: "Next-gen supply chain and transport management." },
    { title: "Social Good / Accessibility (SDG 10)", icon: "users-2", desc: "Tech to solve community issues and improve accessibility." },
    { title: "MedTech / BioTech / HealthTech (SDG 3)", icon: "heart-pulse", desc: "Innovative solutions for healthcare and biotech." },
    { title: "FinTech / Blockchain / Cybersecurity (SDG 16)", icon: "lock", desc: "Secure digital transactions and data protection." },
    { title: "Agriculture / FoodTech / Rural Development (SDG 1, SDG 2)", icon: "sprout", desc: "Sustainable farming and rural growth solutions." },
    { title: "Clean & Green Technology (Renewable Energy, Sustainability) (SDG 7)", icon: "leaf", desc: "Renewable energy and sustainability solutions." }
];

const tracksGrid = document.getElementById('tracks-grid');
if (tracksGrid) {
    tracks.forEach((track, index) => {
        const card = document.createElement('div');
        card.className = 'glass p-8 rounded-3xl track-card border border-white/5 group hover:-translate-y-2 cursor-pointer';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index % 4) * 100);

        card.innerHTML = `
            <div class="track-icon w-12 h-12 bg-neon-blue/10 rounded-xl flex items-center justify-center text-neon-blue mb-6 transition-all duration-300">
                <i data-lucide="${track.icon}"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 tracking-tight">${track.title}</h3>
            <p class="text-white/40 text-sm leading-relaxed line-clamp-2">${track.desc}</p>
            <button class="mt-6 text-xs font-bold text-neon-blue uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                View Details <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
        `;

        card.addEventListener('click', () => openModal(track));
        tracksGrid.appendChild(card);
    });
}
lucide.createIcons(); // Re-run for dynamic content

// Modal Functions
const modal = document.getElementById('track-modal');
const modalContent = document.getElementById('modal-content');

window.openModal = (track) => {
    document.getElementById('modal-title').innerText = track.title;
    document.getElementById('modal-desc').innerText = track.desc + " This track focuses on leveraging modern technology to solve critical challenges in " + track.title + ". Detailed problem statements will be revealed during the event.";

    const iconElem = document.getElementById('modal-icon-elem');
    iconElem.setAttribute('data-lucide', track.icon);
    lucide.createIcons();

    modal.classList.remove('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-90');
    modalContent.classList.add('scale-100');
    document.body.style.overflow = 'hidden';
}

window.closeModal = () => {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-90');
    document.body.style.overflow = 'auto';
}

// Close modal on background click
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Countdown Timer
const eventDate = new Date('April 4, 2026 09:00:00').getTime();
const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.innerText = days.toString().padStart(2, '0');
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minutesEl.innerText = minutes.toString().padStart(2, '0');
        secondsEl.innerText = seconds.toString().padStart(2, '0');
    }

    if (distance < 0) {
        clearInterval(timer);
        const timerEl = document.getElementById('hero-timer');
        if (timerEl) timerEl.innerHTML = "HACKING LIVE!";
    }
}, 1000);



// Cursor Glow Effect
document.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('cursor-glow');
    if (glow) {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    }
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const progress = document.getElementById('scroll-progress');
    if (progress) {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = window.scrollY;
        progress.style.width = scrollTotal > 0 ? (currentScroll / scrollTotal) * 100 + '%' : '0%';
    }
});

// Wizard Navigation Logic
let currentStep = 1;
const totalSteps = 4;

window.goToStep = (step) => {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.form-step').forEach(el => el.classList.remove('active'));

    // Show current step
    const targetStep = document.getElementById(`step-${step}`);
    if (targetStep) {
        targetStep.classList.remove('hidden');
        targetStep.classList.add('active');
    }

    // Update Stepper UI
    document.querySelectorAll('.step-item').forEach((item, idx) => {
        const itemStep = idx + 1;
        const circle = item.querySelector('.step-circle');
        const icons = ['info', 'users', 'lightbulb', 'credit-card'];

        if (circle) {
            if (itemStep < step) {
                item.classList.add('completed');
                item.classList.remove('active');
                circle.innerHTML = '<i data-lucide="check" class="w-6 h-6"></i>';
            } else if (itemStep === step) {
                item.classList.add('active');
                item.classList.remove('completed');
                circle.innerHTML = `<i data-lucide="${icons[step - 1]}" class="w-6 h-6"></i>`;
            } else {
                item.classList.remove('active', 'completed');
                circle.innerHTML = `<i data-lucide="${icons[itemStep - 1]}" class="w-6 h-6"></i>`;
            }
        }
    });

    // Update Progress Line
    const progressLine = document.getElementById('step-progress-line');
    if (progressLine) {
        const progressWidth = ((step - 1) / (totalSteps - 1)) * 100;
        progressLine.style.width = `${progressWidth}%`;
    }

    // Update Buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finalBtn = document.getElementById('final-submit-btn');

    if (prevBtn) {
        if (step === 1) {
            prevBtn.disabled = true;
            prevBtn.classList.add('opacity-50', 'cursor-not-allowed');
        } else {
            prevBtn.disabled = false;
            prevBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }

    if (nextBtn && finalBtn) {
        if (step === totalSteps) {
            nextBtn.classList.add('hidden');
            finalBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            finalBtn.classList.add('hidden');
        }
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
    currentStep = step;

    // Smooth scroll to top of form section
    const registerSection = document.getElementById('register');
    if (registerSection) registerSection.scrollIntoView({ behavior: 'smooth' });
};

const validateStep = (step) => {
    const currentStepEl = document.getElementById(`step-${step}`);
    if (!currentStepEl) return true;

    const inputs = currentStepEl.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            if (!input.checked) {
                isValid = false;
                // For checkbox, we might want to highlight the parent or the text
                const container = input.closest('div') || input.parentElement;
                if (container) {
                    container.classList.add('border', 'border-red-500/50', 'rounded-lg', 'p-2');
                    setTimeout(() => container.classList.remove('border', 'border-red-500/50', 'rounded-lg', 'p-2'), 3000);
                }
            }
        } else if (!input.value.trim()) {
            isValid = false;
            input.classList.add('border-red-500/50');
            setTimeout(() => input.classList.remove('border-red-500/50'), 3000);
        } else {
            if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                isValid = false;
                input.classList.add('border-red-500/50');
            }
            if (input.type === 'tel' && !/^\+?[\d\s-]{10,15}$/.test(input.value)) {
                isValid = false;
                input.classList.add('border-red-500/50');
            }
        }
    });

    if (!isValid) {
        alert('Please fill all required fields correctly.');
    }
    return isValid;
};

// Event Listeners for Wizard
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                goToStep(currentStep + 1);
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentStep > 1) {
                goToStep(currentStep - 1);
            }
        });
    }

    // Wizard Form Submission
    const wizardForm = document.getElementById('registration-wizard');
    if (wizardForm) {
        wizardForm.setAttribute('novalidate', 'true');
        wizardForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!validateStep(4)) return;

            // Anti-bot check
            const honey = wizardForm.querySelector('input[name="_honey"]');
            if (honey && honey.value) return;

            const btn = document.getElementById('final-submit-btn');
            const btnText = document.getElementById('submit-text');
            const btnLoader = document.getElementById('submit-loader');

            if (btn) {
                btn.disabled = true;
                if (btnText) btnText.classList.add('hidden');
                if (btnLoader) btnLoader.classList.remove('hidden');
            }

            try {
                const formData = new FormData(wizardForm);
                const data = Object.fromEntries(formData.entries());

                // Handle File to Base64
                const fileInput = wizardForm.querySelector('input[name="screenshot"]');
                if (fileInput && fileInput.files.length > 0) {
                    const file = fileInput.files[0];
                    if (file.size > 5 * 1024 * 1024) {
                        alert('File too large. Max 5MB allowed.');
                        throw new Error('File too large');
                    }
                    const base64 = await toBase64(file);
                    data.screenshot = {
                        base64: base64,
                        type: file.type,
                        name: file.name
                    };
                }

                // POST to Google Apps Script
                // REPLACE THIS URL with your deployed web app URL
                const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby5KouhAElgoNBT48y0ms9Ll_UwGOo9YerzclzidWU3W33PUi5vZEx9y62kgcgGiLxO8Q/exec';

                const response = await fetch(SCRIPT_URL, {
                    method: 'POST',
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                console.log("Backend Logs:", result.logs);
                console.log("DATA SAVED HERE (CLICK ME):", result.spreadsheetUrl); // Clickable Link

                if (result.status === 'success') {
                    showSuccessPopup();
                } else {
                    console.error("Backend Error Logs:", result.logs);
                    throw new Error(result.message || 'Submission failed');
                }

            } catch (error) {
                console.error('Submission Error:', error);
                alert('Submission Failed. Please try again.');
                if (btn) {
                    btn.disabled = false;
                    if (btnText) btnText.classList.remove('hidden');
                    if (btnLoader) btnLoader.classList.add('hidden');
                }
            }
        });
    }
});

// Helper: Convert File to Base64
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

// Success Popup Helper
function showSuccessPopup() {
    const successDiv = document.createElement('div');
    successDiv.className = 'fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-6';
    successDiv.innerHTML = `
        <div class="glass p-12 rounded-[40px] border-green-500/30 text-center max-w-lg scale-90 transition-all duration-500" id="success-popup">
            <img src="logo.jpeg" alt="IIC Logo" class="w-20 h-20 rounded-2xl mx-auto mb-6 object-cover border border-white/10 shadow-2xl">
            <div class="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500 text-glow">
                <i data-lucide="check" class="w-8 h-8"></i>
            </div>
            <h2 class="text-3xl font-orbitron font-bold mb-4 uppercase">Registration Successful!</h2>
            <p class="text-white/60 text-lg mb-8 leading-relaxed">
                Your submission is under verification.<br>
                Confirmation email will be sent within 48 hours.
            </p>
            <button onclick="location.reload()" class="bg-white text-dark font-black px-12 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all text-lg shadow-xl">
                BACK TO HOME
            </button>
        </div>
    `;
    document.body.appendChild(successDiv);
    if (typeof lucide !== 'undefined') lucide.createIcons();
    setTimeout(() => {
        const popup = document.getElementById('success-popup');
        if (popup) popup.classList.replace('scale-90', 'scale-100');
    }, 100);
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuToggle.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'menu');
        } else {
            icon.setAttribute('data-lucide', 'x');
        }
        lucide.createIcons();
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuToggle.querySelector('i');
            icon.setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
}

// Marquee pause on hover
const marquee = document.getElementById('partner-marquee');
if (marquee) {
    marquee.addEventListener('mouseenter', () => marquee.style.animationPlayState = 'paused');
    marquee.addEventListener('mouseleave', () => marquee.style.animationPlayState = 'running');
}
