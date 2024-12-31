import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId: string;
      isAdmin:boolean
    }
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["auth_token"];
  if (!token) {
    return res
      .status(403)
      .json({ message: "Access Denied , No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string) as JwtPayload;
    req.userId = decoded.userId;
         req.isAdmin = decoded.isAdmin !== undefined ? decoded.isAdmin : false;
    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
};

export default verifyToken;
