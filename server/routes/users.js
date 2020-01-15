import express from 'express'
import {getUsersByName} from '../controllers/users'
const router = express.Router()

router.get('/getByName',getUsersByName)


module.exports = router