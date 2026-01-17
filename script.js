// Morocco Squad 3D - Image Configuration
// Toutes les 20 photos de l'équipe marocaine 🇲🇦
const images = [
  'src/images/hakimi.jpg',
  'src/images/bono.jpg',
  'src/images/amrabt.jpg',
  'src/images/brahim.jpg',
  'src/images/regragui.jpg',
  'src/images/saibari.jpg',
  'src/images/rahimi.jpg',
  'src/images/naif.jpg',
  'src/images/kaabi.jpg',
  'src/images/abde.jpg',
  'src/images/lhaj.jpg',
  'src/images/sais.jpg',
  'src/images/ucef.jpg',
  'src/images/bensghir.jpg',
  'src/images/chibi.jpg',
  'src/images/khannous.jpg',
  'src/images/masina.jpg',
  'src/images/nail.jpg',
  'src/images/00.jpg',
  'src/images/00000.jpg'
];

const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const bgLayers = [document.getElementById('bg1'), document.getElementById('bg2')];

const total = cards.length;
const radius = 650; // More space between cards
const angleStep = 360 / total;
let currentBgIndex = 0;

// Setup initial positions
cards.forEach((card, i) => {
  const theta = angleStep * i;
  card.style.transform = `rotateY(${theta}deg) translateZ(${radius}px)`;
});
bgLayers[0].style.backgroundImage = `url(${images[0]})`;

let currentAngle = 0;
let targetAngle = 0;
let isDragging = false;
let startX = 0;
let startAngle = 0;
let isHovering = false;
let lastActiveIndex = -1;

// === THEME TOGGLE ===
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

// Check for saved theme preference or default to system preference
function getPreferredTheme() {
  const savedTheme = localStorage.getItem('morocco-squad-theme');
  if (savedTheme) return savedTheme;

  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('morocco-squad-theme', theme);
  themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

// Initialize theme
setTheme(getPreferredTheme());

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
});

// Listen for system theme changes
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('morocco-squad-theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

// === CAROUSEL ANIMATION ===
function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function animate() {
  if (isDragging) {
    currentAngle = targetAngle;
  } else if (isHovering) {
    currentAngle = lerp(currentAngle, targetAngle, 0.1);
  } else {
    targetAngle -= 0.12; // Smooth rotation
    currentAngle = lerp(currentAngle, targetAngle, 0.1);
  }

  carousel.style.transform = `rotateY(${currentAngle}deg)`;
  updateActiveCard();
  requestAnimationFrame(animate);
}
animate();

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    if (card.style.pointerEvents === 'none') return;

    isHovering = true;
    const index = parseInt(card.dataset.index);
    const cardAngle = index * angleStep;

    const currentRest = targetAngle;
    const baseTarget = -cardAngle;
    const rounds = Math.round((currentRest - baseTarget) / 360);
    targetAngle = baseTarget + (rounds * 360);
  });

  card.addEventListener('mouseleave', () => {
    isHovering = false;
  });
});

// Touch support for mobile
let touchStartX = 0;

document.addEventListener('touchstart', e => {
  if (e.target.closest('.theme-toggle') || e.target.closest('.github-link')) return;
  isDragging = true;
  touchStartX = e.touches[0].clientX;
  startAngle = targetAngle;
});

document.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const delta = e.touches[0].clientX - touchStartX;
  targetAngle = startAngle + (delta * 0.5);
});

document.addEventListener('touchend', () => {
  isDragging = false;
});

document.addEventListener('mousedown', e => {
  if (e.target.closest('.theme-toggle') || e.target.closest('.github-link')) return;
  isDragging = true;
  startX = e.clientX;
  startAngle = targetAngle;
  document.body.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const delta = e.clientX - startX;
  targetAngle = startAngle + (delta * 0.5);
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'default';
});

function updateActiveCard() {
  const normalizedAngle = ((-currentAngle % 360) + 360) % 360;
  const activeIndex = Math.round(normalizedAngle / angleStep) % total;

  if (activeIndex !== lastActiveIndex) {
    lastActiveIndex = activeIndex;
    changeBackground(activeIndex);
  }

  cards.forEach((card, index) => {
    let distance = Math.abs(index - activeIndex);
    if (distance > total / 2) distance = total - distance;

    if (index === activeIndex) {
      card.classList.add('active');
      card.style.transform = `rotateY(${index * angleStep}deg) translateZ(${radius}px) scale(1.15)`;
      card.style.opacity = 1;
      card.style.pointerEvents = 'auto';
    }
    else if (distance <= 2) {
      card.classList.remove('active');
      card.style.transform = `rotateY(${index * angleStep}deg) translateZ(${radius}px) scale(1)`;
      card.style.opacity = 0.75;
      card.style.pointerEvents = 'auto';
    }
    else {
      card.classList.remove('active');
      card.style.transform = `rotateY(${index * angleStep}deg) translateZ(${radius}px) scale(1)`;
      card.style.opacity = 0.25;
      card.style.pointerEvents = 'none';
    }
  });
}

function changeBackground(index) {
  const nextLayerIndex = (currentBgIndex + 1) % 2;
  const nextLayer = bgLayers[nextLayerIndex];
  const currentLayer = bgLayers[currentBgIndex];

  nextLayer.style.backgroundImage = `url(${images[index]})`;
  nextLayer.classList.add('visible');
  currentLayer.classList.remove('visible');
  currentBgIndex = nextLayerIndex;
}