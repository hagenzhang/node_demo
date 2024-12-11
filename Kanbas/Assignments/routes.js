import * as dao from "./dao.js";
import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 12);

export default function AssignmentRoutes(app) {
    // get all assignments
    app.get("/api/assignments/all", async (req, res) => {
        const assignments = await dao.getAssignments();
        res.json(assignments)
    });

    // get assignments by Course
    app.get("/api/assignments/:courseId/assignments", async (req, res) => {
        const { courseId } = req.params;
        const assignments = await dao.getAssignmentsByCourse(courseId);
        res.json(assignments)
    });

    // get an assignment
    app.get("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const assignment = await dao.getAssignment(assignmentID)
        res.json(assignment)
    });

    // create assignment
    app.post("/api/assignments", async (req, res) => {
        const assignment = { ...req.body, _id: nanoid() };
        const status = await dao.createAssignment(assignment);
        res.send(status);
    });

    // delete assignment
    app.delete("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const status = await dao.deleteAssignment(assignmentID);
        res.send(status);
    });

    // update assignment
    app.put("/api/assignments/:assignmentID", async (req, res) => {
        const { assignmentID } = req.params;
        const assignmentUpdates = req.body;
        const status = dao.updateAssignment(assignmentID, assignmentUpdates);
        res.send(status);
    });
}