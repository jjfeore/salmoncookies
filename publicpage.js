'use strict';

// Took this for an automatic slideshow from W3Schools and adapted it to include a rotating caption with the image

var slideShowIndex = 0;

function slideShow() {
  var imageList = document.getElementsByClassName('slideshow');
  var capList = document.getElementsByClassName('about-cap');
  for (var i = 0; i < imageList.length; i++) {
    imageList[i].style.display = 'none';
    capList[i].style.display = 'none';
  }
  if (slideShowIndex === imageList.length) {
    slideShowIndex = 0;
  }
  imageList[slideShowIndex].style.display = 'block';
  capList[slideShowIndex].style.display = 'block';
  slideShowIndex++;
  setTimeout(slideShow, 5000);
}

var merchShowIndex = 0;
var merchLinks = ['https://www.amazon.com/Salmon-Cookie-Durable-Economical-Tinplated/dp/B000U3RL5O/ref=sr_1_3?ie=UTF8&qid=1489767740&sr=8-3&keywords=salmon+cookie+cutter','https://www.amazon.com/RAINBOW-TROUT-fishing-hunting-stream/dp/B01MTD927J/ref=sr_1_13?ie=UTF8&qid=1489768180&sr=8-13&keywords=fish+t-shirt'];

function merchShow() {
  var imageList = document.getElementsByClassName('merch-slide');
  var imageLink = document.getElementById('merch-link');
  for (var i = 0; i < imageList.length; i++) {
    imageList[i].style.display = 'none';
  }
  if (merchShowIndex === imageList.length) {
    merchShowIndex = 0;
  }
  imageList[merchShowIndex].style.display = 'block';
  imageLink.href = merchLinks[merchShowIndex];
  merchShowIndex++;
  setTimeout(merchShow, 5000);
}

slideShow();
merchShow();
