const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

const WeatherClient = require('./weatherClient');
const apiKey = require("./apiKey");
const weatherClient = new WeatherClient();
describe('testing weather client api', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    it('fetchWeatherData calls openweather api and returns data to me', async () => {
        fetch.mockResponseOnce(JSON.stringify({name: "Barcelona"}));
        await weatherClient.fetchWeatherData("Barcelona").then((data) => {
            expect(data.name).toEqual("Barcelona");
            expect(fetch.mock.calls.length).toEqual(1);
            expect(fetch.mock.calls[0][0]).toEqual(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=Barcelona&appid=${apiKey}`)
        })
    })
})