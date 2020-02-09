'use strict';

(function () {

  var objItemPhoto = createObjPhoto();
  var ESC = 27;

  window.itemPhotoData = {
    objItemPhoto: objItemPhoto,
    getRandomInt: getRandomInt,
    ESC: ESC
  };

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
})();
