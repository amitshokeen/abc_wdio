var basePage = require('./base.page');

var JustInPage = Object.create(basePage, {
    title: { get: function () { return browser.getTitle(); } },
    articles: { get: function() { 
        let articles =  browser.elements('.article-index li'); 

        return {
            length: articles.value.length,
            all: articles,
            getArticleByIndex: function(index) {
                return {
                    'title': articles.value[index].$('h3 a').getText(),
                    'timestamp': articles.value[index].$('.published span:nth-child(1)').getText(),
                    'text': articles.value[index].$('p:nth-of-type(2)').getText(),
                };
            }
        }
    } }
});

module.exports = JustInPage;

