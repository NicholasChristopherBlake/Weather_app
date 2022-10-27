/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
 getWeatherData = (city) => {
  //HINT: Use template literals to create a url with input and an API key
  //CODE GOES HERE
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '73829d015emshf882f87181a04aep163cf3jsnf8ecfbdeaa8f',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };
  return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`, options)
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.error(err));
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  if (city == 'Aigerim' || city == 'aigerim' || city == 'aika' || city == 'Aika') {
    document.getElementById('city-name').innerText = '❤️';
    document.getElementById('weather-type').innerText = 'Nikita Loves Aigerim';
    document.getElementById('temp').innerText = '';
    document.getElementById('wind-speed').innerText = '';
    }
  // CODE GOES HERE
  else {
    const data = await getWeatherData(city);
    showWeatherData(data);
  }
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById('city-name').innerText = weatherData.location.city;
  document.getElementById('weather-type').innerText = weatherData.current_observation.condition.text;
  document.getElementById('temp').innerText = weatherData.current_observation.condition.temperature;
  document.getElementById('wind-speed').innerText = weatherData.current_observation.wind.speed;
}

