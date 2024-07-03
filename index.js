const express = require("express");
const app = express();
app.use(express.json());

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

app.listen(3000, () => {
  console.log("server started");
});
