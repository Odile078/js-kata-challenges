import { ExpressMiddlewareInterface } from "routing-controllers";
import { NextFunction, Request, Response } from "express";
import { Cookie } from "../entity/Cookie";
import { Visit } from "../entity/Visit";

interface MiddlewareResponse extends Response {
  locals: { identifier: string; cookieId: number; ipAddress: string };
}
export class CookieMiddleware implements ExpressMiddlewareInterface {
  async use(req: Request, res: MiddlewareResponse, next: NextFunction) {
    const ipAddress =
      req.headers["cf-connecting-ip"] ||
      req.headers["x-real-ip"] ||
      req.headers["x-forwarded-for"]?.[0] ||
      "";

    const cookieString = req?.headers?.cookie;
    const cookieSaved = null;
    // const cookieSaved = await Cookie.cookieExists(cookieString);
    if (cookieSaved) {
      let cookieId = null;
      if (cookieString) {
        const cookies = cookieString.split(";");
        for (const cookie of cookies) {
          const [name, value] = cookie.split("=");
          if (name.trim() === "cookieId") {
            cookieId = value.trim();
            break;
          }
        }
      }
      // const visit = cookieSaved.findOneBy((visit) => visit.cookieId === cookieId) || new Visit();
      res.locals.identifier = await cookieSaved.identifier;
      await Visit.save({
        ipAddress: [...ipAddress].join(""),
        cookieId: cookieId,
      });

      return next();
    }
    await Cookie.save({
      identifier: cookieString,
    });
    res.locals.identifier = new Cookie().identifier;
    next();
  }
}
