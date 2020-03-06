'use strict';

(function () {
  var getRequest = window.request.myRequest;
  getRequest.getRequest('https://js.dump.academy/kekstagram/data', onSuccessResponse, onErrorResponse);


  function onSuccessResponse(res) {
    var arrPhotos = res.slice();
    window.renderPhotos(arrPhotos);
  }


  function onErrorResponse() {
    window.itemPhotoData.openWindow('error');
  }
})();
