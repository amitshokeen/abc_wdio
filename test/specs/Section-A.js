const newsPage = require('../../pageobjects/news.page');
const justInPage = require('../../pageobjects/justin.page');
const videoPage = require('../../pageobjects/video.page');
const gallaryPage = require('../../pageobjects/image-gallary.page');

const linkToNewsPage = 'news';
const linkToJustInPage = 'news/justin';
const linkToVideoPage = 'news/2017-02-09/weatherill-promises-to-intervene-dramatically/8254908';
const linkToGallaryPage = 'news/2017-02-10/abc-open-pic-of-the-week/8256256';

describe('Section (a) ABC News', function() {
    it('should load news page', function() {
        newsPage.open(linkToNewsPage);
        newsPage.pageSection.waitForVisible();
        expect(newsPage.pageSection.isVisibleWithinViewport()).toBe(true);
    });

    it('should load News banner', function() {
        newsPage.open(linkToNewsPage);
        newsPage.pageBanner.waitForVisible();
        expect(newsPage.pageBanner.isVisibleWithinViewport()).toBe(true);
    });

    it('should navigate to the ‘Just In’ page via the link on the primary navigation', function() {
        newsPage.open(linkToJustInPage);

        newsPage.justInNavButton.waitForVisible();
        newsPage.justInNavButton.click();

        expect(justInPage.title).toContain('Just In')
    });

    it('should correctly loads content per article on ‘Just In’ page,', function() {
        let noOfArticles = 25;

        justInPage.open(linkToJustInPage);

        justInPage.articles.all.waitForVisible();

        // Check if 25 articles het loaded
        expect(justInPage.articles.length, 'Loaded all articles.').toBe(noOfArticles);

        // Check if each article has required fields.
        for(let i=0; i < justInPage.articles.length; i++) {
            let article = justInPage.articles.getArticleByIndex(i);

            // Check if article's title, timestamp and text are string and have some text
            expect(article.title).toEqual(jasmine.any(String));
            expect(article.title.length).toBeGreaterThan(0);
            expect(article.timestamp).toEqual(jasmine.any(String));
            expect(article.timestamp.length).toBeGreaterThan(0);
            expect(article.text).toEqual(jasmine.any(String));
            expect(article.text.length).toBeGreaterThan(0);
        }
    });

    it('should loads video successfully and verify it`s appearence', function() {
        videoPage.open(linkToVideoPage);
        expect(videoPage.checkVideoIfPlaying()).toBe(true);
    });

    it('should load Image Gallery successfully and verify images appear correctly', function() {
        gallaryPage.open(linkToGallaryPage);
        expect(gallaryPage.isGallaryLoadedSuccessfully()).toBe(true);
    });
})
