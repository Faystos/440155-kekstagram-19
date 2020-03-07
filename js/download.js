'use strict';

(function () {
  var getRequest = window.request.myRequest;
  getRequest.getRequest('https://js.dump.academy/kekstagram/data', onSuccessResponse, onErrorResponse);


  function onSuccessResponse(res) {
    window.itemPhotoData.arrData = res.slice();
    window.renderPhotos(window.itemPhotoData.arrData);
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  }


  function onErrorResponse() {
    window.itemPhotoData.openWindow('error');
  }
})();
