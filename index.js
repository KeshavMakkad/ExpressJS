const express = require("express");
const app = express();

let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "js" },
  { id: 3, name: "pyth" },
];

// app.get("/", (req, res) => {
//   res.json("Hello, Welcome");
// });

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.post("/courses", (req, res) => {
  //   console.log(req.body);
  const newCourse = req.body;

  const newId = courses.length ? courses[courses.length - 1].id + 1 : 1;
  const course = { id: newId, name: newCourse.name };
  courses.push(course);
});

app.listen(3000, () => {
  console.log("server started");
});
