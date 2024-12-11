import "dotenv/config";
import express from 'express';
import session from "express-session";
import cors from "cors";

import AssignmentRoutes from "./Kanbas/Assignments/routes.js"
import CourseRoutes from "./Kanbas/Courses/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import QuizzesRoutes from "./Kanbas/Quizzes/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";

const app = express()

app.use(
    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:3000",
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());

app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!')})

AssignmentRoutes(app);
CourseRoutes(app);
EnrollmentRoutes(app);
ModuleRoutes(app);
QuizzesRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000)