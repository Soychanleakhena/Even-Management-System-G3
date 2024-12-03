import express from "express";
// import  {createSponsor,getAllSponsor} from '../controllers/sponsorsController.js';
import sponsorsController from '../controllers/sponsorsController.js';
const { createSponsor, getAllSponsor , getSponsorById , updateSponsorById, deleteSponsorById } = sponsorsController;

const router = express.Router();

router.post('/create',createSponsor);
router.get('/all',getAllSponsor);
router.get('/:id',getSponsorById);
router.put('/update/:id',updateSponsorById);
router.delete('/delete/:id',deleteSponsorById);


export default router;