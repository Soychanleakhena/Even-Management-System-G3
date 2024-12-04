const express = require ('express')
const {
    createVenue,
} =require('../controllers/venuecontroller');
const { model } = require('mongoose');
const venueRoute = express.Router();


venueRoute.post('/venuemodel')


model.exports = venueRoute;