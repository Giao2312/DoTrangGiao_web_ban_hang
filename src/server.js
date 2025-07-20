import express from 'express';
import {connectDB , GET_DB} from './config/mongodb.js';
import { env } from  '~/config/environment.js';
import 'dontenv/config' 
import {APIs_V1} from './routes/v1/boardRoutes.js ';

const Start_Server = async () => {
    const app = express();
    app.use('/v1', APIs_V1);
    app.get('/', async (req, res) => {

        // eslint -disable-next-line no-console
        console.log(await GET_DB().listCollections().toArray());

        res.send('Welcome to the Mini Ecommerce Backend');
    })

    app.listen(env.APP_PORT, env.APP_HOST, () => {
        // eslint-disable-next-line no-console
        console.log(`Server is running on http://${env.APP_HOST}:${env.APP_PORT}`);
    })

}
connectDB()
    .then(() => {
        // eslint-disable-next-line no-console
        console.log('Connected to MongoDB');
        Start_Server();
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error connecting to MongoDB:', error);
    });
//change 
