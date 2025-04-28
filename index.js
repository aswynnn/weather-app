const APIKEY = '',
    URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchbox = document.getElementById('city');
const searchbtn = document.getElementById('btn');


async function checkweather(city="New Delhi") {
    const res= await fetch(`${URL}${city}&appid=${APIKEY}`);
    let data = await res.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
}
searchbtn.addEventListener('click', () => {
    checkweather(searchbox.value);
})
searchbox.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        checkweather(searchbox.value);
    }
})
checkweather();