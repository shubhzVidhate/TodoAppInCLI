import express from 'express';
import { gethomePage } from '../controllers/getHomePage.js';
import { getHomePageParams } from '../controllers/getHomePageParams.js'

const router = express.Router();

router.get('/',gethomePage);
router.get('/users/:id',getHomePageParams);

export default router;