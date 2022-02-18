import { getTemperature, getWindSpeed } from "../src/functions";
import '../css/style.css';

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

