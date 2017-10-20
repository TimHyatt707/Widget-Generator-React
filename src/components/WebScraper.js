class WebScraper {
  scrape(coin) {
    return fetch(
      `http://cors-anywhere.herokuapp.com/https://coinmarketcap.com/currencies/${coin}`
    )
      .then(response => {
        return response.text();
      })
      .then(response => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(response, "text/html");
        return this.scraper(doc, coin);
      })
      .then(widget => {
        return widget;
      });
    // .catch(err => "foo");
  }
  scraper(document, coin) {
    const cryptocurrency = {
      title: "",
      url: "",
      percentChange: "",
      bitcoinPrice: 0,
      usdPrice: 0
    };
    cryptocurrency.title = coin;
    cryptocurrency.url = `https://files.coinmarketcap.com/static/img/coins/32x32/${coin}.png`;
    //This IF statement exists due to the way positive and negative change is displayed on the webpage
    if (!document.querySelector("span.text-large.negative_change")) {
      cryptocurrency.percentChange = document.querySelector(
        "span.text-large.positive_change"
      ).innerHTML;
    } else {
      cryptocurrency.percentChange = document.querySelector(
        "span.text-large.negative_change"
      ).innerHTML;
    }
    cryptocurrency.bitcoinPrice = document.querySelector(
      "small.text-gray"
    ).innerHTML;
    cryptocurrency.usdPrice = document.querySelector("#quote_price").innerHTML;
    return cryptocurrency;
  }
}
module.exports = WebScraper;
