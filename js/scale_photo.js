'use strict';

(function () {
  var scaleControlValue = document.querySelector('.scale__control--value');
  var btnScaleControlBigger = document.querySelector('.scale__control--bigger');
  var btnScaleControlSmaller = document.querySelector('.scale__control--smaller');
  var imgUploadPreview = document.querySelector('.img-upload__preview');
  var scaleParamentrs = {
    step: 25,
    maxPos: 100,
    minPos: 25,
  };


  btnScaleControlBigger.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (parseInt(window.itemPhotoData.defaultScale, 10) >= scaleParamentrs.maxPos) {
      return;
    }

    var scaleBigger = window.itemPhotoData.defaultScale += scaleParamentrs.step;
    var transformScale = scaleBigger / 100;
    scaleControlValue.value = window.itemPhotoData.defaultScale + '%';
    imgUploadPreview.style.transform = 'scale(' + transformScale + ')';
  });

  btnScaleControlSmaller.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (window.itemPhotoData.defaultScale <= scaleParamentrs.minPos) {
      return;
    }

    var scaleSmaller = window.itemPhotoData.defaultScale -= scaleParamentrs.step;
    var transformScale = scaleSmaller / 100;
    scaleControlValue.value = window.itemPhotoData.defaultScale + '%';
    imgUploadPreview.style.transform = 'scale(' + transformScale + ')';
  });

})();
