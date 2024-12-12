import * as dao from "./dao.js";
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 12);

export default function QuizzesRoutes(app) {
    // get all quizzes
    app.get("/api/quizzes/all", async (req, res) => {
        const quizzes = await dao.getQuizzes();
        res.json(quizzes)
    });

    // get quizzes by Course
    app.get("/api/quizzes/:courseId/quizzes", async (req, res) => {
        const { courseId } = req.params;
        const quizzes = await dao.getQuizzesByCourse(courseId);
        res.json(quizzes)
    });

    // get a quiz
    app.get("/api/quizzes/:quizID", async (req, res) => {
        const { quizID } = req.params;
        const quiz = await dao.getQuiz(quizID)
        res.json(quiz)
    });

    // create quiz
    app.post("/api/quizzes", async (req, res) => {
        const quiz = { ...req.body, _id: nanoid() };
        const status = await dao.createQuiz(quiz);
        res.sendStatus(status);
    });

    // delete quiz
    app.delete("/api/quizzes/:quizID", async (req, res) => {
        const { quizID } = req.params;
        const status = await dao.deleteQuiz(quizID);
        res.sendStatus(status);
    });

    // update quiz
    app.put("/api/quizzes/:quizID", async (req, res) => {
        const { quizID } = req.params;
        const quizUpdates = req.body;
        const status = await dao.updateQuiz(quizID, quizUpdates);
        res.sendStatus(status);
    });

    // ========================================================================

    // get the questions from a quiz
    app.get("/api/quizzes/questions/:quizID", async (req, res) => {
        const { quizID } = req.params;
        const questions = await dao.getQuizQuestions(quizID)
        res.json(questions)
    });

    // assign a bunch of questions to a quiz
    // questions body should come as:
    // { questions: [ ... ] }
    app.post("/api/quizzes/questions/:quizID", async (req, res) => {
        const { quizID } = req.params;
        const questions = { ...req.body, _id: nanoid() };
        const status = await dao.assignQuizQuestions(quizID, questions);
        res.sendStatus(status);
    });
}
