import { Request, Response } from "express"
import { Connection } from 'promise-mysql'
import { getConnection } from "../database/database"

const getAllUserContacts = async (req: Request, res: Response): Promise<void> => {
    try {
        const connection: Connection = await getConnection()
        const query: string = `SELECT * FROM Contact WHERE User = ${req.user.Id_User}`
        const result: any[] = await connection.query(query)

        res.send(result)
    } catch(error: any) {
        console.error(error.message)
        res.status(500).json({ message: 'Error: internal error' })
    }
}

export const methods = {
    getAllUserContacts
}