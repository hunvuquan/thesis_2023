import dotenv from 'dotenv'

dotenv.config();

export default {
    host: process.env.HOST,
    port: process.env.PORT
}