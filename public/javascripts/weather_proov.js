function f() {
    const request = require('request');
    let apiKey = '7f27b2869ce4a353425bd51a33b57ea3';
    let city = 'tartu';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    request(url, function (err, response, body) {
        let weather = JSON.parse(body);
        let message = (`It's ${Math.round((weather.main.temp - 32) * 0.5556)} degrees in ${weather.name}!`);
        console.log(message);
        let thenum = "foo3bars".match(/\d+/)[0];
        console.log(thenum)
    });
}
f();

