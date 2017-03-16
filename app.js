'use strict';

var storeHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 pm','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm','Daily Location Total'];
var storeList = [];

function CookieShop(min, max, avgC, sName) {
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
    newTD.innerText = this.storeName;
    newTR.appendChild(newTD);
    for (var a = 0; a < storeHours.length; a++) {
      newTD = document.createElement('td');
      newTD.innerText = this.cookieCount[a];
      newTR.appendChild(newTD);
    }
    return newTR;
  };
  this.updateStore = function(newMin, newMax, newAvg, i) {
    this.minCust = newMin;
    this.maxCust = newMax;
    this.avgC = newAvg;
    this.cookieCount = [];
    var tBody = document.getElementsByTagName('tbody')[0];
    tBody.removeChild(tBody.childNodes[i]);
    tBody.insertBefore(this.render(), tBody.childNodes[i]);
  };
  storeList.push(this);
}

var pikeShop = new CookieShop(23, 65, 6.3, 'First and Pike');
var airportShop = new CookieShop(3, 24, 1.2, 'Airport');
var centerShop = new CookieShop(11, 38, 3.7, 'Seattle Center');
var hillShop = new CookieShop(20, 38, 2.3, 'Capitol Hill');
var alkiShop = new CookieShop(2, 16, 4.6, 'Alki');

function tableHead() {
  var newTHead = document.createElement('thead');
  var newTR = document.createElement('tr');
  var newTH = document.createElement('th');
  newTH.innerText = 'Store Name';
  newTR.appendChild(newTH);
  for (var c = 0; c < storeHours.length; c++) {
    newTH = document.createElement('th');
    newTH.innerText = storeHours[c];
    newTR.appendChild(newTH);
  }
  newTHead.appendChild(newTR);
  return newTHead;
}

function tableFoot() {
  var newTR = document.createElement('tr');
  var newTD = document.createElement('td');
  newTD.innerText = 'Totals';
  newTR.appendChild(newTD);
  for (var c = 0; c < storeHours.length; c++) {
    var hourlyTotal = 0;
    for (var i = 0; i < storeList.length; i++) {
      hourlyTotal += storeList[i].cookieCount[c];
    }
    newTD = document.createElement('td');
    newTD.innerText = hourlyTotal;
    newTR.appendChild(newTD);
  }
  return newTR;
}

function genTable() {
  var pageBody = document.getElementsByTagName('body')[0];
  var newTable = document.createElement('table');
  newTable.appendChild(tableHead());
  var newTBody = document.createElement('tbody');
  for (var b = 0; b < storeList.length; b++) {
    newTBody.appendChild(storeList[b].render());
  }
  newTBody.appendChild(tableFoot());
  newTable.appendChild(newTBody);
  pageBody.appendChild(newTable);
}

genTable();

function findStore(name) {
  for (var i = 0; i < storeList.length; i++) {
    if (name === storeList[i].storeName) {
      return i;
    }
  }
  return false;
}

var storeForm = document.getElementById('newStoreForm');

function addToTable(event){
  event.preventDefault();
  var newStoreForm = event.target;
  var storeLoc = newStoreForm.elements['storeLoc'].value;
  var min = Math.floor(newStoreForm.elements['min'].value);
  var max = Math.floor(newStoreForm.elements['max'].value);
  var average = newStoreForm.elements['average'].value;
  var warning = document.getElementById('errorText');
  var checkForStore = findStore(storeLoc);
  storeForm.appendChild(warning);
  if (isNaN(min) || isNaN(max) || isNaN(average)) {
    warning.innerText = 'Please enter only a number for the minimum, maximum, and average';
  }
  else if (min > max) {
    warning.innerText = 'Please enter a larger maximum than minimum customers';
  }
  else if (checkForStore) {
    storeList[checkForStore].updateStore(min, max, average, checkForStore);
  }
  else {
    warning.innerText = '';
    var newShop = new CookieShop(min, max, average, storeLoc);
    var tBody = document.getElementsByTagName('tbody')[0];
    tBody.removeChild(tBody.lastChild);
    tBody.appendChild(newShop.render());
    tBody.appendChild(tableFoot());
    newStoreForm.reset();
  }
};

storeForm.addEventListener('submit', addToTable);
