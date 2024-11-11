let currentIndex = 0;
let startX = 0;
let endX = 0;

// Initialize dots
function initDots() {
  const dotsContainer = document.getElementById('dots-container');
  const profiles = document.querySelectorAll('.profile');
  dotsContainer.innerHTML = ''; // Clear existing dots

  profiles.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === currentIndex) dot.classList.add('active'); // Highlight active dot
    dot.addEventListener('click', () => goToSlide(index)); // Click event for each dot
    dotsContainer.appendChild(dot);
  });
}

// Update dot status based on the current slide
function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

function showSlide(index) {
  const slider = document.getElementById('slider');
  const profiles = document.querySelectorAll('.profile');
  if (index >= profiles.length) currentIndex = 0;
  if (index < 0) currentIndex = profiles.length - 1;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots(); // Update dots when the slide changes
}

function nextSlide() {
  currentIndex++;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  showSlide(currentIndex);
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

// Initialize slider and dots on load
document.addEventListener('DOMContentLoaded', () => {
  initDots();
  showSlide(currentIndex);
});
