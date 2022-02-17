(function () {
    'use strict';

    (function () {

      document.getElementById('btn-generate').addEventListener('click', function () {
        var data = ['&#x2600;', '&#x26C5;', '&#x2601;', '&#x1F327;', '&#x1F329;', '&#x1F328;', '&#x1F326;'];
        setTemperature(-20, 30, 'temp');
        setEmoji('precip', data);
        setWindSpeed(10, 'wind');
      });

      function setTemperature(min, max, elementId) {
        var temp = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById(elementId).innerHTML = "Temperature: ".concat(temp, " \u2103");
      }

      function setEmoji(elementId, data) {
        var emoji = data[Math.floor(Math.random() * data.length)];
        document.getElementById(elementId).innerHTML = "".concat(emoji);
      }

      function setWindSpeed(max, elementId) {
        var speed = Math.floor(Math.random() * (max + 1));
        document.getElementById(elementId).innerHTML = "Wind: ".concat(speed, " km/h");
      }
    })();

})();
//# sourceMappingURL=app.js.map
