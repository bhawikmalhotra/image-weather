
// Image Carousel Functionality
const imgsrc = ['img1.jpg', 'img2.jpg', 'img3.jpg']
const img = document.getElementById('photo');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let count = 0;

nextBtn.addEventListener('click', () => {
    if(count == imgsrc.length-1){
        count = 0;
        img.src = `Images/${imgsrc[count]}`;
    }
    else{
        count++;
        img.src = `Images/${imgsrc[count]}`;
    }
});

prevBtn.addEventListener('click', () => {
    if(count == 0){
        count = imgsrc.length-1;
        img.src = `Images/${imgsrc[count]}`;
    }
    else{
        count--;
        img.src = `Images/${imgsrc[count]}`;
    }
});


// Weather API Fetching
async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'e2a4a44a9836a894f67066a2b1f70c41'; //  ApI Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weather').innerHTML = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
        } else {
            document.getElementById('weather').innerHTML = `<p>City not found!</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error fetching weather data.</p>`;
    }
}
