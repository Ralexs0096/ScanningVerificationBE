import { Router } from 'express'

const router = Router()

router.get('/', () => {
  console.log("users");
})

export default router
