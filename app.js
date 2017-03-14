'use strict';

var storeHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm','Daily Location Total'];
var storeList = [];

function cookieShop(min, max, avgC, sName) {
  this.minCust = min;
  this.maxCust = max;
  this.avgCookies = avgC;
  this.storeName = sName;
  this.cookieCount = [];
  this.randCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  this.dailySales = function () {
    var cookieTotal = 0;
    var randSale;
    for (var i = 0; i < storeHours.length - 1; i++) {
      randSale = Math.ceil(this.randCust() * this.avgCookies);
      cookieTotal += randSale;
      this.cookieCount.push(randSale);
    }
    this.cookieCount.push(cookieTotal);
  };
  this.render = function () {
    this.dailySales();
    var newTR = document.createElement('tr');
    var newTD = document.createElement('td');
    newTD.innerText = storeName;
    newTR.appendChild(newTD);
    for (var a = 0; a < storeHours.length; a++) {
      newTD = document.createElement('td');
      newTD.innerText = cookieCount[a];
      newTR.appendChild(newTD);
    }
    return newTR;
  };
  storeList.push(this);
}

var pikeShop = new cookieShop(23, 65, 6.3, 'First and Pike');
var airportShop = new cookieShop(3, 24, 1.2, 'Airport');
var centerShop = new cookieShop(11, 38, 3.7, 'Seattle Center');
var hillShop = new cookieShop(20, 38, 2.3, 'Capitol Hill');
var alkiShop = new cookieShop(2, 16, 4.6, 'Alki');

function tableHead() {
  var newTHead = document.createElement('thead');
  var newTR = document.createElement('tr');
  var newTH = document.createElement('th');
  newTH.innerText = 'Store Name';
  newTR.appendChild(newTH);
  for (var c = 0; c < storeHours.length; c++) {
    newTH = document.createElement('th');
    newTH.innerText = storeHours[a];
    newTR.appendChild(newTR);
  }
  newTHead.appendChild(newTR);
  return newTHead;
}

function tableFoot() {
  var newTR = document.createElement('tr');
  var newTH = document.createElement('th');
  newTH.innerText = 'Totals';
  newTR.appendChild(newTH);
  for (var c = 0; c < storeHours.length; c++) {
    newTH = document.createElement('th');
    newTH.innerText = storeHours[a];
    newTR.appendChild(newTR);
  }
  return newTHead;
}
