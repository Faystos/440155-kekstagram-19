'use strict';

(function () {
  var uploadFile = document.querySelector('#upload-file');
  var imgUploadOverlay = document.querySelector('.img-upload__overlay');
  var btnUploadCancel = document.querySelector('#upload-cancel');
  var inpTextHashtags = document.querySelector('.text__hashtags');
  var inpTextDescription = document.querySelector('.text__description');

  uploadFile.addEventListener('change', openImgUploadOverlay);
  btnUploadCancel.addEventListener('click', closeImgUploadOverlay);
  document.addEventListener('keydown', closeBtnImgUploadOverlay);

  function openImgUploadOverlay(evt) {
    evt.preventDefault();
    imgUploadOverlay.classList.remove('hidden');
    window.defaultPositionBlockPreview.defaultBlockPreview();
    window.onUploadPhoto(uploadFile);
  }

  function closeImgUploadOverlay(evt) {
    evt.preventDefault();
    document.querySelector('.img-upload__form').reset();
    closeUploadOverlay();
  }

  function closeUploadOverlay() {
    if (inpTextHashtags === document.activeElement || inpTextDescription === document.activeElement) {
      return;
    }
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

  window.blockUp = {
    closeUploadOverlay: closeUploadOverlay
  };
})();
