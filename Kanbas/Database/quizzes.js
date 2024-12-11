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
        course: "RS101",
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
    {
        _id: "q1",
        title: "Quiz A",
        description: "A Very Quiz A Description Here",
        course: "RS102",
        quizType: quizType.PRACTICE,
        points: 10,
        assignmentGroup: quizGroup.ASSIGNMENTS,
        shuffleAnswers: false,
        timeLimitMin: 5,
        maxAttempts: 3, // no multiple attempts boolean, just set this value
        showCorrectAnswers: false,
        accessCode: "test",
        oneQuestionAtATime: false, // one question at a time
        webcamRequired: false,
        lockQuestionAfterAns: false,
        dueDate: "2025-05-15T23:59",
        availableDate: "2024-05-15T00:00",
        closeDate: "2025-05-16T23:59", // until date equivalent
    },
    {
        _id: "q2",
        title: "Quiz B",
        description: "A Very Quiz B Description Here",
        course: "RS103",
        quizType: quizType.EXAMS,
        points: 100,
        assignmentGroup: quizGroup.EXAMS,
        shuffleAnswers: true,
        timeLimitMin: 60,
        maxAttempts: 1, // no multiple attempts boolean, just set this value
        showCorrectAnswers: false,
        accessCode: "exam1",
        oneQuestionAtATime: true, // one question at a time
        webcamRequired: true,
        lockQuestionAfterAns: false,
        dueDate: "2025-05-15T23:59",
        availableDate: "2024-05-15T00:00",
        closeDate: "2025-05-16T23:59", // until date equivalent
    },
]