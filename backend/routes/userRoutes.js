import express from 'express'
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
} from '../controllers/userController.js'
import { admin, protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
//to protect getUSerProfile route middleware is passed as the first argument
router
  .route('/profile')
  .get(protect, getUserProfile) // get request
  .put(protect, updateUserProfile) //put request
router.route('/:id').delete(protect, admin, deleteUser)

export default router
