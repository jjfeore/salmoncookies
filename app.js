var shopObj = {
  minCust: 0,
  maxCust: 0,
  avgCookies: 0,
  pageElement: 0,
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookieCount: [],
  dailySales: function () {
    var cookieTotal = 0;
    var randSale;
    for (var i = 0; i < 15; i++) {
      randSale = this.randCust() * this.avgCookies;
      cookieTotal += randSale;
      this.cookieCount.push(randSale);
    }
    this.cookieCount.push(cookieTotal);
  }
};

var pikeShop = new shopObj();
pikeShop.minCust = 23;
pikeShop.maxCust = 65;
pikeShop.avgCookies = 6.3;
pikeShop.pageElement = document.getElementById('pikeList');
pikeShop.dailySales();

var airportShop = new shopObj();
airportShop.minCust = 3;
airportShop.maxCust = 24;
airportShop.avgCookies = 12;
airportShop.pageElement = document.getElementById('airportList');
airportShop.dailySales();

var centerShop = new shopObj();
centerShop.minCust = 11;
centerShop.maxCust = 38;
centerShop.avgCookies = 3.7;
centerShop.pageElement = document.getElementById('centerList');
centerShop.dailySales();

var hillShop = new shopObj();
hillShop.minCust = 20;
hillShop.maxCust = 38;
hillShop.avgCookies = 2.3;
hillShop.pageElement = document.getElementById('hillList');
hillShop.dailySales();

var alkiShop = new shopObj();
alkiShop.minCust = 2;
alkiShop.maxCust = 16;
alkiShop.avgCookies = 4.6;
alkiShop.pageElement = document.getElementById('alkiList');
alkiShop.dailySales();

function listData(listObj) {
  for (var a = 0; a < listObj.cookieCount.length; a++) {
    listObj.pageElement.childNodes[a].firstChild.innerHTML = listObj.cookieCount[a];
  }
}
listData(pikeShop);
listData(airportShop);
listData(centerShop);
listData(hillShop);
listData(alkiShop);
