const fetchWeatherData = require("./weatherClient")

class Weather {
    constructor(weatherClient) {
        this.weatherClient = weatherClient;
        this.weatherData = null;
    }

    load(city) {
        this.weatherClient.fetchWeatherData(city)
        .then((clientData) => this.weatherData = clientData);
    }

    getWeatherData() {
        return this.weatherData;
    }
}

module.exports = Weather;