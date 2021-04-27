fetch('https://openweathermap.org/api/one-call-api')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
