const scraperjs = require('scraperjs');

process.on('message', (yelp_id) => {
    console.log("yelp_id received from parent: " + yelp_id);
    getBookmarks(yelp_id)
})

function getBookmarks(yelp_id) {
    scraperjs.StaticScraper
    .create(`https://www.yelp.com/user_details_bookmarks?userid=${yelp_id}`)
    .scrape( $ => {
        return $(".biz-name.js-analytics-click")
            .map( (i, e) => $(e).attr('href') )
            
    })
    .then( bookmarks => {
        for (var i = 0; i < bookmarks.length; i++) {
            process.send(bookmarks[i].substring(5))
        }
        process.send('eof')
        process.exit(0)
    })
}