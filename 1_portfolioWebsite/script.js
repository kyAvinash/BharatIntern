// Example: Add functionality for a scroll-up button
const scrollUpButton = document.querySelector('.scroll-up-btn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpButton.style.display = 'block';
  } else {
    scrollUpButton.style.display = 'none';
  }
});

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
