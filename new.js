let search = document.getElementById("search"); //input tag
let cityname = document.getElementById("cityName");
let temp = document.getElementById("temp");
let getInfo = async () => {

    const apiKey = "1cb6532aea3c298a830a71380eace21e";
    const city = search.value;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    if (city == "") {
        //error
        alert("Please enter a city name before search");
    } else {
        fetch(apiUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Network response was not ok.");
                }
            })
            .then(data => {
                cityname.textContent = data.name;
                temp.textContent = data.main.temp_min;
                console.log(data); // Do something with the fetched data
            })
            .catch(error => {
                console.error("There was a problem fetching the data:", error);
            });
    }
};

