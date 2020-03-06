'use strict';

(function () {

  var ESC = 27;
  var ENTER = 13;
  var START_POSITION = 0;
  var WIDTH_EFFECT_LEVEL_LINE = 453;
  var MAX_COMMENT = 5;
  var defaultScale = 50;
  var arrData = [];
  var MAX_RANDOM_PHOTO = 10;
  var DEBOUNCE_INTERVAL = 500;

  window.itemPhotoData = {
    ESC: ESC,
    ENTER: ENTER,
    START_POSITION: START_POSITION,
    WIDTH_EFFECT_LEVEL_LINE: WIDTH_EFFECT_LEVEL_LINE,
    MAX_COMMENT: MAX_COMMENT,
    openWindow: openWindow,
    defaultScale: defaultScale,
    arrData: arrData,
    MAX_RANDOM_PHOTO: MAX_RANDOM_PHOTO,
    DEBOUNCE_INTERVAL: DEBOUNCE_INTERVAL
  };

  function openWindow(id) {
    var blockWindow = document.querySelector('#' + id).content.children[0].cloneNode(true);
    document.querySelector('main').appendChild(blockWindow);
    document.addEventListener('keydown', function (evt) {
      if (!document.querySelector('.' + id)) {
        return;
      } else {
        if (evt.keyCode === window.itemPhotoData.ESC) {
          blockWindow.remove();
        }
      }
    });
    blockWindow.addEventListener('click', function () {
      blockWindow.remove();
    });
  }
})();
