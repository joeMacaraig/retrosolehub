import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//import routes
import { inventoryRouter } from './routes/inventory.routes.js';
import { sneakerRouter } from './routes/sneaker.routes.js';
import { productRouter } from './routes/products.routes.js';
import { userRouter } from './routes/users.router.js';

dotenv.config()

//dotenv items
const PORT = process.env.PORT;
const DB_PORT = process.env.DB_PORT;

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json({ limit: "4000kb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "4000kb", extended: true }));

//routes
app.use(inventoryRouter);
app.use(sneakerRouter);
app.use(productRouter);
app.use(userRouter);

//database connection
mongoose
    .set('strictQuery', false)
    .connect(DB_PORT, {useNewUrlParser : true, dbName: "ShoeWebsite"})
    .then(() => app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT} 🚀`)))
    .catch((error) => console.log(error));