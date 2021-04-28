var currentTemp= document.getElementById("temp");
var currentWind= document.getElementById("wind");
var currentHumidity= document.getElementById("humidity");
var currentCity= document.getElementById("city");
var input = ("input");



var form = document.querySelector("search");

 var api={
     base: 'https://api.openweathermap.org/data/2.5',
     Key: '07571fb955a98a0ad68360c19ff7652e'
 }

 var submitButton= document.getElementById("search");
 submitButton.addEventListener('click', setQuery);

 function setQuery (evt){
     if (input !=="undefined") {
        getResults(submitButton.value);
       

     }
     
 }
 
 function getResults(query){
     fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
     .then (weather => {
         return weather.json()
     }).then(displayResults);
     
    }
     
 function displayResults(weather){
     console.log(weather)
 }
 





// fetch('https://api.openweathermap.org/data/2.5/weather?q=boston&appid=07571fb955a98a0ad68360c19ff7652e&units=imperial')

 
    fetch('https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=07571fb955a98a0ad68360c19ff7652e&units=imperial')

.then(function (response) {
      console.log(response)
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    fetch('https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=07571fb955a98a0ad68360c19ff7652e&units=imperial')

    .then(function (response) {
        console.log(response)
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      fetch('https://api.openweathermap.org/data/2.5/weather?q=boston&appid=07571fb955a98a0ad68360c19ff7652e&units=imperial')

      .then(function (response) {
        console.log(response)
      return response.json();
    })
    .then(function (data) {
      console.log(data);

    // CREATE
    var temp = document.createElement('temp');
    var wind = document.createElement('wind');
    var humidity= document.createElement('humidity');
    var city= document.createElement('city');
   

    // BUILD
    temp.textContent = data.main.temp;
    wind.textContent=data.wind.speed;
    humidity.textContent=data.main.humidity;
    city.textContent=data.name;
   


    
    // PLACE
    currentTemp.append(temp, "°F");
    currentWind.append(wind, " MPH");
    currentHumidity.append(humidity, "%");
    currentCity.append(city);
  });
}  
