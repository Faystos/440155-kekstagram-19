'use strict';

(function () {
  var blockBigPhoto = document.querySelector('.big-picture');
  var pictureCancelBtn = document.querySelector('.big-picture__cancel');
  var commentsList = document.querySelector('.social__comments');
  var socialCommentCount = document.querySelector('.social__comment-count');
  var loadComm = document.querySelector('.social__comments-loader');

  function showBigPhoto(data, step) {
    openBlockBigPhoto(data, step);
  }

  function openBlockBigPhoto(data, countStep) {
    blockBigPhoto.classList.remove('hidden');
    document.body.classList.add('modal-open');
    loadComm.classList.remove('hidden');
    commentsList.innerHTML = '';
    var bigPhoto = blockBigPhoto.querySelector('img');
    var socialLikes = blockBigPhoto.querySelector('.social__likes .likes-count');
    var photoDescr = document.querySelector('.social__caption');
    bigPhoto.src = data.url;
    socialLikes.textContent = data.likes;
    photoDescr.textContent = data.description;

    displayingСomments(data, countStep);

    loadComm.addEventListener('click', handlerLoadComm);

    function handlerLoadComm(evt) {
      evt.preventDefault();
      countStep += window.itemPhotoData.MAX_COMMENT;
      if (countStep >= data.comments.length) {
        countStep = data.comments.length;
        loadComm.classList.add('hidden');
        loadComm.removeEventListener('click', handlerLoadComm);
      }
      renderloadComment(data, countStep);
    }

    pictureCancelBtn.addEventListener('click', closeBlockBigPhoto);
    document.addEventListener('keydown', closeBtnBlockBigPhoto);

    function closeBlockBigPhoto(evt) {
      evt.preventDefault();
      if (!blockBigPhoto.classList.contains('hidden')) {
        closeBigPhoto();
      }
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

    function closeBigPhoto() {
      if (document.querySelector('.social__footer-text') === document.activeElement) {
        return;
      }
      blockBigPhoto.classList.add('hidden');
      document.body.classList.remove('modal-open');
      loadComm.removeEventListener('click', handlerLoadComm);
    }
  }

  function displayingСomments(data, step) {
    if (step >= data.comments.length) {
      step = data.comments.length;
      loadComm.classList.add('hidden');
    }
    renderloadComment(data, step);
  }

  function renderloadComment(arr, countComm) {
    commentsList.innerHTML = '';
    socialCommentCount.textContent = countComm + ' из ' + arr.comments.length + ' комментариев';

    for (var i = 0; i < countComm; i++) {
      var itemList = document.createElement('li');
      itemList.classList = 'social__comment';

      var avatarComment = document.createElement('img');
      avatarComment.classList = 'social__picture';
      avatarComment.src = arr.comments[i].avatar;
      avatarComment.alt = arr.comments[i].name;

      var commentText = document.createElement('p');
      commentText.classList = 'social__text';
      commentText.textContent = arr.comments[i].message;

      itemList.appendChild(avatarComment);
      itemList.appendChild(commentText);
      commentsList.appendChild(itemList);

    }
  }

  window.bigBlok = showBigPhoto;
})();
