
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  function getTemperature(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getWindSpeed(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  document.getElementById('btn-generate').addEventListener('click', () => {
    const data = ['&#x2600;', '&#x26C5;', '&#x2601;', '&#x1F327;', '&#x1F329;', '&#x1F328;', '&#x1F326;'];
    setTemperature(getTemperature(-20, 30), 'temp');
    setEmoji('precip', data);
    setWindSpeed(getWindSpeed(10), 'wind');
  });

  function setTemperature(temp, elementId) {
    document.getElementById(elementId).innerHTML = 'Temperature: '.concat(temp, ' \u2103');
  }

  function setEmoji(elementId, data) {
    const emoji = data[Math.floor(Math.random() * data.length)];
    document.getElementById(elementId).innerHTML = ''.concat(emoji);
  }

  function setWindSpeed(value, elementId) {
    document.getElementById(elementId).innerHTML = 'Wind: '.concat(value, ' km/h');
  }

})();
//# sourceMappingURL=app.js.map
