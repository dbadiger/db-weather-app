const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2f4e1434famsh919746abf5ad34ap15af9ejsnd86ff4eb88d6",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getweather = (city) => {
  cityName.innerHTML = city;
  fetch(
    `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cloud_pct.innerHTML = response.cloud_pct;
      cloud_pct1.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      //   temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed1.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      console.log(response);
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getweather(city.value);
});

getweather("Bengaluru");
// try {
//   const response = await fetch(
//     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle",
//     options
//   );
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
