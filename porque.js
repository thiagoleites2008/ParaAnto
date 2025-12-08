
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 100 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimation() {
    const blocks = document.querySelectorAll('.block');
    
    blocks.forEach(block => {
        if (isElementInViewport(block)) {
            block.classList.add('visible');
        }
    });
}

window.addEventListener('load', handleScrollAnimation);

window.addEventListener('scroll', handleScrollAnimation);

handleScrollAnimation();