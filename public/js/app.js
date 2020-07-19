console.log('Js file is loaded.')

/*fetch('http://api.weatherstack.com/current?access_key=d1575eaec9d68238423addb250cb4003&forecast_days=1&query=Delhi').then(function(response) {
	response.json().then(function(data) {
		if(data.error) {
			console.log(data.error)
		} else {
			console.log(data.current)
		}
	})
})
*/


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
weatherForm.addEventListener('submit' , (e) => {
	e.preventDefault();
	const location = search.value;
	fetch('/weather?address='+location).then((response) => {
		if(response.json().then((data) {
			console.log(data);
		});
	})
})