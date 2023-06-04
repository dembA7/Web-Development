let splide = null;
let perPage = window.innerWidth < 817 ? 1 : 3;

function initializeSplide() {
    if (splide) {
        splide.destroy();
    }

    splide = new Splide('.splide', {
        type: 'loop',
        perPage: perPage,
        focus: 'center',
        autoplay: true,
    });

    splide.mount();
}

document.addEventListener("DOMContentLoaded", function() {
    initializeSplide();
});

window.addEventListener("resize", function() {
    const newPerPage = window.innerWidth < 817 ? 1 : 3;

    if (newPerPage !== perPage) {
        perPage = newPerPage;
        initializeSplide();
    }
});
