const exceljs = require("exceljs");

const { Faker, ko } = require("@faker-js/faker");
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const makePerson = () => {
  const randomName = new Faker({ locale: [ko] }).person.fullName();
  const age = getRandomInteger(0, 80);

  const purposeIndex = getRandomInteger(0, 2);
  const departureIndex = getRandomInteger(0, 3);
  const destinationIndex = getRandomInteger(0, 3);

  const purpose = ["tourism", "business", "other"][purposeIndex];
  const departure = ["incheon", "osaka", "fukuoka", "sapporo"][departureIndex];
  const destination = ["tokyo", "osaka", "kyoto", "sapporo"][destinationIndex];
  const period = getRandomInteger(1, 90);

  // 여기서도 큰 수정 없이 key만 추가
  return {
    name: randomName,
    age: age,
    purpose: purpose,
    departure: departure,
    destination: destination,
    periodOfStay: period,
  };
};

const generateExcel = async () => {
  const workbook = new exceljs.Workbook();
  const sheet = workbook.addWorksheet("students");

  sheet.columns = [
    { header: "name", key: "name" },
    { header: "age", key: "age" },
    { header: "purpose", key: "purpose" },
    { header: "departure", key: "departure" },
    { header: "destination", key: "destination" },
    { header: "periodOfStay", key: "periodOfStay" },
  ];

  for (let i = 0; i < 1000000; i++) {
    sheet.addRow(makePerson());
  }

  await workbook.csv.writeFile("japanTrip.csv");
};

generateExcel();
