import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import envData from '../config'

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token: string = req.header('Auth-token') || ""
        if(token == "") {
            console.error('Client did not provide a token')
            res.status(401).json({ message: 'Error: invalite token' })
            return
        }

        const payload = jwt.verify(token, envData.secret_token_word)
        req.user = payload
        next()
    } catch(error: any) {
        console.error(error.message)
        res.status(401).json({ message: 'Error: invalite token' })
    }
}

export default verifyToken