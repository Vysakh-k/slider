

import Gallery from '../../../plugin/dist/gallary.umd';
const el = document.getElementById('slider');
new Gallery(el, {
     items: 3,
     width: 1200,
     height: 700,
    // thumbnails: 6,
    // thumbnailWidth:70 ,
    // thumbnailMargin: 10,
   

});

// default styles of thumbnails 
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
