import { Express } from "express";
import authRoutes from "./auth.routes";

export default (app: Express)=>[
    authRoutes(app),
]