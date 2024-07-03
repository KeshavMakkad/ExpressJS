const express = require("express");
const app = express();
app.use(express.json());
app.use(middleware);
app.use(logger);

let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "js" },
  { id: 3, name: "pyth" },
];

app.get("/", (req, res) => {
  res.json("Hello, Welcome");
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.post("/courses", (req, res) => {
  const newCourse = req.body;

  const newId = courses.length ? courses[courses.length - 1].id + 1 : 1;
  const course = { id: newId, name: newCourse.name };
  courses.push(course);
  res.send(courses);
});

app.put("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const updatedCourse = req.body;

  const course = courses.find((c) => c.id === courseId);
  course.name = updatedCourse.name;
  res.json(course);
});

app.delete("/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const courseIdx = courses.findIndex((c) => c.id === courseId);
  courses.splice(courseIdx, 1);
  res.json(courses);
});

app.listen(3000, () => {
  console.log("server started");
});

function middleware(req, res, next) {
  console.log("called");
  next();
}

function logger(req, res, next) {
  const method = req.method;
  const ip = req.ip;
  const date = new Date().toISOString();
  const hostname = req.hostname;

  console.log(`${date}: ${method} ${req.originalUrl} from ${ip} (${hostname})`);

  next();
}
