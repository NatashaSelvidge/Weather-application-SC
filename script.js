///date/time///
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let h3 = document.querySelector("h3");
let date = now.getDate();
let hours = now.getHours();
if (hours < 10) {
  hours = `0 ${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();

h3.innerHTML = `${day} ${month} ${date}, ${year} <br> ${hours}:${minutes}`;

//challenge 2
function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let apiKey = "4d7c857c401c2b610599aeeadfa8b7de";

  let city = document.querySelector("#city-input").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  axios.get(url).then(displayWeatherCondition);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let tempElement = document.querySelector("#temperature");
tempElement.innerHTML = "33";

//Bonus
let cityElement = document.querySelector("#city");
let cityInput = document.querySelector("#city-input");
cityElement.innerHTML = cityInput.value;

function convertToFahrenheit(event) {
  event.preventDefault();
  tempElement.innerHTML = "66°F";
}

function convertToCelsius(event) {
  event.preventDefault();
  tempElement.innerHTML = "19°C";
}

let celsiusTemperature = tempElement.innerHTML;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
