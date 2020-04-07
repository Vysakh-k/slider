

import Gallery from '../../../plugin/dist/gallary.umd';
const el = document.getElementById('slider');
new Gallery(el, {
    items: 2,
    width: 500,
    height: 300,
    thumbnails: 6,
     //thumbnailWidth:46 ,
     thumbnailMargin: 10,
   

});

//for customisation use 
// items : 'number' - for number of slides to move.
// width : 'number' - width of the slider.
// height: 'number  - height of the slider.



// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
