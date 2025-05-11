function validateIndexes(index) {

    if (index === 0) {
        prev.style = 'display: none; opacity: 0;';
    } else if (index + 1 === gallery.querySelectorAll('img').length) {
        next.style = 'display: none;  opacity: 0;';
    } else {
        prev.style = '';
        next.style = '';
    }
}

function nextImage() {
    window.currInd++;
    const image = document.getElementById('current-image');
    const ind = window.currInd;
    image.src = images[ind].src;
    validateIndexes(ind);

}

function prevImage() {
    window.currInd--;
    const image = document.getElementById('current-image');
    const ind = window.currInd;
    image.src = images[ind].src;
    validateIndexes(ind);
}

function showOnPopup(imgSrc, index) {
    document.getElementById('current-image').src = imgSrc;
    const pop = document.getElementById('image-popup');
    const bg = document.getElementById('image-popup__bg');
    pop.classList.add('active');
    bg.classList.add('active');
    validateIndexes(index);
    window.currInd = index;
}


function showPopup(event) {
    if (event.target.tagName === 'IMG') {
        let ind = images.findIndex(x => x.isEqualNode(event.target))
        showOnPopup(event.target.getAttribute('src'), ind);
    }
}

let images = Array.from(document.getElementsByClassName("gallery-image"));

const gallery = document.getElementById('gallery');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
let closeImagePopup = document.querySelector('.close-image-popup');
const pop = document.getElementById('image-popup');
const bg = document.getElementById('image-popup__bg');
closeImagePopup.addEventListener('click',() => {
    pop.classList.remove('active');
    bg.classList.remove('active');
});
document.addEventListener('click', (e) => {
    if(e.target === bg) {
        pop.classList.remove('active');
        bg.classList.remove('active');
    }
});
next.addEventListener('click', nextImage);
prev.addEventListener('click', prevImage);
gallery.addEventListener('click', showPopup);
