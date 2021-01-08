var cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
    card.addEventListener('dragstart', function (e) {
        var el = e.target;
        el.classList.add('opacity-50');
    });
    card.addEventListener('dragend', function (e) {
        var el = e.target;
        el.classList.remove('opacity-50');
    });
});
