import * as dao from "./dao.js";

export default function QuizzesRoutes(app) {
    // create quiz
    app.post("/api/courses/:courseID/assignments"), async (req, res) => {
        const { courseID } = req.params;
        const assignment = {
            ...req.body,
            course: courseID,
        };
        const newAssignment = await assignmentsDao.createAssignment(assignment)
        res.send(newAssignment)
    }
    // get quiz by ID
    app.get("/api/courses/:courseId/assignments"), async (req, res) => {
        const { courseId } = req.params;
        const assignments = await assignmentsDao.getAssignmentsByCourse(courseId);
        res.json(assignments)
    }
    // delete quiz
    app.delete("/api/courses/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentID);
        res.send(status);
    });
    // update quiz
    app.put("/api/courses/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const assignmentUpdates = req.body;
        const status = assignmentsDao.updateAssignment(assignmentID, assignmentUpdates);
        res.send(status);
    });
}
