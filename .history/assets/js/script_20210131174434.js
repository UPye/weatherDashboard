var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("city");
var cityContainerEl = document.querySelector("city-container");
var CitySearchTerm = document.querySelector("#city-search-term");
var previousCitiesEl = document.querySelector("#previoous-cities");

var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        getCityInfo(city);

        // Clear old content
        cityContainerEl.textContent = "";
        cityInputEl.value = "";
    }
    else {
        alert("Please enter a valid city name")
    }
};

var getCityInfo = function(city) {
    // Format the API URL
    var apiUrl = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=af23785a6adc1419c384f68b4a1ef8a7";

    // Make request to URL
    fetch(apiUrl)
        .then(function(response) {
            // If request is successful
            if (reponse.ok) {
                console.log(response);
                response.json().then(function(data) {
                    console.log(data);
                    displayWeather(data, city);
                });
            }
            else {
                alert("Error: data not found");
            }
        })

        .catch(function(error) {
            alert("Unable to connect to OpenWeather");
        });
        localStorage.setItem("cityName", JSON.stringify(cityName))
};

var getPreviousCities = function(cityName) {
    localStorage.setItem
}

var displayWeather = function(data, city) {
    if(data.length === 0) {
        cityContainerEl.textContent = "No City Found";
        return;
    }

    cityContainerEl.textContent = "";
    CitySearchTerm.textContent = searchTerm;

    // Loop over data
    for (var i = 0; i < data.length; i++) {
        // create a container for each data point
        var cityEl = document.createElement("a");
        cityEl.classList = "list-item flex-row justify-space-between align-center";

        // Create a span element to hold city weather data
        var weatherEl = document.createElement("span");
        weatherEl.textContent = cityName;

        // Append to container
        cityEl.appendChild(weatherEl);

        // Create a status element
        var statusEl = document.createElement("span");
        statusEl.classList = "flex-row align-center";
    }
};

var buttonClickHandler = function(event) {
    var weather = event.target.getAttribute("weather");
}