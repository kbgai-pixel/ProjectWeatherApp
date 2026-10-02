# Weather Dashboard App

A simple and responsive weather application that lets users search for a city and view a multi-day forecast. The app displays daily weather cards with temperature, humidity, wind speed, pressure, cloud cover, and visibility, and includes a unit toggle for Celsius and Fahrenheit.

## Features

- Search weather by city name
- Toggle between metric and imperial units
- Display a 5-day forecast using noon-time entries from the OpenWeatherMap API
- Show error handling for invalid city names or API failures
- Clean, card-based layout for weather summaries

## Tech Stack

- HTML
- CSS
- JavaScript
- jQuery
- OpenWeatherMap API

## Project Structure

- `Index.html` — main app layout and UI elements
- `style.css` — styling and responsive design
- `sript.js` — weather data fetching and rendering logic

## Setup Instructions

1. Clone the project to your local machine.
2. Open the project folder in your browser.
3. Make sure you have an API key from OpenWeatherMap.
4. Replace the placeholder API key in `sript.js`:

```js
const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
```

5. Open `Index.html` in a browser to use the app.

## Usage

- Enter a city name in the search box.
- Click the Search button.
- Use the dropdown to switch between Celsius and Fahrenheit.
- Weather forecast cards will appear for the selected city.

## Notes

This project uses the OpenWeatherMap 5-day forecast API and filters the results to show one reading per day (typically at 12:00:00 local time).

## License

This project is for educational and personal use.

Author
Khadijah Haliru