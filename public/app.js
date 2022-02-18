
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  function getTemperature(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function getWindSpeed(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = "*{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.container{\r\n    width: 100%;\r\n    height: 100vh;\r\n    padding: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.weather-block{\r\n    width: 500px;\r\n    height: 300px;\r\n    border: 1px solid #000;\r\n    border-radius: 10px;\r\n}\r\n\r\n.wb-container{\r\n    width: 100%;\r\n    padding: 20px;\r\n    font-size: 2em;\r\n}\r\n\r\n.wid-head{\r\n    width: 100%;\r\n}\r\n\r\n.wh-cont{\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.city-name{\r\n    width: 70%;\r\n}\r\n\r\n.btn-block{\r\n    width: 30%;\r\n}\r\n\r\n.btn-block .btn{\r\n    width: 110px;\r\n    height: 70px;\r\n    font-size: 20px;\r\n    border: none;\r\n    background-color: rgb(98, 98, 194);\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.block{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.precip p{\r\n    display: inline-block;\r\n}";
  styleInject(css_248z);

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
