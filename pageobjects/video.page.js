var basePage = require('./base.page');

var VideoPage = Object.create(basePage, {
    checkVideoIfPlaying: {
        value: function () {
            $('.inline-video').waitForVisible();
            var result = browser.executeAsync(function(done) {
                if (jwplayer && jwplayer().getState() === "idle") {
                    jwplayer().play();
                    let intervalId = setInterval(function() {
                        if (jwplayer().getState() === "playing") {
                            clearInterval(intervalId);
                            done(true);
                        }
                    }, 500);
                } else {
                    done(false);
                }
            });
            return result.value;
        }
    }
});

module.exports = VideoPage;
