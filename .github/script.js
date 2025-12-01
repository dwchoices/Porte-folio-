// Sélection des sections et des cartes
const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('.project-card, .skill-card, .testimonial-card');

// Fonction pour révéler les éléments au scroll
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  // Révéler les sections
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });

  // Révéler les cartes avec un petit delay
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 150);
    }
  });
});