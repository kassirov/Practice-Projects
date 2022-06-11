let weather = {
  apikey: "01f7d0bec1991e560c4f1ff21ba24bea",
  fetchWeather: function(city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then(response => response.json())
      .then(data => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".description").innerText = description;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "wind: " + speed + "km/h";
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function() {
    this.fetchWeather(document.querySelector(".search-bar input").value);
  }
};

document
  .querySelector(".search-bar button")
  .addEventListener("click", function() {
    weather.search();
  });

document.querySelector(".search-bar").addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    weather.search();
  }
});
