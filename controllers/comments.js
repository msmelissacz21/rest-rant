const router = require('express').Router()
const db = require('../models')

// get localhost:3000/comments
router.get('/create/:id', (req, res) => {  // URL
        res.render('comment/comment', { id:req.params.id})  // path to view

  })


// post locathost:3000/p-comment/id
  router.put('/:id', (req, res) => {
    if(req.body.rant == 'on') {
        req.body.rant = true
    } else {
        req.body.rant = false
    }
    let placeId = req.params.id
    db.Place.findById(req.params.id)
    .then (place => {
        db.Comment.create(req.body).then((comment) => {
            //this executes when the promise resolves
                place.comments.push(comment.id)
                place.save()
                .then(() => {

                    res.redirect('/places/'+placeId)
                })

            }).catch((e) => {
                    //this executes if there is an error resolving the promise
                console.log(e)
                res.render('error404/error404')
                
            })
        
    }).catch ((e) => {
        console.log(e)
        res.render('error404/error404')
    })

  })


module.exports = router