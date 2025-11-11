// 빼빼로 서버 만들기
// - excel
// - / -> 빼빼로 월드에 오신 걸 환영합니다.
// /list -> 엑셀 있는 그대로 배열 오브젝트 돌려주기

const ExcelJs = require("exceljs");
const workbook = new exceljs.Workbook();
const peperoExcel = workbook.xlsx.readFile("peperoxlsx");
const getPepero = require("./pepero_data");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("빼빼로 월드에 오신 걸 환영합니다!");
});

app.get("/list", async (req, res) => {
  const data = await getPepero();
  res.json(list);
});

app.listen(3000, () => {
  console.log("Pepero Server is Booting");
});

readExcel();

// const list = [];

// const readExcel = async () => {
//   const Workbook = new ExcelJs.Workbook();
//   await Workbook.xlsx.readFile("data.xlsx");
//   const sheet = Workbook.worksheets[0];

//   sheet.eachRow((v, i) => {
//     const [, name, price] = v.values;
//     0;
//     list.push({ name, price });
//   });

//   console.log(list);
// };
