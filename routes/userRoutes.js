import express from 'express';
import userController from '../controllers/userController.js';
const {Delete , Create,update,getData} = userController;

const router = express.Router();
router.put("/:userId",update);
router.get("/getdata",getData);
router.delete("/:id",Delete);
router.post("/create",Create);
export default router;