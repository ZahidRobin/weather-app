weatherData("dhaka");
const locationName = document.getElementById('location');
document.getElementById('search').addEventListener('click', () => {
    const place = locationName.value;
    weatherData(place);
})

function weatherData(place){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=7e9d098e9b62359a01f407e7fdc8ec7a`)
    .then(res => res.json())
    .then(data => {
        document.getElementById('city').innerText = `${data.name}, ${data.sys.country}` 
        const locationImg = document.getElementById('locationImage');
        const icon = data.weather[0].icon;
        locationImg.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);
        document.getElementById('season').innerText = data.weather[0].main;
        document.getElementById('cel').innerText = (data.main.temp-273).toFixed(2);
        document.getElementById('location').value = "";
    }).catch(error => {
        document.getElementById('city').innerText = "Unknown Location";
    })
}