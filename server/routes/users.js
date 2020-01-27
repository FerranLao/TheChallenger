import express from 'express'
import { getUsersByName, getUserById } from '../controllers/users'
const router = express.Router()

router.get('/getByName', getUsersByName)

router.get('/getById', getUserById)


module.exports = router