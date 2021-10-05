import express from "express";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv/config");

const app = express();
const port = process.env.PORT || 8080;
const messagesRouter = require("./routes/routes");

app.use(cors());

app.use(express.json());

app.use("/", messagesRouter);

app.get("/", (_request, response) => {
    response.send(`Server is running at ${port}`);
});

mongoose.connect(process.env.DATABASE_URL, () => {
    console.log("successful connection with the Database");
});

app.listen(port, () => {
    console.log("Server is running");
});