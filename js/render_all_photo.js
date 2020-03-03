'use strict';

(function () {
  var blockPictures = document.querySelector('.pictures');
  var blockPhotoTemp = document.querySelector('#picture').content.querySelector('.picture');


  var getRequest = window.request.myRequest;
  getRequest.getRequest('https://js.dump.academy/kekstagram/data', onResponse, onErr);


  function onResponse(res) {
    var arrPhotos = res.slice();
    renderAllPhoto(arrPhotos);
  }


  function onErr() {
    window.itemPhotoData.openErroreWindow();
  }

  function createPhoto(arrEl) {
    var photoItems = blockPhotoTemp.cloneNode(true);
    var pictureComments = photoItems.querySelector('.picture__comments');
    var pictureLikes = photoItems.querySelector('.picture__likes');
    var photoItemImg = photoItems.querySelector('.picture__img');
    photoItemImg.src = arrEl.url;
    pictureComments.textContent = arrEl.comments.length;
    pictureLikes.textContent = arrEl.likes;
    return photoItems;
  }

  function renderAllPhoto(items) {
    var fragmentPhoto = document.createDocumentFragment();
    items.forEach(function (el) {
      var photo = createPhoto(el);
      photo.addEventListener('click', function (evt) {
        evt.preventDefault();
        var countStep = el.comments.length > window.itemPhotoData.MAX_COMMENT ? window.itemPhotoData.MAX_COMMENT : el.comments.length;
        window.bigBlok(el, countStep);
      });
      fragmentPhoto.appendChild(photo);
    });
    blockPictures.appendChild(fragmentPhoto);


  }

})();


