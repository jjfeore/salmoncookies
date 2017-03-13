var shopObj = {
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
  randCust: function () {
    return Math.floor(Math.random() * maxCust) + minCust;
  },
  cookieCount: [],
  dailySales: function () {
    var cookieTotal = 0;
    var randSale;
    for (var i = 0; i < 15; i++) {
      randSale = randCust() * avgCookies;
      cookieTotal += randSale;
      cookieCount.push(randSale);
    }
    cookieCount.push(cookieTotal);
  }
};

var pikeShop = new shopObj();
pikeShop.minCust = 23;
pikeShop.maxCust = 65;
pikeShop.avgCookies = 6.3;

var airportShop = new shopObj();
airportShop.minCust = 3;
airportShop.maxCust = 24;
airportShop.avgCookies = 12;

var centerShop = new shopObj();
centerShop.minCust = 11;
centerShop.maxCust = 38;
centerShop.avgCookies = 3.7;

var hillShop = new shopObj();
hillShop.minCust = 20;
hillShop.maxCust = 38;
hillShop.avgCookies = 2.3;

var alkiShop = new shopObj();
alkiShop.minCust = 2;
alkiShop.maxCust = 16;
alkiShop.avgCookies = 4.6;
