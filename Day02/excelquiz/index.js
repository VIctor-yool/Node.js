const ExcelJs = require("exceljs");

const students = [];

const readExcel = async () => {
  const Workbook = new ExcelJs.Workbook();
  await Workbook.xlsx.readFile("data.xlsx");
  const sheet = Workbook.worksheets[0];

  sheet.eachRow((v, i) => {
    const [, name, major, minor] = v.values;
    0;
    students.push({ name, major, minor });
  });

  console.log(students);
};

app.get("/students", async (req, res) => {
  await readExcel();
  res.json(students);
});

app.listen(3000, () => {});

readExcel();

// app.get(/students, (req,res)=> {
//     res.json()
// })
// const readExcel = async () => {
//   const table = new ExcelJs.table();
//   await table.xlsx.readFile("data.xlsx");
//   const sheet = table.worksheet[0];

//   let row = 2;
//   while (true) {
//     const newRow = sheet.getRow(row);
//     console.log(newRow.values[2].richText[2].text);
//   }
// };
