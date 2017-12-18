var basePage = require('./base.page');

var NewsPage = Object.create(basePage, {
    pageSection: { get: function () { return $('.page'); } },
    pageBanner: { get: function () { return $('#header'); } },
    justInNavButton: { get: function () { return $('#n-justin a'); } }

});

module.exports = NewsPage;

