import "reflect-metadata";
import express, { Application } from 'express';
import { config } from 'dotenv';
import { log } from "console";
import mainRouter from './routes/Router';

config();

const app: Application = express();
app.use(express.json());
app.use("/api", mainRouter);

const PORT: string | number = process.env.PORT || 3001;

app.listen(PORT, () => {
    log(`Server is running on port ${PORT}`);
});
