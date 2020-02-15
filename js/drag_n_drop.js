'use strict';

(function () {
  var pinFilter = document.querySelector('.effect-level__pin');
  var scaleControlValue = document.querySelector('.scale__control--value');
  var scaleControlValueStart = scaleControlValue.value;
  var effectsRadio = document.querySelectorAll('.effects__radio');

  pinFilter.addEventListener('mouseup', handlerMouseUp);

  function handlerMouseUp() {
    var fullPercent = 100;
    var effectLevelLine = document.querySelector('.effect-level__line');
    var effectLevelDepth = document.querySelector('.effect-level__depth');
    var proportion = Math.floor((effectLevelDepth.offsetWidth / effectLevelLine.offsetWidth) * fullPercent);
    scaleControlValue.value = proportion + '%';
  }

  effectsRadio.forEach(function (el) {
    el.addEventListener('change', function () {
      scaleControlValue.value = scaleControlValueStart;
    });
  });
})();
