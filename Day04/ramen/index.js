const { ramens, reviews } = require("./data");

const express = require("express");
const app = express();
// JSON 본문 파싱(해석) 가능하게 해줌
app.use(express.json());
// HTML form에서 전송된 데이터를 서버에서 읽을 수 있도록 옵션 설정 true
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Ramen 최고 !!@#$%!~@~@!</h1>");
});

app.get("/ramens", (req, res) => {
  const { spicyLevel } = req.query;
  if (spicyLevel) {
    return res.json(ramens.filter((v) => v.spicyLevel == spicyLevel));
  }
  res.json(ramens);
});

app.get("/ramens/:id", (req, res) => {
  const { id } = req.params;
  const result = ramens.find((v) => v.id == id);
  res.json(result || "404");
});

app.post("/add", (req, res) => {
  const { name, brand, souptype, spicyLevel } = req.body;
  if (!name || !brand || !souptype || !spicyLevel)
    return res.json(`보낸 데이터가 유효하지 않습니다.`);
  else if (spicyLevel < 1 || 5 > spicyLevel)
    res.json(`spicyLevel이 유요하지 않습니다.`);
  else if (ramens.some((v) => v.name == name))
    return res.json(`${name}이름은 중복입니다.`);
  else {
    ramens.push({ name, brand, souptype, spicyLevel });
    res.json(`${name} 라면이 추가 되었습니다.`);
  }
});

app.put("/ramens/:id", (req, res) => {
  const { id } = req.params;
  const targetIndex = ramens.findIndex((v) => v.id == +id);
  if (targetIndex == -1) {
    res.status(404).json({ msg: `${id}번 라면은 없습니다.` });
    return;
  }
  const { name, brand, spicyLevel } = req.body;
  ramens[targetIndex].name = name || ramens[targetIndex].name;
  ramens[targetIndex].brand = brand || ramens[targetIndex].brand;
  ramens[targetIndex].spicyLevel = spicyLevel || ramens[targetIndex].spicyLevel;
  res.json(`${id}번의 라면이 수정되었습니다.`);
});

app.delete("/ramens/:id", (req, res) => {
  const { id } = req.params;
  const targetIndex = ramens.findIndex((v) => v.id == +id);
  if (targetIndex == -1) {
    res.status(404).json({ msg: `${id}번 라면이 없습니다.` });
    return;
  }
  ramens.splice(targetIndex, 1);

  // 콜백함수 사용하는 함수들
  // 변수 불변이 원칙임
  // ramens.map((v, i) => ({ ...v, i }));
  res.json(id);
});

app.listen(3000, () => {
  console.log("my favorite noodle>_<");
});
