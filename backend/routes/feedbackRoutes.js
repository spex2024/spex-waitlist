import { Router } from 'express';
import {createFeedback, getFeedback} from "../controller/feedback.js";


const router = Router();

router.post('/create', createFeedback);
router.get('/feedback', getFeedback);

export default router;