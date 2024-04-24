window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var background = document.querySelector('.scrolling-background');

    if (scrollPosition > background.offsetTop) {
        background.classList.add('scrolled');
    } else {
        background.classList.remove('scrolled');
    }
});
