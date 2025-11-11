// const prompt = require("prompt-sync");

// try {
//   const a = +prompt("첫 번째 숫자 입력");
//   const b = +prompt("두 번째 숫자 입력");
//   console.log(`a/b:${a / b}`);
// } catch (e) {
//   console.log(e);
//   console.log("에러 터짐!");
// }
// }

// try {
//   const a = "부대";
//   const b = "찌개";
//   console.log(`${a + c}`);
// } catch (e) {
//   console.log("에러 터짐!");
// }

try {
  const test = +prompt("숫자 입력");
  if (test == "NaN") throw Error("님 숫자 입력 안했음");
} catch (e) {
  console.log(e);
  console.log("에러 터짐!");
}
