import express from "express";
import { getQuestionAnswers } from "./db";
import { validateRequest } from "./utils";
import('dotenv/config')

const app = express();
const PORT = parseInt(process.env.PORT || "8000");

app.get("/questions", (req, res) => {
    // read from in memory db
    const questionsAndAnswers = getQuestionAnswers();
    const refinedQuestionsAndAnswers = questionsAndAnswers.map((item) => {
        return {
            q: {
                id: item.id,
                text: item.text
            },
            a: item.a.map((ans) => {
                return {
                    id: ans.id,
                    text: ans.text
                }
            })
        }
    })
    return res.send({ data: refinedQuestionsAndAnswers });
})

app.post("/calculate", (req, res) => {
    const { selectedAnswers } = req.body;
    if (!selectedAnswers) {
        return res.status(400).send({
            error: "invalid data format"
        })
    }

    const isAnswersValid = validateRequest(selectedAnswers);
    if (!isAnswersValid) {
        return res.status(400).send({
            error: "invalid data format"
        })
    }

    const personality = calculatePersonality(selectedAnswers);

    return res.send(personality)

})


app.listen(PORT, () => {
    console.log("Listening to the PORT =>", PORT)
})

