import { getQuestionAnswers } from "../db"

export const validateRequest = (answers) => {
    const questionsAnswers = getQuestionAnswers();
    return Object.keys(answers).length === questionsAnswers.length;
}

export const calculatePersonality = (answers) => {
    const questionsAnswers = getQuestionAnswers();
    let score = 0;
    Object.entries(answers).map((entry) => {
        const [questionId, answerId] = entry;
        const question = questionsAnswers.find((ques) => ques.id === parseInt(questionId));
        const answer = question.a.find((answer) => answer.id === answerId);
        score += answer.score;
    })

    return score > 0 ? "EXTROVERT" : "INTROVERT"
}