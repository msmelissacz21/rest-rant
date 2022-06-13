// Modules and Globals
require('dotenv').config()

const express = require('express')
const placesRoutes = require('./controllers/places')
const methodOverride = require('method-override')
const commentsRoutes = require('./controllers/comments')
const app = express()
var bodyParser = require("body-parser");





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Controllers and Routes
app.use('/places', placesRoutes)
app.use('/p-comment', commentsRoutes)





// get
app.get('/', (req, res) => {
  console.log('here')
    res.render('home/home')
})

app.get('*', (req, res) => {
  res.render('error404/error404')
})



// Listen for Connections
app.listen(process.env.PORT)