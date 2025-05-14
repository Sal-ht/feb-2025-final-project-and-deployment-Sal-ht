// Scroll-based animation detection
function handleScrollAnimation() {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('in-view');
    }
  });
}

// Trigger scroll animations on load and scroll
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Change hero text on button click
function changeWelcomeText() {
  const heroText = document.querySelector('.hero-content p');
  heroText.textContent = "You're in safe hands with SalGuard!";
}

// Highlight About Section
function highlightAbout() {
  const aboutCard = document.getElementById('about');
  aboutCard.style.backgroundColor = '#caf0f8';
  aboutCard.style.transition = 'background-color 0.4s ease-in-out';
}

// Add a new service dynamically
function addService() {
  const list = document.querySelector('#services ul');
  const newItem = document.createElement('li');
  newItem.textContent = 'Cyber Insurance';
  list.appendChild(newItem);
}

// Image slider logic
const images = ['images/insur.jpg', 'images/insurance2.jpg', 'images/insurance3.jpg'];
let currentImgIndex = 0;
const galleryImg = document.getElementById('galleryImg');
const nextBtn = document.getElementById('nextImg');

if (nextBtn && galleryImg) {
  nextBtn.addEventListener('click', () => {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    galleryImg.src = images[currentImgIndex];
  });
}

// Accordion toggle
document.querySelectorAll('.accordion-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Keyboard input display
const keyInput = document.getElementById('keyInput');
const keyDisplay = document.getElementById('keyDisplay');

if (keyInput) {
  keyInput.addEventListener('keyup', (e) => {
    keyDisplay.textContent = e.key;
  });
}

// Secret message on double click
const secretBtn = document.getElementById('secretBtn');
const secretMsg = document.getElementById('secretMessage');

if (secretBtn && secretMsg) {
  secretBtn.addEventListener('dblclick', () => {
    secretMsg.classList.remove('hidden');
    secretMsg.classList.add('fade-in');
  });
}

// Form validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const emailError = document.getElementById('emailError');
      const passwordError = document.getElementById('passwordError');

      emailError.textContent = '';
      passwordError.textContent = '';

      if (!email.value.includes('@')) {
        emailError.textContent = 'Invalid email format.';
        return;
      }

      if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        return;
      }

      alert('Form submitted successfully!');
    });
  }
});
