export function getTemperature(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getWindSpeed(max) {
  return Math.floor(Math.random() * (max + 1));
}
