class WebScraper {

  scrape(coin) {
    return fetch(`http://cors-anywhere.herokuapp.com/https://coinmarketcap.com/currencies/${url}`)
      .then(response => {
        return response.text();
      })
      .then(response => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(response, "text/html");
        return this.scraper(response);
      })
      .catch(error => throw new error)
  }
  scraper(document){
    const cryptocurrency = {
      title: '',
      url: '',
      percentChange: '%',
      bitcoinPrice: 0,
      usdPrice: 0,
      high: 0,
      low: 0
    };
  }
}
module.exports = WebScraper;
