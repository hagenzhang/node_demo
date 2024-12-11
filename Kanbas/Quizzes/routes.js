import * as quizDao from "./dao.js";

export default function QuizzesRoutes(app) {

// updates a quiz
app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
});

//  app.delete("/api/assignments/:assignmentId", async (req, res) => {
//    const { assignmentId } = req.params;
//    const status = await assignmentDao.deleteAssignment(assignmentId);
//    res.send(status);
//  });

app.get("/api/courses/:cid/quizzes", (req, res) => {
    const { cid } = req.params;
    const quizzes = quizDao.findQuizForCourse(cid);
    res.json(quizzes);
  });
 
} 