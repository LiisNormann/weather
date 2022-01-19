document.addEventListener('DOMContentLoaded', cityWeather)

function weatherDataFetch(city) {
    var key = '7ce4e3e8bcb9f4b0bc884650a2209a15';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
            return resp.json()
        }) //Convert data to json
        .then(function(data) {
            console.log(data);
        })
        .catch(function(){
            //catch any errors
        });
}

function cityWeather(e) {
    weatherDataFetch( 'Tallinn');
}