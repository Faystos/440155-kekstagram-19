'use strict';

(function () {
  var blockPictures = document.querySelector('.pictures');
  var blockPhotoTemp = document.querySelector('#picture').content.querySelector('.picture');


  var getReq = window.request.myRequest;
  getReq.getRequest('https://js.dump.academy/kekstagram/data', onReq, onErr);


  function onReq(res) {
    var arrPhotos = res.slice();
    renderPhoto(arrPhotos);
    window.bigBlok(res);
    
  }


  function onErr() {

  }

  function renderPhoto(data) {
    for (var i = 0; i < data.length; i++) {
      var photoItems = blockPhotoTemp.cloneNode(true);
      var pictureComments = photoItems.querySelector('.picture__comments');
      var pictureLikes = photoItems.querySelector('.picture__likes');
      var photoItemImg = photoItems.querySelector('.picture__img');
      photoItemImg.src = data[i].url;
      pictureComments.textContent = data[i].comments.length;
      pictureLikes.textContent = data[i].likes;
      blockPictures.appendChild(photoItems);
    }
  }
})();


