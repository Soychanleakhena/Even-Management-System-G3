// const Match = require("../Model/match");
// exports.createMatch = async (req, res) => {
//     try {
//     const { team_A, team_B, match_date, location, referee } = req.body;
//     const newMatch = new Match({
//         team_A,
//         team_B,
//         match_date: new Date(match_date),
//         location: location || "To be determined",
//         referee: referee || "Not assigned", 
//     });
//     const savedMatch = await newMatch.save();
//         return res.status(201).json({
//             message: "Match created successfully!",
//             match: savedMatch,
//         });
//     } catch (error) {
//         console.error("Error creating match:", error);
//         return res.status(500).json({
//             message: "An error occurred while creating the match.",
//             error: error.message,
//         });
//     }
// };
// exports.getAllMatch = async (req,res)=>{
//     try{
        
//         const getMatch = await Match.find();
//         return res.status(200).json({message: "get all match successfully", getMatch});
//     }  catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: "Internal server error ",
//             error: error.message,
//         });
//     }
// }
// exports.getMatchID = async (req,res)=>{
//     try{
//         const id = req.params.id;
//         const getMatch = await Match.findById(id);
//         return res.status(200).json({message: "get id match successfully", getMatch});
//     }  catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: "Internal server error ",
//             error: error.message,
//         });
//     }
// }
// exports.updateMatch = async (req, res) => {
//     try {
//         const id= req.params.id;
//         const update = req.body; 
//         // Find the match by ID and update it
//         const updatedMatch = await Match.findByIdAndUpdate(
//             id, 
//             update, {new: true, runValidators: true}
//         );
//         return res.status(200).json({message:'update successfully',updatedMatch})

//     } catch (error) {
//         console.error("Error updating match:", error);
//         return res.status(500).json({
//             message: "An error occurred while updating the match.",
//             error: error.message,
//         });
//     }
// };
// exports.deleteMatch = async (req, res) => {
//     try {
//         const id = req.params.id; 
//         // Find the match by ID and update it
//         const deleteMatch = await Match.findByIdAndDelete(id);
//         return res.status(200).json({message:'delete successfully',deleteMatch})

//     } catch (error) {
//         console.error("Error delete match:", error);
//         return res.status(500).json({
//             message: "An error occurred while delete the match.",
//             error: error.message,
//         });
//     }
// };

// import venue from "../models/venuemodel";
// export.createVenue = async (req,res)=>{
    
// }



