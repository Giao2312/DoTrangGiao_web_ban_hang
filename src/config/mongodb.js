import {MongoClient , ServerApiVersion} from 'mongodb';
import { env } from '~/config/environment.js';

let databaseInstance = null;
// eslint-disable-next-line no-console 
console.log (' MongoDB URI:', env.MONGODB_URI);

const MongoClientIntance = new MongoClient(env.MONGODB_URI, {
    serverApi: ServerApiVersion.v1
})

export const connectDB = async () => {
    await MongoClientIntance.connect();
    databaseInstance = MongoClientIntance.db(env.DATABASE_NAME);
}

export const  GET_DB =  () => {
    if (!databaseInstance) {
        throw new Error(' Database not connected ');
    }
    return databaseInstance;
}