'use strict';

(function () {
  var blockPictures = document.querySelector('.pictures');
  var blockPhotoTemp = document.querySelector('#picture').content.querySelector('.picture');
  // createPhotoItems();


  var getReq = window.request.myRequest;
  getReq.getRequest('https://js.dump.academy/kekstagram/data', onReq, onErr);


  function onReq(res) {
    res.forEach(function (el) {
      var photoItems = blockPhotoTemp.cloneNode(true);
      var pictureComments = photoItems.querySelector('.picture__comments');
      var pictureLikes = photoItems.querySelector('.picture__likes');
      var photoItemImg = photoItems.querySelector('.picture__img');
      photoItemImg.src = el.url;
      pictureComments.textContent = el.comments.length;
      pictureLikes.textContent = el.likes;
      blockPictures.appendChild(photoItems);
    });
  }

  function onErr() {

  }
  /*
  function createPhotoItems(res) {
    for (var i = 0; i < res.length; i++) {
      var photoItems = blockPhotoTemp.cloneNode(true);
      var pictureComments = photoItems.querySelector('.picture__comments');
      var pictureLikes = photoItems.querySelector('.picture__likes');
      var photoItemImg = photoItems.querySelector('.picture__img');
      photoItemImg.src = res[i].url;
      pictureComments.textContent = res[i].comments.length;
      pictureLikes.textContent = res[i].likes;
      blockPictures.appendChild(photoItems);
    }
  }
  */

  /*
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
  */

})();
