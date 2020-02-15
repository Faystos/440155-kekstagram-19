'use strict';

(function () {
  var uploadFile = document.querySelector('#upload-file');
  var imgUploadOverlay = document.querySelector('.img-upload__overlay');
  var btnUploadCancel = document.querySelector('#upload-cancel');
  uploadFile.addEventListener('change', openImgUploadOverlay);
  btnUploadCancel.addEventListener('click', closeImgUploadOverlay);
  document.addEventListener('keydown', closeBtnImgUploadOverlay);

  function openImgUploadOverlay(evt) {
    evt.preventDefault();
    imgUploadOverlay.classList.remove('hidden');
  }

  function closeImgUploadOverlay(evt) {
    evt.preventDefault();
    closeUploadOverlay();
  }

  function closeUploadOverlay() {
    imgUploadOverlay.classList.add('hidden');
    uploadFile.value = '';
  }

  function closeBtnImgUploadOverlay(evt) {
    if (imgUploadOverlay.classList.contains('hidden')) {
      return;
    } else {
      if (evt.keyCode === window.itemPhotoData.ESC) {
        closeUploadOverlay();
      }
    }
  }
})();
