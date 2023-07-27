1.

Specification

Implement the class WeatherClient with a method fetchWeatherData that fetches the current weather for a given city using fetch. It should also return a promise, so we can use the data once it has been received and parsed into an object.

Example usage:
```javascript
const client = new WeatherClient();

client.fetchWeatherData('London').then((weatherData) => {
  console.log(`Weather data for ${weatherData.name}:`)
  console.log(weatherData);
});
```
Class: WeatherClient
properties: none
methods: fetchWeatherData
    arguments: url, city
    output: the weather for a given city, a promise containing that data
    side-effects: none


2.

Test-drive the class Weather, which uses the class WeatherClient to get the weather for a given city. Make sure the dependency on WeatherClient is mocked. If you need a hand mocking API calls, take a look at the Mocking API Calls pill.

Example usage
```javascript
// in node REPL

const client = new WeatherClient();
const weather = new Weather(client);

weather.load('Bristol');
// then, after some time
weather.getWeatherData();
```

class: Weather
    properties: 
        weather client
        weatherData
    methods:
        load
            arguments: a city
            output: none
            side-effects: loads the weather client and updates weatherData property with response
        getWeatherData
            arguments: none
            output: weatherData
            side-effects: none

test cases:
calling weather.load with argument 'Bristol'
followed by weather.getWeatherData
returns weather data for bristol
