const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

const geocode = require('../utils/geocode');
const forcast = require('../utils/forcast');

const publicDir = path.join(__dirname, '../public')
const viewDir	= path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')



app.set('view engine' , 'hbs')
app.set('views' , viewDir)
hbs.registerPartials(partialPath)
app.use(express.static(publicDir))

app.get('',(req , res) => {
	res.render('index', {
		title: 'HBS Handle Bar',
		name: 'Added by Sunil',
		created_by : 'Sunil'
	});
})

app.get('/help',(req , res) => {
	res.render('help',{
		title : 'Help Page',
		name : 'Sunil',
		age : '32',
		created_by : 'Varun'
	});
})

app.get('/weather',(req , res) => {
	if(!req.query.address) {
		return res.send({
			error: 'address is missing'	
		})
	}
	geocode(req.query.address, (error , { location } = {}) => {
		if(error) {
			return res.send({
				error: error
			})
		}
		forcast(location, (error, { forcast } = {}) => {
			if(error) {
				return res.send({
					error: error
				})
			}
			res.render('weather' , {
				title : "Today's Weather",
				address: location,
				forcast : forcast
			});	
		})	
	})
})


app.get('*', (req, res) => {
	res.render('404',{
		title : '404',
		created_by: 'The page your are looking for is not found.'
	});
})

app.listen('3000' , ()=> {
	console.log('Server is up and running')
})


/*
eval "$(ssh-agent -s)" - Check existing ssh key is running 
ssh-add  ~/.ssh/id_rsa.ppk - add ssh identiry into the project
*/
