window.getWeather = function () {
    let cityName = document.querySelector("#weatherCheck").value;



    let API_KEY = 'c5df4cd50a4d946aa1b1763e385036e4';
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
        .then(function (response) {
            // handle success
            console.log(response.data);


            let date = new Date();
            let month = date.getMonth();
            date = date.getDate();
            const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            document.querySelector("#city").innerHTML = `<i class="bi bi-geo-alt-fill"></i>${response.data.name}
            <br /> Today, ${monthNames[month]}   ${date}`;

            // placing weather icon
            let icon = response.data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
            const iconElement = document.createElement('img');
            iconElement.src = iconUrl;
            const containerElement = document.querySelector('#temprature');
            containerElement.appendChild(iconElement);

            // imgDescription
            let imgDescription = document.querySelector("#imgDescription");
            let description = response.data.weather[0].description;

            imgDescription.innerHTML = description;


            document.querySelector("#result").innerHTML = ` ${response.data.main.temp} °`

            document.querySelector("#humidity").innerHTML = `${response.data.main.humidity} %<br /> humidity`

            let visibility = `${response.data.visibility}` / 1000;

            document.querySelector("#visibility").innerHTML = `${visibility} km <br /> visibility`

            document.querySelector("#windSpeed").innerHTML = `${response.data.wind.speed} m/s <br /> wind speed`


            let sunriseTimestamp = response.data.sys.sunrise;
            let sunsetTimestamp = response.data.sys.sunset;

            sunriseTime = new Date(sunriseTimestamp * 1000);
            sunsetTime = new Date(sunsetTimestamp * 1000);



            document.querySelector("#sunriseTime").innerHTML = `<label for="sunrisetime">sunrise time</label><br /> ${sunriseTime.toLocaleTimeString()}`;
            document.querySelector("#sunsetTime").innerHTML = `<label for="sunsettime">sunset time</label><br /> ${sunsetTime.toLocaleTimeString()}`;





        })

        // if any error occurs
        .catch(function (error) {
            // handle error
            console.log(error.data);
            document.querySelector("#result").innerHTML = "error in getting weather data"
        })

}



let button = document.querySelector("#check");
let result = document.querySelector("#weatherUpdate");
result = result.style.display = 'none';

document.querySelector("#weatherForm").addEventListener('submit', function (event) {
    event.preventDefault();

    let home = document.querySelector("#home");
    home = home.style.display = 'none';

    let result = document.querySelector("#weatherUpdate");
    result = result.style.display = 'block';

});

function refreshPage() {
    location.reload();
}





