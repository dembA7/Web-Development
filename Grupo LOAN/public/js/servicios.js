document.addEventListener("DOMContentLoaded", function() {
    new Splide('#splide-services', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        // autoplay: true,
    }).mount();
});

var main = new Splide( '#main-slider', {
    type       : 'fade',
    heightRatio: 1,
    fixedHeight: 300,
    fixedWidth: 500,
    pagination : false,
    arrows     : false,
    cover      : true,
    // autoplay: true,
});

var thumbnails = new Splide( '#thumbnail-slider', {
    rewind          : true,
    fixedWidth      : 104,
    fixedHeight     : 58,
    isNavigation    : true,
    gap             : 10,
    focus           : 'center',
    pagination      : false,
    cover           : true,
    dragMinThreshold: {
        mouse: 4,
        touch: 10,
    },

});
main.sync( thumbnails );
main.mount();
thumbnails.mount();