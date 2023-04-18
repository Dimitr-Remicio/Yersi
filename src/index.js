import Splide from '@splidejs/splide';

new Splide( '.splide', {
    type    : 'loop',
    autoplay: 'pause',
    perPage : 3,
  } );
  
var splide = new Splide( '.splide' );

splide.on( 'autoplay:playing', function ( rate ) {
    console.log( rate ); // 0-1
  } );
  
splide.mount();