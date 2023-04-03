let search = document.getElementById("search"); //input tag
let cityname = document.getElementById("cityName");
let temp = document.getElementById("temp");
let getInfo = async () => {
  let inputValue = search.value;
  if (inputValue == "") {
    //error
    alert("Please enter a city name before search");
  } else {
    //fetch the data
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`;
      let response = await fetch(url);
      // console.log(response);
      let data = await response.json(); // fetching only json from the api reponse
      // console.log(data);
      cityname.textContent = data.name;
      temp.textContent = data.main.temp_min;
    } catch (error) {
      console.log(error);
    }
  }
};
