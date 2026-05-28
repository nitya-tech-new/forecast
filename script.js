const searchButton = document.getElementById("search")

async function getWeather(city){

    const apiKey =
    "474b2c5a9914ae4c17699a67f4aedb6a"

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    try{

        const response =
        await fetch(url)

        const data =
        await response.json()

        console.log(data)

        // city not found

        if(data.cod == "404"){

            alert("City not found")

            return
        }

        // city name

        document.getElementById("cityName")
        .innerHTML = data.name

        // temperature

        document.getElementById("temp")
        .innerHTML =
        data.main.temp + " °C"

        // feels like

        document.getElementById("feels_like")
        .innerHTML =
        data.main.feels_like + " °C"

        // humidity

        document.getElementById("humidity")
        .innerHTML =
        data.main.humidity + " %"

        // pressure

        document.getElementById("pressure")
        .innerHTML =
        data.main.pressure + " hPa"

        // wind speed

        document.getElementById("wind_speed")
        .innerHTML =
        data.wind.speed + " km/h"

        // wind degree

        document.getElementById("wind_degree")
        .innerHTML =
        data.wind.deg + "°"

        // clouds

        document.getElementById("clouds")
        .innerHTML =
        data.clouds.all + " %"

        // visibility

        document.getElementById("visibility")
        .innerHTML =
        (data.visibility / 1000) + " km"

        // sunrise

        document.getElementById("sunrise")
        .innerHTML =
        new Date(data.sys.sunrise * 1000)
        .toLocaleTimeString()

        // sunset

        document.getElementById("sunset")
        .innerHTML =
        new Date(data.sys.sunset * 1000)
        .toLocaleTimeString()

    }

    catch(error){

        console.log(error)

        alert("Unable to fetch weather data")
    }
}

// search button

searchButton.addEventListener("click", function(e){

    e.preventDefault()

    const city =
    document.getElementById("city").value

    getWeather(city)

})

// default city

getWeather("Delhi")