'use strict';

(function () {
  var scaleControlValue = document.querySelector('.scale__control--value');
  var btnScaleControlBigger = document.querySelector('.scale__control--bigger');
  var btnScaleControlSmaller = document.querySelector('.scale__control--smaller');
  var imgUploadPreview = document.querySelector('.img-upload__preview');
  var scaleParamentrs = {
    step: 25,
    maxPosition: 100,
    minPosition: 25,
  };


  btnScaleControlBigger.addEventListener('click', function (evt) {
    evt.preventDefault();
    onСhangeScale('bigger');
  });

  btnScaleControlSmaller.addEventListener('click', function (evt) {
    evt.preventDefault();
    onСhangeScale('smaller');
  });

  function onСhangeScale(nameBtn) {
    var scaleСhange = '';
    var transformScale = '';
    if (nameBtn === 'bigger') {
      if (window.itemPhotoData.defaultScale >= scaleParamentrs.maxPosition) {
        return;
      }
      scaleСhange = window.itemPhotoData.defaultScale += scaleParamentrs.step;
      transformScale = scaleСhange / 100;
      scaleControlValue.value = window.itemPhotoData.defaultScale + '%';
      imgUploadPreview.style.transform = 'scale(' + transformScale + ')';
    }

    if (nameBtn === 'smaller') {
      if (window.itemPhotoData.defaultScale <= scaleParamentrs.minPosition) {
        return;
      }
      scaleСhange = window.itemPhotoData.defaultScale -= scaleParamentrs.step;
      transformScale = scaleСhange / 100;
      scaleControlValue.value = window.itemPhotoData.defaultScale + '%';
      imgUploadPreview.style.transform = 'scale(' + transformScale + ')';
    }
  }

})();
