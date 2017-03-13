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
