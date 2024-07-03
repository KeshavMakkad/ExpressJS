const express = require("express");
const app = express();

let courses = [
  { id: 1, name: "java" },
  { id: 2, name: "js" },
  { id: 3, name: "pyth" },
];

app.get("/courses", (req, res) => {
  res.json(courses);
});

app.listen(3000, () => {
  console.log("server started");
});
