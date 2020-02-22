'use strict';

(function () {
  var linkMainPhotos = document.querySelectorAll('.picture');
  var blockBigPhoto = document.querySelector('.big-picture');
  var pictureCancelBtn = document.querySelector('.big-picture__cancel');
  var socialPictures = document.querySelectorAll('.social__comments .social__picture');
  var socialComentText = document.querySelectorAll('.social__comments .social__text');
  pictureCancelBtn.addEventListener('click', closeBlockBigPhoto);
  document.addEventListener('keydown', closeBtnBlockBigPhoto);

  linkMainPhotos.forEach(function (el) {
    el.addEventListener('click', handlerLinkMainPhoto);

    document.addEventListener('keydown', function (evt) {
      if (evt.target !== el) {
        return;
      }
      if (evt.keyCode === window.itemPhotoData.ENTER) {
        evt.preventDefault();
        openBlockBigPhoto(evt.target);
      }
    });
  });

  function handlerLinkMainPhoto(evt) {
    evt.preventDefault();
    openBlockBigPhoto(evt.target.parentNode);
  }

  function openBlockBigPhoto(aim) {
    blockBigPhoto.classList.remove('hidden');
    document.body.classList.add('modal-open');
    var objPhotos = window.itemPhotoData.objItemPhoto;
    var bigPhoto = blockBigPhoto.querySelector('img');
    var socialLikes = blockBigPhoto.querySelector('.social__likes .likes-count');
    var linkMain = aim;
    var mainPhotoLike = linkMain.querySelector('.picture__likes').textContent;
    var mainPhotoSrc = linkMain.querySelector('.picture__img');
    bigPhoto.src = mainPhotoSrc.src;
    socialLikes.textContent = mainPhotoLike;
    displayingСomments(objPhotos);


    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');
  }

  function displayingСomments(photos) {
    socialPictures.forEach(function (el) {
      el.src = photos[window.itemPhotoData.getRandomInt(0, 5)].avatar;
      el.alt = photos[window.itemPhotoData.getRandomInt(0, 5)].name;
    });

    socialComentText.forEach(function (el) {
      el.textContent = photos[window.itemPhotoData.getRandomInt(0, 5)].comment;
    });
  }

  function closeBlockBigPhoto(evt) {
    evt.preventDefault();
    if (!blockBigPhoto.classList.contains('hidden')) {
      closeBigPhoto();
    }
  }

  function closeBigPhoto() {
    if (document.querySelector('.social__footer-text') === document.activeElement) {
      return;
    }
    blockBigPhoto.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }

  function closeBtnBlockBigPhoto(evt) {
    if (blockBigPhoto.classList.contains('hidden')) {
      return;
    } else {
      if (evt.keyCode === window.itemPhotoData.ESC) {
        closeBigPhoto();
      }
    }
  }
})();
