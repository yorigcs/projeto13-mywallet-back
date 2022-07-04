import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
let mongoDB = null;
const client = new MongoClient(process.env.MONGO_URI);
try {
    await client.connect();
    mongoDB = client.db(process.env.MONGO_DB);
    console.log('Connected to MongoDB!')
} catch (err) {
    console.log('Ocurred an error to connect to MongoDB!', err);
}
export default mongoDB

