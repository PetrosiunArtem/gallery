function fixHeader() {
    const header = document.getElementById('menu');
    if (window.scrollY > window.innerHeight) {
        header.classList.add('header_sticky');
    } else {
        header.classList.remove('header_sticky');
    }
}

window.addEventListener('scroll', fixHeader);
