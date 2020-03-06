'use strict';

(function () {
  function myRequest() {
    return {
      getRequest: function getRequest(url, onSuccess, onError) {
        var StatusCode = {
          OK: 200
        };
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', url);

        xhr.addEventListener('load', function () {
          if (xhr.status !== StatusCode.OK) {
            onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
            return;
          }
          onSuccess(xhr.response);
        });

        xhr.addEventListener('error', function () {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        });

        xhr.send();
      },
      postRequest: function postRequest(url, onSuccess, onError, body) {
        var StatusCode = {
          OK: 200
        };
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', url);

        xhr.addEventListener('load', function () {
          if (xhr.status !== StatusCode.OK) {
            onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
            return;
          }
          onSuccess(xhr.response);
        });

        xhr.addEventListener('error', function () {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        });

        xhr.send(body);
      }
    };
  }

  window.request = {
    myRequest: myRequest()
  };
})();
