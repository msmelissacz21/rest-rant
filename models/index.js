require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.ybngl.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true, 
  useUnifiedTopology: true
}).then(() => console.log('DB connected'))
.catch(err => console.error(err));

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
