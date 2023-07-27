// unit tests
const Weather = require('./weather');

describe('Weather', () => {
    it('calls weather client and returns data to me', async () => {
        const mockClient = {
            fetchWeatherData: jest.fn(),
        }
        mockClient.fetchWeatherData.mockResolvedValueOnce({
            name: "Bristol",
        })
        const weather = new Weather(mockClient);
        await weather.load('Bristol');
        expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('Bristol');
        const bristolWeather = weather.getWeatherData();
        expect(bristolWeather.name).toEqual("Bristol");
    });
})

