'use strict';
(function () {
  var formImgUpload = document.querySelector('.img-upload__form');
  var hTagsInp = document.querySelector('.text__hashtags');
  var btnFormSubmit = document.querySelector('.img-upload__submit');
  var req = window.request.myRequest;

  var hTagOption = {
    VALUE_START: 0,
    VALUE_MAX: 20,
    VALUE_MIN: 2,
    MAX_HTAGS: 5,
    HTAG_SPACE: 1
  };

  btnFormSubmit.addEventListener('click', handlerBtnSubmit);
  hTagsInp.addEventListener('input', function () {
    hTagsInp.setCustomValidity('');
  });

  function validityInpHtag(hTag) {
    if (hTag[hTagOption.VALUE_START] !== '#') {
      hTagsInp.setCustomValidity('начни с #!');
      return false;
    } else if (hTag.length < hTagOption.VALUE_MIN) {
      hTagsInp.setCustomValidity('Слишком короткий хеш-тег!');
      return false;
    } else if (hTag.length > hTagOption.VALUE_MAX) {
      hTagsInp.setCustomValidity('Слишком длинный хеш-тег!');
      return false;
    } else if (hTag.indexOf('#', hTagOption.HTAG_SPACE) > hTagOption.VALUE_START) {
      hTagsInp.setCustomValidity('Слитные хештеги, разделите пробелом!');
      return false;
    }
    return true;
  }

  function handlerBtnSubmit(evt) {
    if (hTagsInp.value !== '') {
      var hTagArr = hTagsInp.value.toLowerCase().split(' ');
      for (var i = 0; i < hTagArr.length; i++) {
        var alidityTag = validityInpHtag(hTagArr[i]);
        if (!alidityTag) {
          break;
        }
        var nextTagPosition = i++;
        if (hTagArr.indexOf(hTagArr[i], nextTagPosition) > 0) {
          hTagsInp.setCustomValidity('Одинаковые хеш-теги не приемлемы!');
          break;
        }
      }
      if (hTagArr.length > 5) {
        hTagsInp.setCustomValidity('Слишком много хеш-тегов!');
      }
    }
    if (!hTagsInp.validationMessage) {
      evt.preventDefault();
      var formData = new FormData(formImgUpload);
      req.postRequest('https://js.dump.academy/kekstagram', onSuccessUpload, onErrorUpload, formData);
    }
  }

  function onSuccessUpload() {
    window.blockUp.closeUploadOverlay();
    window.itemPhotoData.openWindow('success');
  }

  function onErrorUpload() {
    window.blockUp.closeUploadOverlay();
    window.itemPhotoData.openWindow('error');
  }
})();
