let prompt = require(prompt - sync)();
while (true) {
  try {
    const a = prompt("숫자를 입력하세요: ");
    const b = prompt("숫자를 입력하세요: ");
    if (isNaN(a) || isNaN(b)) throw new Error("숫자입력 오류");
    console.log(`${a + b}`);
    console.log(`${a - b}`);
    console.log(`${a * b}`);
  } catch (e) {}
}
// let prompt = require("prompt-sync")();
// while (true) {
//   try {
//     const year = prompt("전역 년도:");
//     const month = prompt("전역 월:");
//     const day = prompt("전역 일:");
//     if (isNaN(year) || isNaN(month) || isNaN(day))
//       throw new Error("날짜 입력 오류");
//     const today = new Date();
//     const dday = new Date(`${year}-${month}-${day}`);
//     const diff = dday.getTime() - today.getTime();
//     const diffday = diff / (1000 * 60 * 60 * 24);

//     console.log(`ㅋㅋㅋㅋㅋ${diffday}일 냄앴숩늬더ㅋㅋㅋ`);
//   } catch (e) {
//     console.log(e.message);
//   }

//   const retry = prompt(
//     "y키를 누르면 다시 실행되고, n키를 누르면 창이 종료됩니다."
//   );
