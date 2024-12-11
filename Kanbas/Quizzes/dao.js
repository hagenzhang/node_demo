import Database from "../Database/index.js";

export function findQuizForCourse(quizId) {
  const { quizzes } = Database;
  return quizzes.filter((quiz) => quiz.course === quizId);
}

export function deleteQuiz(quizId) {
    const { quizzes } = Database;
    Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
}
   
export function createQuiz(quiz) {
    const {quizzes} = Database;
    const newQuiz = { 
        ...quiz, 
        _id: Date.now().toString()
    };
    Database.quizzes = [...quizzes, newQuiz];
    return newQuiz;
}

export function updateQuiz(quizId, quizUpdates) {
    const { quizzes } = Database;
    const quiz = quizzes.find((quiz) => quiz._id === quizId);
    Object.assign(quiz, quizUpdates);
    return quiz;
}