const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/asian-food-rest.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/cat-cafe.jpg'
      },
      {
        name: 'Sundown Seaside',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Seafood, Seafood Restaurant',
        pic: '/images/seaside-restaurant.jpg'
      }
    ]
      
    res.render('places/index', {places})

})

router.get('/new', (req,res) => {
    res.render('places/new')
})

router.get('/:id', (req,res) => {

})

router.post('/', (req,res) => {
    console.log(req.body)
    res.send('POST /places')
})

module.exports = router
