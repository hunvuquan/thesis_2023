import { Express, Router, Request, Response } from 'express'

const route: Router = Router()
route.get('/v1', (req: Request, res: Response) => {
res.sendStatus(200)
})
export default (app: Express) => [
    app.use('/auth', route)
]