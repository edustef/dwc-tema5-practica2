let cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('dragstart', (e) => {
    const el = <HTMLElement>e.target;
    el.classList.add('opacity-50');
  });

  card.addEventListener('dragend', (e) => {
    const el = <HTMLElement>e.target;
    el.classList.remove('opacity-50');
  });
})