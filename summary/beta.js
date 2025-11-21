const { data } = require("./data");
const express = require("express");
const app = express();

// GET : [params, query]

const students = [
  { name: "이영철", age: 25, gender: "male" },
  { name: "신여진", age: 26, gender: "female" },
  { name: "손정우", age: 25, gender: "male" },
  { name: "박신율", age: 31, gender: "male" },
];

const courses = [
  { name: "리눅스", timetable: ["sat", "sun"], teacher: "손흥민" },
  { name: "파이썬", timetable: ["mon", "wed", "fri"], teacher: "김민재" },
  { name: "자바", timetable: ["tue", "thu", "fri"], teacher: "황희찬" },
];

app.get("/courses", (req, res) => {
  const { name, timetable, teacher } = req.query;
  if (teacher && !["파이썬", "리눅스", "자바"].includes(teacher)) {
    return res.json({ msg: "존재하지 않는 Name입니다." });
  }
  if (teacher && !["손흥민", "김민재", "황희찬"].includes(teacher)) {
    return res.json({ msg: "존재하지 않는 Teacher입니다." });
  }
  if (
    timetable ==
    !["sat", "sun", "mon", "wed", "fri", "tue", "thu", "fri"].includes(
      timetable
    )
  ) {
    return res.json({ msg: "존재하지 않는 timetable입니다." });
  }
  let result = [...courses];

  if (name) {
    result = result.filter((v) => v.name == name);
  }
  if (teacher) {
    result = result.filter((v) => v.teacher == teacher);
  }
  if (timetable) {
    result = result.filter((v) => v.timetable == timetable);
  }
});

// /humans
// ?language 없는 언어면 -> 해당 언어는 없습니다.
// ?company 없는 회사면 -> 해당 회사는 없습니다.
// ?department 없는 부서면 -> 해당 부서는 없습니다.

app.get("/humans", (req, res) => {
  const { language, company, department } = req.query;
  if (
    language &&
    !data.some((v) => v.language.toLowerCase() == language.toLowerCase())
  ) {
    return res.json({ msg: `해당 ${language}는 없습니다.` });
  }

  if (
    company &&
    !data.some((v) => v.company.toLowerCase() == company.toLowerCase())
  ) {
    return res.json({ msg: `해당 ${company}는 없습니다.` });
  }
  if (
    department &&
    !data.some((v) => v.department.toLowerCase() == department.toLowerCase())
  ) {
    return res.json({ msg: `해당 ${department}는 없습니다.` });
  }

  let result = [...data];
  if (language) {
    result = result.filter(
      (v) => v.language.toLowerCase() == language.toLowerCase()
    );
  }
  if (company) {
    result = result.filter(
      (v) => v.company.toLowerCase() == company.toLowerCase()
    );
  }
  if (department) {
    result = result.filter(
      (v) => v.department.toLowerCase() == department.toLowerCase()
    );
  }

  res.json(result);

  //
});

app.get("/languages", (req, res) => {
  const languages = [...new Set(data.map((v) => v.language))].sort();
  res.json(languages);
});

// Params[매개변수]
app.get("/students/:id", (req, res) => {
  const { id } = req.params;

  res.json(students[id] || "그런 학생 나감 ㅅㄱ");
});

app.listen(3000, () => {
  console.log("server season2 ON!");
});

// Query
// /students?gender=female
// 1. 쿼리 존재 여부
// 2. 유효성 검사
// 3. 쿼리조건에 맞도록 돌려줌

// const agedStudents = students.filter((v) => {
//   v.age == +age;
// });
// const genderdStudents = students.filter((v) => {
//   v.gender == gender;
// });

// app.get("/students", (req, res) => {
//   const { age, gender } = req.query;
//   if (age && isNaN(+age)) {
//     return res.json({ msg: "age값이 올바르지 않습니다." });
//   }
//   if (gender && !["male", "female"].includes(gender)) {
//     return res.json({ msg: "gender값이 올바르지 않습니다." });
//   }
// let result = [...students];

// if (age) {
//   result = result.filter((v) => v.age == +age);
// }
// if (gender) {
//   result = result.filter((v) => v.gender == +gender);
// }
// });

// if (language) {
//   result = result.filter((v) => v.language == language);
//   if (result.length == 0) {
//     return res.json("해당 언어는 없습니다.");
//   }
// }

// if (company) {
//   result = result.filter((v) => v.company == company);
//   if (result.length == 0) {
//     return res.json("해당 회사는 없습니다.");
//   }
// }

// if (department) {
//   result = result.filter((v) => v.department == department);
//   if (result.length == 0) {
//     return res.json("해당 부서는 없습니다.");
//   }
// }

//   return res.json(result);
