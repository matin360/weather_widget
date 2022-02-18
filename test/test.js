import { getTemperature, getWindSpeed } from "../src/functions";

describe("unit test", () => {

test("setTemperature", () => {
    expect(getTemperature(0, 10)).toBeGreaterThanOrEqual(0);
    expect(getTemperature(0, 10)).toBeLessThanOrEqual(10);
});

test("setWindSpeed", () => {
    expect(getWindSpeed(0, 10)).toBeGreaterThanOrEqual(0);
    expect(getWindSpeed(0, 10)).toBeLessThanOrEqual(10);
});

});