import express from "express";

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (_request, response) => {
    response.send(`Server is running at ${port}`);
});

app.listen(port, () => {
    console.log("Server is running");
});