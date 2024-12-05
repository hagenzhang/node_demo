import model from "./model.js";


export function getAssignmentByID(assignmentID) {
    return model.find({ _id: assignmentID });
}
export function getAssignmentsByCourse(courseNum) {
    return model.find({ course: courseNum });
}
export function createAssignment(assignment) {
    delete assignment._id
    return model.create(assignment);
}
export function deleteAssignment(assignmentID) {
    return model.deleteOne({ _id: assignmentID});
}
export function updateAssignment(assignmentID, assignmentUpdates) {
    return model.updateOne({ _id: assignmentID }, assignmentUpdates)
}