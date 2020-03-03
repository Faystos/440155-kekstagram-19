'use strict';

(function () {

  var ESC = 27;
  var ENTER = 13;
  var START_POSITION = 0;
  var WIDTH_EFFECT_LEVEL_LINE = 453;
  var MAX_COMMENT = 5;

  window.itemPhotoData = {
    ESC: ESC,
    ENTER: ENTER,
    START_POSITION: START_POSITION,
    WIDTH_EFFECT_LEVEL_LINE: WIDTH_EFFECT_LEVEL_LINE,
    MAX_COMMENT: MAX_COMMENT,
    openErroreWindow: openErroreWindow
  };

  function openErroreWindow() {
    var errorWindow = document.querySelector('#error').content.children[0].cloneNode(true);
    document.querySelector('main').appendChild(errorWindow);
    document.addEventListener('keydown', function (evt) {
      if (!document.querySelector('.error__inner')) {
        return;
      } else {
        if (evt.keyCode === window.itemPhotoData.ESC) {
          errorWindow.remove();
        }
      }
    });
    errorWindow.addEventListener('click', function () {
      errorWindow.remove();
    });
  }
})();
