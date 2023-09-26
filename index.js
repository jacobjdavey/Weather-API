API_KEY = ""

function getWeather(location){
    fetch (
        "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&appid=" + API_KEY
    ).then((res) => res.json())
     .then((data)=> {
        console.log(data);

        displayWeather(data);
    })
}

function displayWeather(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity, feels_like} = data.main;
    const {speed} = data.wind;

    document.querySelector(".location").innerText = "Weather in " + name;
    document.querySelector(".weather__icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText = "Temperature: " + Math.round(temp) + "°F";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText = "Humidity: " + humidity;
    document.querySelector(".feels_like").innerText = "Feels like " + feels_like + "°F";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mph";
}

function searchWeather(){
    const location = document.querySelector(".search__bar").value;
    getWeather(location);
}

document.querySelector(".search__button").addEventListener("click", () =>{
    searchWeather();
})

document.querySelector(".search__button").addEventListener("onMouseOver", () =>{
    searchWeather();
})

document.querySelector(".search__bar").addEventListener("keyup", (event) =>{
    if(event.key == "Enter")
        searchWeather();
})

getWeather("Nashville");