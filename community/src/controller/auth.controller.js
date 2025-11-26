import { v6 } from "uuid";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// 회원가입
export const createUser = async (req, res) => {
  const { id, pw } = req.body;
  const cryptPW = await bcrypt.hash(pw, 10);
  await prisma.users.create({ data: { id, pw: cryptPW } });
};
// 로그인
export const login = async (req, res) => {
  const { id, pw } = req.body;
  const uuid = v6();
  const user = await Prisma.users.findUnique({ where: { id: id } });
  if (!user) res.validationError("id또는 pw를 다시 입력하세요.");
  const result = await bcrypt.compare(pw, user.pw);
  if (!result) res.validationError("id또는 pw를 다시 입력하세요.");

  const create_at = new Date();
  const expires_at = new Date(create_at.getTime() + 1000 * 60 * 5);
  // 세션
  await prisma.sessions.create({
    data: {
      session_id: id,
      user_id: id,
      create_at: create_at,
      expires_at: expires_at,
    },
  });
  //   쿠키
  res.cookie("sessitonID", uuid, {
    httpOnly: true,
    maxAge: 1000 * 60 * 5,
  });
  //   로그인 완료
  res.success("로그인이 성공적으로 완료되었습니다.");
};
