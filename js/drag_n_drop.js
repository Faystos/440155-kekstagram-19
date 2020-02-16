'use strict';

(function () {
  var pinFilter = document.querySelector('.effect-level__pin');
  var scaleControlValue = document.querySelector('.scale__control--value');
  var scaleControlValueStart = scaleControlValue.value;
  var effectsRadio = document.querySelectorAll('.effects__radio');

  
  pinFilter.addEventListener('mousedown', handlerMouseDown);
  /*
  pinFilter.addEventListener('mouseup', handlerMouseUp);
  function handlerMouseUp() {
    var fullPercent = 100;
    var effectLevelLine = document.querySelector('.effect-level__line');
    var effectLevelDepth = document.querySelector('.effect-level__depth');
    var proportion = Math.floor((effectLevelDepth.offsetWidth / effectLevelLine.offsetWidth) * fullPercent);
    scaleControlValue.value = proportion + '%';
  }
  */

  function handlerMouseDown(evt) {
    evt.preventDefault();
    var startpPosition = evt.clientX;
    pinFilter.addEventListener('mousemove', handlerMouseMove);
    pinFilter.addEventListener('mouseup', function() {
      pinFilter.removeEventListener('mousemove', handlerMouseMove);
    });


    function handlerMouseMove(moveEvt) {  
      moveEvt.preventDefault();
      var shift = startpPosition - moveEvt.clientX;
      
      startpPosition = moveEvt.clientX;

      var newPos = pinFilter.offsetLeft - shift;

      pinFilter.style.left = newPos + 'px';
      console.log(pinFilter);
    }
  }


  





  effectsRadio.forEach(function (el) {
    el.addEventListener('change', function () {
      scaleControlValue.value = scaleControlValueStart;
    });
  });
})();
