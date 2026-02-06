import express from 'express';
import { protectAdmin } from '../middleware/auth.js';
import { getAllBookings, getAllshows, getDashboardData, isAdmin } from '../controllers/adminController.js';

const adminRouter = express.Router();

adminRouter.get('/is-admin', protectAdmin, isAdmin)
adminRouter.get('/dashboard', protectAdmin, getDashboardData)
adminRouter.get('/all-shows', protectAdmin, getAllshows)
adminRouter.get('/all-bookings', protectAdmin, getAllBookings)

export default adminRouter;