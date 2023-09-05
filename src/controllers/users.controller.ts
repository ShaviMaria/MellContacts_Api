//import { Request, Response } from "express"
//import IUser from '../models/user.model'

//const verifyUserExitsByEmail = async (email: string): Promise<boolean> => {
    //try {
        //const connection: Connection
    //} catch(error: any) {
        //console.error(error.message)
        //throw error
    //}
//}

//const signUp = async (req: Request, res: Response): Promise<void> => {
    //try {
        //const body = req.body

        //if(!body.email) {
            //res.status(400).json({ message: 'Error: Please add a email property' })
            //return
        //}
        //if(!body.name) {
            //res.status(400).json({ message: 'Error: Please add a name property' })
            //return
        //}
        //if(!body.first_surname) {
            //res.status(400).json({ message: 'Error: Please add a first_surname property' })
            //return
        //}
        //if(!body.second_surname) {
            //res.status(400).json({ message: 'Error: Please add a second_surname property' })
            //return
        //}
        //if(!body.password) {
            //res.status(400).json({ message: 'Error: Please add a password property' })
            //return
        //}

        //const user: IUser = {
            //Email: body.email,
            //Name: body.name,
            //First_Surname: body.first_surname,
            //Second_Surname: !body.second_surname ? null : body.second_surname,
            //Password: body.password
        //}


        
    //} catch(error: any) {
        //console.error(error.message)
        //res.status(500).json({ message: 'Internal error' })
    //}
//}