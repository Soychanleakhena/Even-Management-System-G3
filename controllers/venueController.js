import venue from "../models/venueModel.js";

const createVenue = async (req, res) => {
    try {
        const { name, location, capicity, createBy, updateBy } = req.body;

        if (!name || !location || !capicity) {
            return res.status(400).json({ message: "All required field" });
        }

        const createVenue = new venue({
            name,
            location,
            capicity,
            createBy,
            updateBy
        }
        );
        const result = await createVenue.save();
        res.status(201).json({ message: "venue create successfully", result });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error create venue" });
    }
};


const getAllVenue = async (req, res) => {
    try {
        
        const result = await venue.find();
        // console.log(venues)
        res.status(201).json({ message: "venue create successfully", result });

        // return res.status(200).json({ message: "Get all venue successfully", venues });
    } catch (error) {
        res.status(500).json({ message: "Error get all venue" });
    }
};

const getVenueId = async (req, res) => {
    try {
        const venueId = req.params.id
        const result = await venue.findById(venueId);
        // return res.status(200).json({ message: "Get by id successfully", venue });
        res.status(201).json({ message: "venue create successfully", result });

    } catch {
        res.status(500).json({ message: "Error get by id " });
    }
};

const updateVenue = async (req, res) => {
    try {
        const venueId = req.params.id;
        const createVenue = req.body;
        const venueUpdate = await venue.findByIdAndUpdate(
            venueId,
            createVenue,
            { new: true, runValidators: true }
        );
        if (!venueUpdate) {
            return res.status(404).json({ message: "data not found" });
        }
        return res.status(200).json({ message: "update successfully", venueUpdate });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const deleteVenue = async (req, res) => {
    try {
        const venueId = req.params.id;
        const venueDelete = await venue.findByIdAndDelete(venueId);
        return res.status(200).json({ message: "Delete successfully", venueDelete })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error delete data" });
    }
}

export default { createVenue, getAllVenue, getVenueId, updateVenue, deleteVenue };

