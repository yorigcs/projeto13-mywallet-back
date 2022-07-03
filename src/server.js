import authRoutes from './routes/authRoutes.js';
import appRouter from './routes/appRoutes.js';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();


const PORT = process.env.PORT || 5000;
const server = express();
server.use([cors(), express.json()]);

server.use(authRoutes);
server.use(appRouter)



server.listen(PORT, () => console.log('listening on port ' + PORT));