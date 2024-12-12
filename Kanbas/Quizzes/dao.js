import db from "../Database/index.js";
let { quizzes, questions } = db;

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

// =============================================================================

// Ensures that all of the questions in a questions list are well-formatted.
// MULTICHOICE must have: _index, type, points, question, possible: [], solution
// TRUEFALSE must have: _index, type, points, question, solution
// FILLBLANK must have: _index, type, points, question, solutions: []
function questionsValidation(questionList) {
    if (!questionList.isArray()) {
        throw Error("Given QuestionList is NOT of type Array")
    }

    for (q in questionList) {
        // generic requirements
        if (!(("_index" in q) && ("type" in q) && ("points" in q) && ("question" in q))) {
            throw Error("Missing generic requirement: ", q);
        }

        // case specific requirements
        switch (q.type) {
            case "MULTICHOICE":
                if (!(("possible" in q) && ("solution" in q))) {
                    throw Error("MULTICHOICE has missing field: ", q)
                }
                break;
            case "TRUEFALSE":
                if (!(("solution" in q))) {
                    throw Error("TRUEFALSE has missing field: ", q)
                }
                break;
            case "FILLBLANK":
                if (!(("solutions" in q))) {
                    throw Error("TRUEFALSE has missing field: ", q)
                }
                break;
            default:
                throw Error("Invalid Question Type");
        }
    }
}


// Get the Questions from a Quiz
export const getQuizQuestions = async (quizID) => {
    try {
        const quiz = quizzes.find((quiz) => quiz._id === quizID);
        const quizQs = questions.find((q) => q._id === quiz.questionsID)

        if (quizQs) {
            return quizQs
        } else {
            console.log(`No quiz questions found for QuizID ${quizID}`)
            return {};
        }
    } catch (err) {
        console.error("Error retrieving quiz questions:", err);
        return {};
    }
};

export const assignQuizQuestions = async (quizID, qObject) => {
    try {
        questionsValidation(qObject.questions)

        questions.push(qObject)

        const index = quizzes.findIndex((quiz) => quiz._id === quizID);

        if (index !== -1) {
            quizzes[index] = { ...quizzes[index], questionsID: qObject._id };
            return 200;
        } else {
            console.error("Quiz ID does not exist!");
            return 404;
        }

    } catch (err) {
        console.error("AssignQuizQuestions Error:", err)
        return 500;
    }
}





