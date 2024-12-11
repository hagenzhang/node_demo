import db from "../Database/index.js";
let { assignments } = db;

// Get assignments by course ID
export const getAssignmentsByCourse = async (courseId) => {
    try {
        const filteredAssignments = assignments.filter(assignment => assignment.course === courseId);
        return filteredAssignments;
    } catch (error) {
        console.error("Error retrieving assignments by course:", error);
        return []
    }
};

// Get all assignments
export const getAssignments = async () => {
    try {
        return assignments;
    } catch (error) {
        console.error("Error retrieving assignments by course:", error);
        return []
    }
};

// Get a single assignment by its ID
export const getAssignment = async (assignmentID) => {
    try {
        const assignment = assignments.find((assignment) => assignment._id === assignmentID);
        if (assignment) {
            return assignment;
        } else {
            console.log(`No assignment found when trying to retrieve ID ${assignmentID}`)
            return {};
        }
    } catch (error) {
        console.error("Error retrieving assignment:", error);
        return {};
    }
};

// Create a new assignment
export const createAssignment = async (assignment) => {
    try {
        assignments.push(assignment);
        return 200;
    } catch (error) {
        console.error("Error creating assignment:", error);
        return 500;
    }
};

// Delete an assignment by its ID
export const deleteAssignment = async (assignmentID) => {
    try {
        const index = assignments.findIndex((assignment) => assignment._id === assignmentID);
        if (index !== -1) {
            assignments.splice(index, 1);
            return 200;
        } else {
            return 404;
        }
    } catch (error) {
        console.error("Error deleting assignment:", error);
        return 500;
    }
};

// Update an existing assignment by its ID
export const updateAssignment = async (assignmentID, assignmentUpdates) => {
    try {
        const index = assignments.findIndex((assignment) => assignment._id === assignmentID);
        if (index !== -1) {
            assignments[index] = { ...assignments[index], ...assignmentUpdates };
            return 200;
        } else {
            console.error("Assignment ID does not exist!");
            return 404;
        }
    } catch (error) {
        console.error("Error updating assignment:", error);
        return 500;
    }
};
