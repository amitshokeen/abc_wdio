var basePage = require('./base.page');

var VideoPage = Object.create(basePage, {
    isGallaryLoadedSuccessfully: {
        value: function () {
            $('.lightSlider').waitForVisible();
            var result = browser.selectorExecute('.lightSlider img', function(images){
                console.log(images)
                var imagesLoadedSuccessfully = true;
                for(let i=0; i<images.length; i++) {
                    // Check if all images have been loaded properly.
                    if (!(images[i].complete && typeof images[i].naturalWidth != undefined && images[i].naturalWidth > 0)) {
                        imagesLoadedSuccessfully = false;
                        break;
                    }
                }
                return imagesLoadedSuccessfully;
            });
            return result;
        }
    }
});

module.exports = VideoPage;
