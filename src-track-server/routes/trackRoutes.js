const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')
const Track = mongoose.model('Track')
const trackRouter = express.Router()

trackRouter.use(requireAuth)
trackRouter.get('/tracks', async (req, res) => {
    const tracks = await Track.find({userId: req.user._id})
    res.send(tracks)
})

trackRouter.post('/createTracks', async(req, res) => {
    const {name, location} = req.body;
    if(!name || !location) {
        return res.status(422).send({error: 'You must enter name and location'})
    }
    try {
      const track = new Track ({
        name, location, userId: req.user._id
      })
      await track.save();
      res.send(track)
    } catch(err) {
        res.status(422).send({error: err.message})
    }
    
})


module.exports = trackRouter;