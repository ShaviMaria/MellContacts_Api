import { Router } from 'express'
import { methods as contactsController } from '../controllers/contacts.controller'
import verifyToken from '../libs/verifyToke'

const router: Router = Router()

router.get('/UserContacts', verifyToken, contactsController.getAllUserContacts)

export default router