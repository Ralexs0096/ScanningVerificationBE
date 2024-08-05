import { Router } from 'express'
import { getAllAreas } from '../controllers/area.controller.js'

const router = Router()

router.get('/', getAllAreas)

export default router
