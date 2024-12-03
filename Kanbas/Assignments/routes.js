import * as modulesDao from "./dao.js";

export default function AssignmentRoutes(app) {
    // delete assignment
    app.delete("/api/assignments/:assignmentID", async (req, res) => {
        const { moduleId } = req.params;
        const status = await modulesDao.deleteModule(moduleId);
        res.send(status);
    });
    app.put("/api/modules/:moduleId", (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = modulesDao.updateModule(moduleId, moduleUpdates);
        res.send(status);
    });

}
