'use strict';

(function () {
  var pinFilter = document.querySelector('.effect-level__pin');
  var pinDefaultPosition = (window.itemPhotoData.WIDTH_EFFECT_LEVEL_LINE / window.itemPhotoData.FULL_PERCENT) *  window.itemPhotoData.QUARTER_PERCENT;
  var depthFilter = document.querySelector('.effect-level__depth');
  var scaleControlValue = document.querySelector('.scale__control--value');
  var scaleControlValueStart = scaleControlValue.value;
  var effectsRadio = document.querySelectorAll('.effects__radio');
  var preview = document.querySelector('.img-upload__preview');
  var effectFilter = {
    none: {
      style: 'none',
      max: 0,
      min: 0
    },
    chrome: {
      style: 'grayscale',
      max: 1,
      min: 0
    },
    sepia: {
      style: 'sepia',
      max: 1,
      min: 0
    },
    marvin: {
      style: 'invert',
      max: 100,
      min: 0,
      postFix: '%'
    },
    phobos: {
      style: 'blur',
      max: 3,
      min: 0,
      postFix: 'px'
    },
    heat: {
      style: 'brightness',
      max: 3,
      min: 1
    }
  };

  pinFilter.addEventListener('mousedown', handlerMouseDown);

  function handlerMouseDown(evt) {
    evt.preventDefault();
    var startPosition = evt.clientX;
    document.addEventListener('mousemove', handlerMouseMove);
    document.addEventListener('mouseup', handlerMouseUp);

    function handlerMouseMove(moveEvt) {
      moveEvt.preventDefault();
      var shift = startPosition - moveEvt.clientX;
      var filterChecked = document.querySelector('input[type="radio"]:checked').value;
      startPosition = moveEvt.clientX;
      var newPos = pinFilter.offsetLeft - shift;
      if (newPos <= window.itemPhotoData.START_POSITION) {
        newPos = window.itemPhotoData.START_POSITION;
      }
      if (newPos > window.itemPhotoData.WIDTH_EFFECT_LEVEL_LINE) {
        newPos = window.itemPhotoData.WIDTH_EFFECT_LEVEL_LINE;
      }
      changingSliderPosition(newPos);
      proportionShiftFilterEffect(effectFilter[filterChecked].max, effectFilter[filterChecked].min, effectFilter[filterChecked].style, newPos, effectFilter[filterChecked].postFix);
    }

    function handlerMouseUp(upEvt) {
      upEvt.preventDefault();
      calculationProcent();
      document.removeEventListener('mousemove', handlerMouseMove);
      document.removeEventListener('mouseup', handlerMouseUp);
    }
  }

  effectsRadio.forEach(function (el) {
    el.addEventListener('change', function () {
      scaleControlValue.value = scaleControlValueStart;
      changingSliderPosition(pinDefaultPosition);
      if (el.value === 'none') {
        preview.removeAttribute('style');
      }
      proportionShiftFilterEffect(effectFilter[el.value].max, effectFilter[el.value].min, effectFilter[el.value].style, pinFilter.offsetLeft, effectFilter[el.value].postFix);
    });
  });

  function calculationProcent() {
    var fullPercent = 100;
    var effectLevelLine = document.querySelector('.effect-level__line');
    var effectLevelDepth = document.querySelector('.effect-level__depth');
    var proportion = Math.ceil((effectLevelDepth.offsetWidth / effectLevelLine.offsetWidth) * fullPercent);
    scaleControlValue.value = proportion + '%';
  }

  function changingSliderPosition(valuePosition) {
    pinFilter.style.left = valuePosition + 'px';
    depthFilter.style.width = valuePosition + 'px';
  }

  function proportionShiftFilterEffect(max, min, filter, position, postFixFilter) {
    var postFix = postFixFilter || '';
    var proportion = (max - min) * (position / 450) + min;
    var change = '' + filter + '(' + proportion + postFix + ')';
    preview.style.filter = change;
  }
})();
