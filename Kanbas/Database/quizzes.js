// Quiz Type: Graded Quiz (default), Practice Quiz, Graded Survey, Ungraded Survey
const quizType = Object.freeze({
    GRADED: Symbol("GRADED"),
    PRACTICE: Symbol("PRACTICE"),
    GRADEDSURVEY: Symbol("GRADEDSURVEY"),
    UNGRADEDSURVEY: Symbol("UNGRADEDSURVEY")
});

// Assignment Group: Quizzes (default), Exams, Assignments, Project
const quizGroup = Object.freeze({
    QUIZZES: Symbol("QUIZZES"),
    EXAMS: Symbol("EXAMS"),
    ASSIGNMENTS: Symbol("ASSIGNMENTS"),
    PROJECTS: Symbol("PROJECTS")
});

export default [
    {
        _id: "q0",
        title: "Default Quiz",
        description: "A Very Default Description Here",
        courseNumber: "RS101",
        quizType: quizType.GRADED,
        points: 100,
        assignmentGroup: quizGroup.QUIZZES,
        shuffleAnswers: true,
        timeLimitMin: 20,
        maxAttempts: 1, // no multiple attempts boolean, just set this value
        showCorrectAnswers: true,
        accessCode: "",
        oneQuestionAtATime: true, // one question at a time
        webcamRequired: false,
        lockQuestionAfterAns: false,
        dueDate: "2025-05-15T23:59",
        availableDate: "2024-05-15T00:00",
        closeDate: "2025-05-16T23:59", // until date equivalent
    },
]