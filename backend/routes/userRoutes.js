import express from 'express'
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile) //to protect getUSerProfile route middleware is passed as the first argument

export default router