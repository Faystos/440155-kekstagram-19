'use strict';

(function () {
  var blockPictures = document.querySelector('.pictures');
  var blockPhotoTemp = document.querySelector('#picture').content.querySelector('.picture');
  createPhotoItems();

  function createPhotoItems() {
    for (var i = 0; i < 25; i++) {
      var photoItems = blockPhotoTemp.cloneNode(true);
      var pictureComments = photoItems.querySelector('.picture__comments');
      var pictureLikes = photoItems.querySelector('.picture__likes');
      var photoItemImg = photoItems.querySelector('.picture__img');
      photoItemImg.src = 'photos/' + (i + 1) + '.jpg';
      pictureComments.textContent = window.itemPhotoData.getRandomInt(1, 6);
      pictureLikes.textContent = window.itemPhotoData.getRandomInt(15, 200);
      blockPictures.appendChild(photoItems);
    }
  }
})();
