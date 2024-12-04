
import express from "express";
import venueController from "../controllers/venueController.js";

const {createVenue, getAllVenue, getVenueId, updateVenue, deleteVenue}  = venueController;
 const venueroute = express.Router();

 venueroute.post('/create', createVenue);
 venueroute.get('/all', getAllVenue);
 venueroute.get('/:id', getVenueId);
 venueroute.put('/:id', updateVenue);
 venueroute.delete('/:id', deleteVenue);

export default venueroute;
const express = require ('express')
const {
    createVenue,
} =require('../controllers/venuecontroller');
const { model } = require('mongoose');
const venueRoute = express.Router();


venueRoute.post('/venuemodel')


model.exports = venueRoute;

