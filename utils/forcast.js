const request = require('request');

const forcast = (address , callback) => {
	const geocodeURL = 'http://api.weatherstack.com/current?access_key=d1575eaec9d68238423addb250cb4003&forecast_days=1&query='+address
	request({ url : geocodeURL , json:true} , (error, response) => {
		if(error) {
			callback('Unable to connect to location services!', undefined)
		} else if(response.body.current === undefined  || response.body.current.length == 0) {
			callback('Unable to find location. Try another search.', undefined)
		} else {
			callback(undefined ,{
				forcast : 'Weather forcast for location '+ response.body.location.name + ' : temperature  '+ response.body.current.temperature + ' ' +response.body.current.weather_descriptions +'  '+ response.body.current.cloudcover +'% cloudy '
			})
		}
	})
}

module.exports = forcast;