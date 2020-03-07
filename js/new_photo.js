'use strict';

(function () {
  var photo = document.querySelector('.img-upload__preview img');
  var effectList = document.querySelectorAll('.effects__preview');

  function onuploadPhoto(chooserPhoto) {
    var file = chooserPhoto.files[0];
    uploadNewPhoto(file);
  }

  function uploadNewPhoto(file) {
    var fileName = file.name.toLowerCase();
    var matches = matchesFileName(fileName);
    if (matches) {
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        photo.src = reader.result;
        [].forEach.call(effectList, function (effectPhoto) {
          effectPhoto.style.backgroundImage = 'url(' + reader.result + ')';
        });
      });
      reader.readAsDataURL(file);
    }
  }

  function matchesFileName(name) {
    return window.itemPhotoData.TYPE_FILES.some(function (el) {
      return name.endsWith(el);
    });
  }

  window.onuploadPhoto = onuploadPhoto;
})();
