const request = require('request');

const converCurrency = (currency , callback) => {
	const url = 'https://api.exchangerate-api.com/v4/latest/'+currency
	request.post({url:url,json:true } , (err , response) => {
		if(!err) {
			callback(err,response.body.rates);
		} else {;
			callback(err,response);
		}
	});
}

module.exports = converCurrency;