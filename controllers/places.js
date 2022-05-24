const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.get('/new', (req,res) => {
    let d = {id: places.length}
    res.render('places/new', d)
})

// Update existing place
router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        console.log('1st error')
        res.render('error404/error404')
    }
    else if (!places[id]) {
        console.log('2nd error')
        res.render('error404/error404')
    }
    else {
        // Dig into req.body and make sure data is valid
        if (!req.body.pic) {
            // Default image if one is not provided
            req.body.pic = 'https://www.placecage.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
  
        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
  })
  

// Create new place
router.put('/', (req,res) => {
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    let newPlace = {
        name: req.body.name,
        pic: req.body.pic,
        city: req.body.city,
        state: req.body.state,
        cuisines: req.body.cuisines
    }
    places.push(newPlace)
    res.render('places/index', {places})
})


router.get('/:id', (req,res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404/error404')
    }
    else if (!places[id]) {
        res.render('error404/error404')
    }
    else {
    res.render('places/show', { place: places[id], id })
    }
})


router.delete('/:id', (req, res) => {
    console.log('delete endpoint')
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404/error404')
    }
    else if (!places[id]) {
      res.render('error404/error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
  })


  router.get('/:id/edit', (req,res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404/error404')
    }
    else if (!places[id]) {
        res.render('error404/error404')
    }
    else {
    res.render('places/edit', { place: places[id], id })
    }
})

module.exports = router
