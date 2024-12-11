import db from "../Database/index.js";
let { quizzes } = db;

// Get quizzes by course ID
export const getQuizzesByCourse = async (courseId) => {
    try {
        const filteredQuizzes = quizzes.filter(quiz => quiz.course === courseId);
        return filteredQuizzes;
    } catch (error) {
        console.error("Error retrieving quizzes by course:", error);
        return []
    }
};

// Get all quizzes
export const getQuizzes = async () => {
    try {
        return quizzes;
    } catch (error) {
        console.error("Error retrieving all quizzes:", error);
        return []
    }
};

// Get a single quiz by its ID
export const getQuiz = async (quizID) => {
    try {
        const quiz = quizzes.find((quiz) => quiz._id === quizID);
        if (quiz) {
            return quiz;
        } else {
            console.log(`No quiz found when trying to retrieve ID ${quizID}`)
            return {};
        }
    } catch (error) {
        console.error("Error retrieving quizzes:", error);
        return {};
    }
};

// Create a new quiz
export const createQuiz = async (quiz) => {
    try {
        quizzes.push(quiz);
        return 200;
    } catch (error) {
        console.error("Error creating quiz:", error);
        return 500;
    }
};

// Delete a quiz by its ID
export const deleteQuiz = async (quizID) => {
    try {
        const index = quizzes.findIndex((quiz) => quiz._id === quizID);
        if (index !== -1) {
            quizzes.splice(index, 1);
            return 200;
        } else {
            return 404;
        }
    } catch (error) {
        console.error("Error deleting quiz:", error);
        return 500;
    }
};

// Update an existing quiz by its ID
export const updateQuiz = async (quizID, quizUpdates) => {
    try {
        const index = quizzes.findIndex((quiz) => quiz._id === quizID);
        if (index !== -1) {
            quizzes[index] = { ...quizzes[index], ...quizUpdates };
            return 200;
        } else {
            console.error("Quiz ID does not exist!");
            return 404;
        }
    } catch (error) {
        console.error("Error updating quiz:", error);
        return 500;
    }
};

// Get the Questions from a Quiz
export const getQuizQuestions = async (quizID) => {
    try {
        const quiz = quizzes.find((quiz) => quiz._id === quizID);
        
    } catch (err) {

    }
};



