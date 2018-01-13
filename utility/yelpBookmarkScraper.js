const scraperjs = require('scraperjs');

process.on('message', (yelp_id) => {
    console.log("yelp_id received from parent: " + yelp_id);
    getBookmarks(yelp_id)
})

function getBookmarks(yelp_id) {
    let start = 0;
    let scraper = scraperjs.StaticScraper
        .create()
        .scrape( $ => {
            return $(".biz-name.js-analytics-click")
                .map( (i, e) => $(e).attr('href')).get();
        })
        .then( bookmarks => {
            if (bookmarks.length == 0) {
                process.send('eof')
            } else {
                start += 50
                for (var i = 0; i < bookmarks.length; i++) {
                    process.send(bookmarks[i].substring(5))
                }
                scraper.get(`https://www.yelp.com/user_details_bookmarks?userid=${yelp_id}&start=${start}`)
            }
        })
    scraper.get(`https://www.yelp.com/user_details_bookmarks?userid=${yelp_id}&start=${start}`)
}