import model from "./model.js";

export function createAssignment(assignment) {
    delete assignment._id
    return model.create(assignment);
}
export function deleteAssignment(assignmentID) {
    return model.deleteOne({ _id: assignmentID});
}



