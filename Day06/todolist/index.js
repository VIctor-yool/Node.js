const express = require("express");
const app = express();
const joi = require("joi");
const morgan = require("morgan");
// const { responseFormatter } = require("./func");
const { members } = require("./data");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 메서드, URL, 상태코드, 응답시간
app.use(morgan("dev"));
// app.use(responseFormatter);
// app.use(timeChecker);
// app.use(logger);
// app.use(secure);

app.get("/", (req, res) => {
  res.send("you have Toooooo dooooooooooo list");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:todoId", (req, res) => {
  const { todoId } = req.params;
  const todo = todos.find((v) => v.id === todoId);

  if (!todo) {
    res.status(404).json({ msg: "일치하는 항목이 없습니다." });
    return;
  }
  res.json({ data: todo });
});

//
app.post("/todos", (req, res) => {
  const { title, description, status, duedate } = req.body;
  if (!title || !description || !status || !duedate) {
    res.status(400).json({ msg: "데이터가 누락되었습니다." });
    return;
  }
  const newTodos = {
    id: v4(),
    title,
    description: description || "",
    status,
    dueDate,
    createdAt: new Date().toLocaleDateString,
    updatedAt: new Date().toLocaleDateString,
  };
  todos.push(newTodos);
  res.json({ msg: "새로운 todo가 list에 등록되었습니다!", todos: newTodos });
});

// 수정
app.put("/todos/:todoId", (req, res) => {
  const { todoId } = req.params;
  const todo = todos.find((v) => v.id == todoId);

  if (!todo) {
    res.status(404).json({ msg: "일치하는 항목이 없습니다." });
    return;
  }

  res.json(findIndex);
});

// 삭제
app.delete("/todos/:todoId", (req, res) => {
  const { todoId } = req.params;
  const todo = todos.find((v) => v.id == todoId);
  if (index == -1) {
    res.status(404).json({ msg: "일치하는 항목이 없습니다." });
    return;
  }

  feeds.splice(index, 1);
  subtasks = subtasks.filter((v) => v.todoId !== todoId);

  return res.status(204).send();
});

// subtask

app.get("/todos/:todoId/subtasks", (req, res) => {
  const subtasks = res.json();
});

app.get("/subtasks/:subtaskId", (req, res) => {});

app.post("/todos/:todoId/subtasks", (req, res) => {
  const { todoId } = req.params;
  const todo = todos.find((v) => v.id === todoId);
  if (!todo) {
    res.status(404).json({ msg: "일치하는 항목이 없습니다." });
    return;
  }
  const { title, status } = req.body;

  const subtask = {
    id: v4(),
    title,
    description,
    status,
    dueDate,
    createdAt: new Date().toLocaleDateString,
    updatedAt: new Date().toLocaleDateString,
  };
  subtasks.push(subtask);

  res.status(201).json({ msg: "Subtask가 생성되었습니다.", data: subtask });
});

app.put("?subtasks/:subtaskId", (req, res) => {});

app.delete("/subtasks/:subtaskId", (req, res) => {});

app.listen(3000, () => {
  console.log("Tooooodo list");
});
