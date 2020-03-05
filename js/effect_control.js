'use strict';

(function () {
  var pinFilter = document.querySelector('.effect-level__pin');
  var inpEffectNone = document.querySelector('#effect-none');
  var blockEffectLevel = document.querySelector('.img-upload__effect-level');
  var pinMaxPosition = window.itemPhotoData.WIDTH_EFFECT_LEVEL_LINE;
  var depthFilter = document.querySelector('.effect-level__depth');
  var effectsRadio = document.querySelectorAll('.effects__radio');
  var previewPhoto = document.querySelector('.img-upload__preview');
  var effectLevelValue = document.querySelector('.effect-level__value');
  var scaleControlValue = document.querySelector('.scale__control--value');
  var effectFilter = {
    none: {
      class: 'effects__preview--none',
      style: 'none',
      max: 0,
      min: 0
    },
    chrome: {
      class: 'effects__preview--chrome',
      style: 'grayscale',
      max: 1,
      min: 0
    },
    sepia: {
      class: 'effects__preview--sepia',
      style: 'sepia',
      max: 1,
      min: 0
    },
    marvin: {
      class: 'effects__preview--marvin',
      style: 'invert',
      max: 100,
      min: 0,
      postFix: '%'
    },
    phobos: {
      class: 'effects__preview--phobos',
      style: 'blur',
      max: 3,
      min: 0,
      postFix: 'px'
    },
    heat: {
      class: 'effects__preview--heat',
      style: 'brightness',
      max: 3,
      min: 1
    }
  };

  window.defaultPositionBlockPreview = {
    defaultBlockPreview: defaultBlockPreview
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
      document.removeEventListener('mousemove', handlerMouseMove);
      document.removeEventListener('mouseup', handlerMouseUp);
    }
  }

  effectsRadio.forEach(function (el) {
    el.addEventListener('change', function () {
      if (el.value === 'none') {
        previewPhoto.removeAttribute('style');
      }
      changingSliderPosition(pinMaxPosition);
      previewPhoto.classList = 'img-upload__preview';
      previewPhoto.classList.add(effectFilter[el.value].class);
      proportionShiftFilterEffect(effectFilter[el.value].max, effectFilter[el.value].min, effectFilter[el.value].style, pinMaxPosition, effectFilter[el.value].postFix);
      showBlockEffectLevel(el);
    });
  });

  function changingSliderPosition(valuePosition) {
    pinFilter.style.left = valuePosition + 'px';
    depthFilter.style.width = valuePosition + 'px';
  }

  function proportionShiftFilterEffect(max, min, filter, position, postFixFilter) {
    var postFix = postFixFilter || '';
    var proportion = (max - min) * (position / 450) + min;
    var change = '' + filter + '(' + proportion + postFix + ')';
    previewPhoto.style.filter = change;
    effectLevelValue.value = proportion;
  }

  function showBlockEffectLevel(el) {
    if (el.value === 'none') {
      blockEffectLevel.classList.add('hidden');
    } else {
      blockEffectLevel.classList.remove('hidden');
    }
  }

  function defaultBlockPreview() {
    changingSliderPosition(pinMaxPosition);
    inpEffectNone.checked = 'checked';
    previewPhoto.classList = 'img-upload__preview';
    previewPhoto.removeAttribute('style');
    previewPhoto.classList.add('hidden');
    blockEffectLevel.classList.add('hidden');
    scaleControlValue.value = 50 + '%';
    previewPhoto.style.transform = 'none';
    window.itemPhotoData.defaultScale = 50;
  }
})();
