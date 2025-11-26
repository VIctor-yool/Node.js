import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authMiddleware = async (req, res, next) => {
  const { sessionID } = req.cookies || {};
  console.log(sessionID);
  if (!sessionID) res.unAuthorized();
  const session = await prisma.sessions.findUnique({
    where: {
      id: sessionID,
    },
  });
  if (!sessionID) res.unAuthorized();
  if (new Date(session.expires_at) < new Date()) res.unAuthorized();
  next();
};
