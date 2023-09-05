import { Router } from 'express'
import { methods as usersController } from '../controllers/users.controller'

const router:Router = Router()

router.post('signup', usersController.signUp)

export default router