import express from "express";
import eventController from "../controllers/eventController.js";
const {createEvent, getAllEvent, getEventId, updateEvent, deleteEvent}  = eventController;
 const eventroute = express.Router();


 eventroute.post('/create', createEvent);
 eventroute.get('/getAll', getAllEvent);
 eventroute.get('/:id', getEventId);
 eventroute.put('/update/:id', updateEvent);
 eventroute.delete('/delete/:id', deleteEvent);

export default eventroute;