

import Gallery from '../../../plugin/dist/gallary.umd';
const el = document.getElementById('slider');
new Gallery(el, {
     items: 2,
     width: 500,
     height: 350,
     slidesToMove:2,
     //sliderMargin:0,
      //thumbnails: 3,
    //thumbnailWidth:63 ,
      //thumbnailMargin: 5,
      slideMove:2,



});

// default styles of thumbnails in pixels
    //   width       = 9% of container width.
    //   height      = 9% of imageHeight .
    //   thumbMargin = 1.1% of container width.


//for customisation use 
    //           items : 'number' - for number of slides to move,
    //           width : 'number' - width of the slider,
    //          height : 'number' - height of the slider,
    //      thumbnails : 'number' - count of thumbnails needed,
    //  thumbnailWidth : 'number' - thumbnails width,
    // thumbnailMargin : 'number' - thumbnails marginRight,
    //     sliderMargin : 'number' - margin between slider and thumbnails,
