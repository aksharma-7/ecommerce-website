import express from 'express'
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', authUser)
//to protect getUSerProfile route middleware is passed as the first argument
router
  .route('/profile')
  .get(protect, getUserProfile) // get request
  .put(protect, updateUserProfile) //put request

export default router
