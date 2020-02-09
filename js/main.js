'use strict';

// var ESC = 27;
// var blockPhotoTemp = document.querySelector('#picture').content.querySelector('.picture');
// var blockPictures = document.querySelector('.pictures');

// createPhotoItems();

// Обработка открытия блока с большой фото.
/*
var linkMainPhotos = document.querySelectorAll('.picture');
var blockBigPhoto = document.querySelector('.big-picture');
var pictureCancelBtn = document.querySelector('.big-picture__cancel');
var socialPictures = document.querySelectorAll('.social__comments .social__picture');
var socialComentText = document.querySelectorAll('.social__comments .social__text');

linkMainPhotos.forEach(function (el) {
  el.addEventListener('click', handlerLinkMainPhoto);

  document.addEventListener('keydown', function (evt) {
    if (evt.target !== el) {
      return;
    }
    if (evt.keyCode === 13) {
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
  var objPhotos = createObjPhoto();
  var bigPhoto = blockBigPhoto.querySelector('img');
  var socialLikes = blockBigPhoto.querySelector('.social__likes .likes-count');
  var linkMain = aim;
  var mainPhotoLike = linkMain.querySelector('.picture__likes').textContent;
  var mainPhotoSrc = linkMain.querySelector('.picture__img');
  bigPhoto.src = mainPhotoSrc.src;
  socialLikes.textContent = mainPhotoLike;
  displayingСomments(objPhotos);

  //
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
}

*/

// ***************************************

var uploadFile = document.querySelector('#upload-file');
var imgUploadOverlay = document.querySelector('.img-upload__overlay');
var btnUploadCancel = document.querySelector('#upload-cancel');

uploadFile.addEventListener('change', openImgUploadOverlay);
btnUploadCancel.addEventListener('click', closeImgUploadOverlay);
pictureCancelBtn.addEventListener('click', closeBlockBigPhoto);

document.addEventListener('keydown', closeBtnImgUploadOverlay);
document.addEventListener('keydown', closeBtnBlockBigPhoto);

// ***************************************

var pinFilter = document.querySelector('.effect-level__pin');
var scaleControlValue = document.querySelector('.scale__control--value');
var scaleControlValueStart = scaleControlValue.value;
var effectsRadio = document.querySelectorAll('.effects__radio');

// ***************************************
/*

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

// ***************************************
/*
function createObjPhoto() {
  var objPhoto = {};
  var photos = [];
  var comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.,',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  var names = [
    'Артем',
    'Матвей',
    'Максим',
    'Толян',
    'Виктор'
  ];

  for (var i = 1; i < 26; i++) {
    var avatar = 'img/avatar-' + i + '.svg';
    var comment = comments[Math.floor(Math.random() * comments.length)];
    var name = names[Math.floor(Math.random() * names.length)];

    objPhoto = {
      avatar: avatar,
      comment: comment,
      name: name
    };
    photos.push(objPhoto);
  }
  return photos;
}

*/
// ****************************************************************************
/*
function createPhotoItems() {
  for (var i = 0; i < 25; i++) {
    var photoItems = blockPhotoTemp.cloneNode(true);
    var pictureComments = photoItems.querySelector('.picture__comments');
    var pictureLikes = photoItems.querySelector('.picture__likes');
    var photoItemImg = photoItems.querySelector('.picture__img');
    photoItemImg.src = 'photos/' + (i + 1) + '.jpg';
    pictureComments.textContent = getRandomInt(1, 6);
    pictureLikes.textContent = getRandomInt(15, 200);
    blockPictures.appendChild(photoItems);
  }
}
*/
/*

function displayingСomments(photos) {
  socialPictures.forEach(function (el) {
    el.src = photos[getRandomInt(0, 5)].avatar;
    el.alt = photos[getRandomInt(0, 5)].name;
  });

  socialComentText.forEach(function (el) {
    el.textContent = photos[getRandomInt(0, 5)].comment;
  });
}
*/

//  ****************************************************

// работа с загрузкой фото;
function closeImgUploadOverlay(evt) {
  evt.preventDefault();
  closeUploadOverlay();
}

function closeBlockBigPhoto(evt) {
  evt.preventDefault();
  if (!blockBigPhoto.classList.contains('hidden')) {
    closeBigPhoto();
  }
}

function openImgUploadOverlay(evt) {
  evt.preventDefault();
  imgUploadOverlay.classList.remove('hidden');
}

function closeBtnImgUploadOverlay(evt) {
  if (imgUploadOverlay.classList.contains('hidden')) {
    return;
  } else {
    if (evt.keyCode === ESC) {
      closeUploadOverlay();
    }
  }
}

function closeBtnBlockBigPhoto(evt) {
  if (blockBigPhoto.classList.contains('hidden')) {
    return;
  } else {
    if (evt.keyCode === ESC) {
      closeBigPhoto();
    }
  }
}

function closeUploadOverlay() {
  imgUploadOverlay.classList.add('hidden');
  uploadFile.value = '';
}

function closeBigPhoto() {
  if (document.querySelector('.social__footer-text') === document.activeElement) {
    return;
  }
  blockBigPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

// Расчет пропорции ползунка.
pinFilter.addEventListener('mouseup', handlerMouseUp);

effectsRadio.forEach(function (el) {
  el.addEventListener('change', function () {
    scaleControlValue.value = scaleControlValueStart;
  });
});

function handlerMouseUp() {
  var fullPercent = 100;
  var effectLevelLine = document.querySelector('.effect-level__line');
  var effectLevelDepth = document.querySelector('.effect-level__depth');
  var proportion = Math.floor((effectLevelDepth.offsetWidth / effectLevelLine.offsetWidth) * fullPercent);
  scaleControlValue.value = proportion + '%';
}

// работа с формой
var formImgUpload = document.querySelector('.img-upload__form');
var hTagsInp = document.querySelector('.text__hashtags');
var btnFormSubmit = document.querySelector('.img-upload__submit');

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

// Функция валидации поля хеш-тега.
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

// Функция отправки валидной формы.
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
    formImgUpload.submit();
  }
}

