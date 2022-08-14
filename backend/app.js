import express from "express";
import { getQuestionAnswers } from "./db";
require('dotenv').config()

const app = express();
const PORT = parseInt(process.env.PORT || "8000");

app.get("/questions", (req, res) => {
    // read from in memory db
    const questionsAndAnswers = getQuestionAnswers();
    return res.send(questionsAndAnswers);
})

app.post("/calculate", (req, res) => {
    const { selectedAnswers } = req.body;
    if (!selectedAnswers) {
        return res.status(400).send({
            error: "invalid data format"
        })
    }
})

