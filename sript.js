$(document).ready(function () {
    const API_KEY = "e9d81e79d0c35ff9cd76b91f57db7d90";

    //Search functionality - using Jquery to get the value of the city and unit
    $("#search-btn").click(function () {

        // store value of city
        const city = $("#search-input").val().trim();

        //store value of unit
        const unit = $("#unit-toggle").val();

        //check if the value of city exist
        if (!city) {
            showError("please input a city..")
            return;
        }

        //fetch or get weather of cuuity imputed
        getWeather(city, unit)


    });

    // Fetch data - using the provided city and unit, fetch the data the city
    function getWeather(city, unit) {
        
        //this line of code makes text empty 
        $("#error-msg").text("")

        //show loading while fetching weather data
        $("#weather-cards").html("<p>loading...</p>")


        //fetching weather data using ajax
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`,
            method: "GET",
            success: function (data) {
                renderWeatherCards(data, unit);
            }, error: function () {
                showError(" city not found for API error");
                $("#weather-cards").empty();
            }
        })
    }

    // Render weather cards - this renders a card for each forcast
    function renderWeatherCards(data, unit) {
        $("#weather-cards").empty();

        //filter a single item reading per day - Api is being filtered
        const days = data.list.filter((item) => item.dt_txt.includes("12:00:00"));

     //this displays a card for each day - with 7 value metric per day
        days.forEach((day) => {
            const date = new Date(day.dt_txt).toDateString(); const card = `
        <div class="card">
          <h3>${date}</h3>
          <p>${day.weather[0].description}</p>


          <div class="metric">🌡 Temp: ${day.main.temp}°</div>
          <div class="metric">🤒 Feels Like: ${day.main.feels_like}°</div>
          <div class="metric">💧 Humidity: ${day.main.humidity}%</div>
          <div class="metric">🌬 Wind: ${day.wind.speed} ${unit === 'metric' ? 'm/s' : 'mph'}</div>
          <div class="metric">📊 Pressure: ${day.main.pressure} hPa</div>
          <div class="metric">☁ Clouds: ${day.clouds.all}%</div>
          <div class="metric">👁 Visibility: ${day.visibility}</div>
        </div>
      `;
      //this adds a card to weather card container

            $("#weather-cards").append(card)


        });



    }
//shows a custme error message
    function showError(message) {
        $("#error-msg").text(message);
    }
});

