const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    // Add a click event listener to each card.
    card.addEventListener('click', () => {
        // Toggle the "open" class on the card.
        card.classList.toggle('open');
    });
});
