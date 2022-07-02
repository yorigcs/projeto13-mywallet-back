import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();

let mongoDB = null;
const client = new MongoClient(process.env.MONGO_URL)
client.connect()
    .then(() => mongoDB = client.db(process.env.MONGO_DB))
    .catch(err => console.error(err));
    
export { mongoDB }

