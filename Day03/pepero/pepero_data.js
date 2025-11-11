const ExcelJs = require("exceljs");
const workbook = new exceljs.Workbook();

const getPepero = async () => {
  const Workbook = new ExcelJs.Workbook();
  await Workbook.xlsx.readFile("data.xlsx");
  const sheet = Workbook.worksheets[0];
  const arr = [];
  sheet.eachRow((v, i) => {
    if (i == 1) return;
    const [_, name, price] = v.values;
    arr.push({ name, price });
  });
  return arr;
};

module.exports = getPepero;
