'use strict';

// Took this for an automatic slideshow from W3Schools and adapted it to include a rotating caption with the image

var slideShowIndex = 0;
slideShow();

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
