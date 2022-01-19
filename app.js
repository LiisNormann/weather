document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city) {
    var key = '7ce4e3e8bcb9f4b0bc884650a2209a15';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        }) //Convert data to json
        .then(function(data) {
            console.log(data);
            drawWeather(data);
        })
        .catch(function(){
            //catch any errors
        });
}

function cityWeather(e) {
    weatherDataFetch( 'Tallinn');
}

function drawWeather( data ) {
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;

    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML = celcius + '&deg;';
    document.querySelector('#location').innerHTML = data.name;
} 

