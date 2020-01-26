'use strict';

var blockPhotoTemp = document.querySelector('#picture').content.querySelector('.picture');
var blockPictures = document.querySelector('.pictures');
document.querySelector('.big-picture').classList.remove('hidden');
document.body.classList.add('modal-open');
createPhotoItems();

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
