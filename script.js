
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Par défaut, 1 slide visible
    spaceBetween: 10, // Espace par défaut entre les slides
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // Lorsque la largeur de l'écran est >= 640px
        640: {
            slidesPerView: 2, // Afficher 2 slides
            spaceBetween: 20, // Espace de 20px entre les slides
        },
        // Lorsque la largeur de l'écran est >= 768px
        768: {
            slidesPerView: 3, // Afficher 3 slides
            spaceBetween: 30, // Espace de 30px entre les slides
        },
        // Lorsque la largeur de l'écran est >= 1024px
        1024: {
            slidesPerView: 4, // Afficher 4 slides
            spaceBetween: 40, // Espace de 40px entre les slides
        },
    },
});