'use strict';

(function () {
  var getRequest = window.request.myRequest;
  getRequest.getRequest('https://js.dump.academy/kekstagram/data', onResponse, onErr);


  function onResponse(res) {
    var arrPhotos = res.slice();
    window.renderPhotos(arrPhotos);
  }


  function onErr() {
    window.itemPhotoData.openWindow('error');
  }
})();
