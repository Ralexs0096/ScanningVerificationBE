import { Router } from 'express'
import { verifyCodesByArea } from '../controllers/verification.controller.js'

const router = Router()

router.post('/', verifyCodesByArea)

export default router
