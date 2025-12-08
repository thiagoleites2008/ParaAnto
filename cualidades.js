// Elementos
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCards() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'prev', 'next');
        
        if (index === currentIndex) {
            card.classList.add('active');
        } else if (index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)) {
            card.classList.add('prev');
        } else if (index === currentIndex + 1 || (currentIndex === cards.length - 1 && index === 0)) {
            card.classList.add('next');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCards();
    });
});

let touchStartX = 0;
let touchEndX = 0;

const cardContainer = document.querySelector('.card-container');

cardContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

cardContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
       
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    }
    if (touchEndX > touchStartX + 50) {
      
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCards();
    }
}


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    }
    if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCards();
    }
});


updateCards();