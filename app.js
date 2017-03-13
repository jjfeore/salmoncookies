var pikeShop = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  pageElement: document.getElementById('pikeList'),
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
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
pikeShop.dailySales();

var airportShop = {
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  pageElement: document.getElementById('airportList'),
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
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
airportShop.dailySales();

var centerShop = {
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  pageElement: document.getElementById('centerList'),
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
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
centerShop.dailySales();

var hillShop = {
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  pageElement: document.getElementById('hillList'),
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
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
hillShop.dailySales();

var alkiShop = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  pageElement: document.getElementById('alkiList'),
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
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
alkiShop.dailySales();

var storeHours = ['6am: ','7am: ','8am: ','9am: ','10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm: ','7pm: ','8pm: ','Total: '];

function listData(listObj) {
  for (var a = 0; a < listObj.cookieCount.length; a++) {
    var newEl = document.createElement('li');
    newEl.innerText = storeHours[a] + listObj.cookieCount[a];
    listObj.pageElement.appendChild(newEl);
//    listObj.pageElement.childNodes[a].insertAdjacentHTML('beforeend', listObj.cookieCount[a]);
  }
}
listData(pikeShop);
listData(airportShop);
listData(centerShop);
listData(hillShop);
listData(alkiShop);
