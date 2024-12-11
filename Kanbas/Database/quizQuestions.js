
// Question Type
const questionType = Object.freeze({
    MULTICHOICE: Symbol("MULTICHOICE"), // MUST HAVE: _index, type, points, question, possible: [], solution
    TRUEFALSE: Symbol("TRUEFALSE"),     // MUST HAVE: _index, type, points, question, solution
    FILLBLANK: Symbol("FILLBLANK"),     // MUST HAVE: _index, type, points, question, solutions: []
});

export default [
    {
        _id: "BmcY6WTnVr5q",
        questions: [
            {
                _index: 0,
                type: questionType.MULTICHOICE,
                points: 10,
                question: "The answer is A!",
                options: ['A', 'B', 'C', 'D'],
                solution: 'A',
            },
            {
                _index: 1,
                type: questionType.TRUEFALSE,
                points: 20,
                question: "The answer is True!",
                solution: true,
            },
            {
                _index: 2,
                type: questionType.FILLBLANK,
                points: 20,
                question: 'The answer is 2! or two, either should work',
                solution: ['2', 'two'],
            },
        ]
    },
]