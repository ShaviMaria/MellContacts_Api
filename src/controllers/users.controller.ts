import { Request, Response } from "express"

const signUp = async (req: Request, res: Response): Promise<void> => {
    try {
    } catch(error: any) {
        console.error(error.message)
        res.status(500).json({ message: 'Internal error' })
    }
}