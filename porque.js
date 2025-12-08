
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    

    return (
        rect.top < windowHeight * 0.85 && 
        rect.bottom > 0
    );
}


function handleScrollAnimation() {
    const blocks = document.querySelectorAll('.block');
    
    blocks.forEach(block => {
        if (isElementInViewport(block) && !block.classList.contains('visible')) {
            block.classList.add('visible');
        }
    });
}


window.addEventListener('load', () => {
    setTimeout(handleScrollAnimation, 100);
});

let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(handleScrollAnimation, 50);
});


window.addEventListener('resize', handleScrollAnimation);

handleScrollAnimation();