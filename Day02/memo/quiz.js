// diary_2025-11-10-10:51
const fs = require("fs"); // file-system

const prompt = require("prompt-sync")();
const today = prompt("오늘 일기 쓰세요");

const date = new Date().toLocaleDateString().replaceAll(" ", "");

//  const diff = dday.getTime() - today.getTime();

fs.writeFileSync(`diary_${date}txt`, `${today}`, "utf-8");
