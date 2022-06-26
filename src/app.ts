
import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import * as bodyParser from "body-parser";

dotenv.config();

// PUT ROUTES IMPORTS HERE

const app = express();

// Intialize the express app and bind middleware
app.use(helmet());

// Cors, change origin if needed
app.use(cors({
    origin: '*'
}));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Utilize json middleware
app.use(express.json());

// Pulse check
app.get("/", async (req: Request, res: Response) => {
    res.status(200).send("Welcome to the Pricemedic API!");
});

// PUT ROUTES HERE

module.exports = app;