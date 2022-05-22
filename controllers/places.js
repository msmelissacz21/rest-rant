const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    res.render('places/index', {places})
})

router.get('/new', (req,res) => {
    let d = {id: places.length}
    res.render('places/new', d)
})

router.put('/:id', (req,res) => {
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
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
    res.render('places/show', { place: places[id], id })
    }
})

router.post('/', (req,res) => {
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
    places.push(req.body)
    res.redirect('/places')
})

router.delete('/:id', (req, res) => {
    console.log('delete endpoint')
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
  })


  router.get('/:id/edit', (req,res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
    res.render('places/edit', { place: places[id], id })
    }
})



  
  

module.exports = router
