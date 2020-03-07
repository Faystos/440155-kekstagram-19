'use strict';

(function () {
  var btnFilter = document.querySelectorAll('.img-filters__button');
  var activeBtnFilter = document.querySelector('.img-filters__button--active');
  var typeFilter = {
    'filter-default': function (arr) {
      return arr;
    },
    'filter-random': function (arr) {
      var arrRandomPhotos = [];
      for (var i = 0; i < window.itemPhotoData.MAX_RANDOM_PHOTO; i++) {
        var randomNum = Math.floor(Math.random() * (arr.length - 1));
        arrRandomPhotos[i] = arr.splice(randomNum, 1)[0];
      }
      return arrRandomPhotos;
    },
    'filter-discussed': function (arr) {
      return arr.sort(function (a, b) {
        return b.comments.length - a.comments.length;
      });
    }
  };

  btnFilter.forEach(function (el) {
    el.addEventListener('click', function (evt) {
      evt.preventDefault();
      handlerFilter(evt);
    });
  });

  function onActiveBtn(btn) {
    activeBtnFilter.classList.remove('img-filters__button--active');
    activeBtnFilter = btn;
    activeBtnFilter.classList.add('img-filters__button--active');
  }

  function onDeleteElements(elements) {
    var arrElements = document.querySelectorAll(elements);
    arrElements.forEach(function (el) {
      el.remove();
    });
  }

  function onFilter(id, arr) {
    var arry = typeFilter[id](arr).slice();
    window.renderPhotos(arry);
  }

  var handlerFilter = window.debounce(function (aim) {
    var activeBtn = aim.target;
    var arrPhotos = window.itemPhotoData.arrData.slice();
    onActiveBtn(activeBtn);
    onDeleteElements('.picture');
    onFilter(activeBtn.id, arrPhotos);
  });

})();
