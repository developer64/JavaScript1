'use strict';
var img = document.getElementsByClassName( 'gallery__carousel-img' ),
    gal_left = document.getElementsByClassName( 'gallery__nav-larr' ),
    gal_right = document.getElementsByClassName( 'gallery__nav-rarr' ),
    carousel = document.getElementById( 'carousel' );
for ( var i = 0; i < img.length; i++ ) {
    img[ i ].addEventListener( 'click', function () {
        var src = this.getAttribute( 'src' ),
            pic = document.getElementById( 'gallery__big-pic' ),
            title = document.getElementById( 'img-title' ),
            file = document.getElementById( 'img-src' ),
            act_img = document.getElementsByClassName( 'gallery__carousel-img_active' );
        act_img[ 0 ].classList.remove( 'gallery__carousel-img_active' );
        pic.setAttribute( 'src', src );
        file.innerText = 'Расположение файла ' + src;
        title.innerText = this.dataset.title;
        this.classList.add( 'gallery__carousel-img_active' );
    })
}
gal_right[ 0 ].addEventListener( 'click', function () {
    carousel.classList.add( 'gallery__carousel_end' );
});
gal_left[ 0 ].addEventListener( 'click', function () {
    carousel.classList.remove( 'gallery__carousel_end' );
});