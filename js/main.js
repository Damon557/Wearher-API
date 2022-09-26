// const city = "Atlanta"
 
const apiKey ="b161c461800cb08d3b8a8279bf179139"
    const fetchWeather = async() => {
        const city = document.getElementById("city").value
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city }&appid=${apiKey}&units=imperial`)
        const data = await response.json()
        console.log(data)


        const cit = data.name
        const temp = data.main.temp
        const high = data.main.temp_max
        const low = data.main.temp_min
        const wind = data.wind.speed

        document.querySelector('.city').innerText = "Weather in " + cit;
        document.querySelector('.temp').innerText = "Temperature: " +temp + "° F";
        document.querySelector('.high').innerText = "High Temperature: " +high + "° F";
        document.querySelector('.low').innerText = "Low Temperature: " +low + "° F";
        document.querySelector('.wind').innerText = "Wind Speed: " + wind + "MPH";
    }
