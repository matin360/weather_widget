import { setTemperature, setWindSpeed } from "../public/app";

let elm = document.createElement('p');
elm.setAttribute('id', 'test');

describe("unit test", () => {

test("setTemperature", () => {
    expect(setTemperature(0, 10, 'test')).toBeGreaterThanOrEqual(0);
    expect(setTemperature(0, 10, 'test')).toBeLessThanOrEqual(10);
});

test("setWindSpeed", () => {
    expect(setWindSpeed(0, 10, 'test')).toBeGreaterThanOrEqual(0);
    expect(setWindSpeed(0, 10, 'test')).toBeLessThanOrEqual(10);
});

});