import Event from "../models/eventModle.js";


//Create new Event (POST)
const createEvent = async(req, res) => {
   try {
    const { name, date, descrpition, venueId, orgaizerId} = req.body;
     
    if (!name || !date || !descrpition || !venueId || !orgaizerId){
      return res.status(400).json({ message: "All required field"});
        
    }
    const eventData = new Event({ name, date, descrpition, venueId, orgaizerId });
    await eventData.save();
    res.status(201).json({ message: "event create successfully" , eventData});
   } catch (error){
    res.status(500).json({ message: "Error create event" });
   }
};



//Get all Event (GET)
const getAllEvent = async(req, res) => {
  try {
    const events = await Event.find();
    return res.status(200).json({ message: "Get all event successfully", events});
  }catch(error){
    res.status(500).json({ message: "Error get all event" });
  }
};



//Get Event ID  (GET ID)
const getEventId = async(req, res) => {
  try{
    const eventId = req.params.id
    const evented = await Event.findById(eventId);
    return res.status(200).json({ message: "Get by id successfully", evented});
  } catch {
    res.status(500).json({message: "Error get by id "});
  }
};




//Update Event  (PUT)
const updateEvent = async(req,res) => {
  try {
    const eventId = req.params.id;
    const eventData = req.body;
    const eventUpdate = await Event.findByIdAndUpdate(
      eventId,
      eventData,
      { new: true}
    );
    if(!eventUpdate){
      return res.status(404).json({ message: "data not found"});
    }
    return res.status(200).json({ message: "update successfully",eventUpdate});

  }catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
}
} 



//Delete Event  (DELETE)
const deleteEvent = async(req,res) => {
  try {
    const eventId = req.params.id;
    const eventDelete = await Event.findByIdAndDelete(eventId);
    return res.status(200).json({message: "Delete successfully", eventDelete})
  }catch(error){
    console.log(error);
    return res.status(500).json({ message: "Error delete data" });
  }
}

export default {createEvent, getAllEvent, getEventId, updateEvent, deleteEvent};

