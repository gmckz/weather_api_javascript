class WeatherClient {
    constructor() {
        
    };

    fetchWeatherData(city) {
        const apiKey = require('./apiKey');
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
        return fetch(apiUrl)
            .then((response) => response.json())
    };
}

module.exports = WeatherClient;

// const client = new WeatherClient();
// client.fetchWeatherData('Barcelona').then((weatherData) => {
//     console.log(`Weather data for ${weatherData.name}:`)
//     console.log(weatherData);
// });