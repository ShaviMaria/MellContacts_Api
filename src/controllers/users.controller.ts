import { Request, Response } from "express"
import { Connection } from 'promise-mysql'
import { getConnection } from "../database/database"
import IUser from '../models/user.model'

const verifyUserExitsByEmail = async (email: string): Promise<boolean> => {
    try {
        const connection: Connection = await getConnection()
        const query = `SELECT * FROM User WHERE Email = "${email}"`
        const result: any[] = await connection.query(query)

        return result.length > 0 ? true : false
    } catch(error: any) {
        console.error(error.message)
        throw error
    }
}

const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body

        if(!body.email) {
            res.status(400).json({ message: 'Error: Please add a email property' })
            return
        }
        if(!body.name) {
            res.status(400).json({ message: 'Error: Please add a name property' })
            return
        }
        if(!body.first_surname) {
            res.status(400).json({ message: 'Error: Please add a first_surname property' })
            return
        }
        if(!body.second_surname) {
            res.status(400).json({ message: 'Error: Please add a second_surname property' })
            return
        }
        if(!body.password) {
            res.status(400).json({ message: 'Error: Please add a password property' })
            return
        }

        const userExists: boolean = await verifyUserExitsByEmail(body.email)

        if(userExists) {
            res.status(400).json({ message: 'Error: user already exists' })
            return
        }

        const user: IUser = {
            Email: body.email,
            Name: body.name,
            First_Surname: body.first_surname,
            Second_Surname: !body.second_surname ? null : body.second_surname,
            Password: body.password
        }

        const connection: Connection = await getConnection()
        const query: string = 'INSER INTO User SET ?'
        await connection.query(query, user)

        res.send({ message: 'User added successfully' })
        
    } catch(error: any) {
        console.error(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}

export const methods = {
    signUp
}