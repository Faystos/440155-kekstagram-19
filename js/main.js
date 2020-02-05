'use strict';

var ESC = 27;
var blockPhotoTemp = document.querySelector('#picture').content.querySelector('.picture');
var blockPictures = document.querySelector('.pictures');
// document.querySelector('.big-picture').classList.remove('hidden');
document.body.classList.add('modal-open');
createPhotoItems();

// ***************************************
var uploadFile = document.querySelector('#upload-file');
var imgUploadOverlay = document.querySelector('.img-upload__overlay');
var btnUploadCancel = document.querySelector('#upload-cancel');

uploadFile.addEventListener('change', openImgUploadOverlay);
btnUploadCancel.addEventListener('click', closeImgUploadOverlay);

document.addEventListener('keydown', closeBtnImgUploadOverlay);
// ***************************************
var pinFilter = document.querySelector('.effect-level__pin');
var scaleControlValue = document.querySelector('.scale__control--value');
var scaleControlValueStart = scaleControlValue.value;
var effectsRadio = document.querySelectorAll('.effects__radio');
// ***************************************

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

function createPhotoItems() {
  var obPhotos = createObjPhoto();
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
  openBigPicture(obPhotos);
}

function openBigPicture(photos) {
  var socialPictures = document.querySelectorAll('.social__comments .social__picture');
  var socialComentText = document.querySelectorAll('.social__comments .social__text');

  socialPictures.forEach(function (el) {
    el.src = photos[getRandomInt(0, 5)].avatar;
    el.alt = photos[getRandomInt(0, 5)].name;
  });

  socialComentText.forEach(function (el) {
    el.textContent = photos[getRandomInt(0, 5)].comment;
  });
}

// работа с загрузкой фото;
function closeImgUploadOverlay(evt) {
  evt.preventDefault();
  imgUploadOverlay.classList.add('hidden');
  uploadFile.value = '';
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
      imgUploadOverlay.classList.add('hidden');
      uploadFile.value = '';
    }
  }
}

// расчет пропорции ползунка.
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
var form = document.querySelector('#upload-select-image');
var hashTagsInp = document.querySelector('.text__hashtags');
var btnSubmit = document.querySelector('.img-upload__submit');

btnSubmit.addEventListener('click', handlerBtnSubmit);

hashTagsInp.addEventListener('input', function () {
  hashTagsInp.setСustomValidity('');
});

// Функция валидации
function customValidityTag(hTag) {
  if (hTag[0] !== '#') {
    hashTagsInp.setCustomValidity('начни писать текст с #!');
    return false;
  } else if (hTag.length < 2) {
    hashTagsInp.setCustomValidity('Не хватает символов!');
    return false;
  } else if (hTag.length > 20) {
    hashTagsInp.setCustomValidity('Слишком много символов');
    return false;
  } else if (hTag.indexOf('#', 1) > 0) {
    hashTagsInp.setCustomValidity('Слитные хештеги, разделите пробелом!');
    return false;
  }
  return true;
}

// Функция субмита формы
function handlerBtnSubmit(evt) {
  if (hashTagsInp.value !== '') {
    var hTagArr = hashTagsInp.value.toLowerCase().split(' ');
    for (var i = 0; i < hTagArr.length; i++) {
      var alidityTag = customValidityTag(hTagArr[i]);
      if (!alidityTag) {
        break;
      }
      var nextTagPosition = i++;
      if (hTagArr.indexOf(hTagArr[i], nextTagPosition) > 0) {
        hashTagsInp.setСustomValidity('Повторение хештегов не приемлемо');
        break;
      }
    }
    if (hTagArr.length > 5) {
      hashTagsInp.setСustomValidity('Не бошьше 5 хештегов');
    }
  }
  if (!hashTagsInp.validationMessage) {
    evt.preventDefault();       
    console.log('письмо ушло');
  }
}

