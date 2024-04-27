/***NAV-BARRE***/

const nav = document.getElementById('nav');
const logo = document.querySelector('.logo-nav');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        logo.style.width = '45px';
    } 
    else {
        nav.style.backgroundColor = 'transparent';
        logo.style.width = '70px'; 
    }
});

/***GALLERY-IMAGES***/

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const images = gallery.querySelectorAll('img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.transform = `translateX(-${index * 100}%)`;
        });
        currentImageIndex = index;
        updateDots();
    }

    function updateDots() {
        const dots = Array.from(dotsContainer.querySelectorAll('.dot'));
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentImageIndex) {
                dot.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', function() {
        if (currentImageIndex > 0) {
            showImage(currentImageIndex - 1);
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentImageIndex < images.length - 1) {
            showImage(currentImageIndex + 1);
        }
    });

    images.forEach((image, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) {
            dot.classList.add('active');
        }
        dotsContainer.appendChild(dot);
    });
});