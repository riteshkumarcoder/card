// Handle card selection
const cards = document.querySelectorAll('[data-card]');

cards.forEach(card => {
  card.addEventListener('click', () => {
    // Deselect all
    cards.forEach(c => {
      c.classList.remove('active');
      c.querySelector('[data-selector]').classList.remove('selected');
    });

    // Activate selected
    card.classList.add('active');
    card.querySelector('[data-selector]').classList.add('selected');
  });
});
