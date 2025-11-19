const mysql = require("mysql2/promise");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "koreait",
  connectionLimit: 10,
});

// board //

// 단일 조회

app.get("/boards", async (req, res) => {
  const [data] = await pool.query("SELECT * FROM boards");
  res.json(data);
});

// 게시물 추가
app.post("/boards", async (req, res) => {
  const { author, title, contents } = req.body;
  const sql = `INSERT INTO boards (author, title, contents) VALUES (?, ?, ?)`;
  const [result] = await pool.execute(sql, [author, title, contents]);
  res.json({ msg: `${result.insertId}번 게시물이 만들어졌습니다.` });
});
// 전체 조회
app.get("/boards/:id", async (req, res) => {
  const { id } = req.params;
  const [data] = await pool.query("select * from boards where id = ?", [id]);

  if (data.length === 0) {
    return res.json({ msg: "해당 게시글이 없습니다." });
  }

  res.json(data[0]);
});

// 게시물 수정
app.put("/boards/:id", async (req, res) => {
  const { id } = req.params;
  const { author, title, contents } = req.body;

  const sql = `UPDATE boards SET author = ?, title = ?, contents = ? WHERE id = ?`;
  const [result] = await pool.execute(sql, [author, title, contents, id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ msg: `${id}번 게시물이 없습니다.` });
  }

  res.json({ msg: `${id}번 게시물이 수정되었습니다.` });
});

// 게시물 삭제
app.delete("/boards/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.execute("DELETE FROM boards WHERE id = ?", [id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ msg: `${id}번 게시물이 없습니다.` });
  }

  res.json({ msg: `${id}번 게시물이 삭제되었습니다.` });
});

// 여기부터 comments //

// 댓글 조회
app.get("/boards/:boardId/comments", async (req, res) => {
  const { boardId } = req.params;
  const [data] = await pool.query("SELECT * FROM comments WHERE boardId = ?", [
    boardId,
  ]);
  res.json(data);
});

// 댓글 작성
app.post("/boards/:boardId/comments", async (req, res) => {
  const { boardId } = req.params;
  const { author, comments } = req.body;

  const sql = `INSERT INTO comments (author, comments, boardId) VALUES (?, ?, ?)`;
  const [result] = await pool.execute(sql, [author, comments, boardId]);

  res.json({ msg: `${result.insertId}번 댓글이 만들어졌습니다.` });
});

// 댓글 수정
app.put("/boards/:boardId/comments/:id", async (req, res) => {
  const { id, boardId } = req.params;
  const { author, comments } = req.body;

  const sql = `UPDATE comments SET author = ?, comments = ?, boardId = ? WHERE id = ?`;
  const [result] = await pool.execute(sql, [author, comments, boardId, id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ msg: `${id}번 댓글이 없습니다.` });
  }

  res.json({ msg: `${id}번 댓글이 수정되었습니다.` });
});

// 댓글 삭제
app.delete("/boards/:boardId/comments/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.execute("DELETE FROM comments WHERE id = ?", [
    id,
  ]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ msg: `${id}번 댓글이 없습니다.` });
  }

  res.json({ msg: `${id}번 댓글이 삭제되었습니다.` });
});

app.listen(3000, () => {
  console.log("서버 켜짐 ㅅㄱ");
});
