import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";
import next from "next";
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json());
  server.use(cookieParser());

  server.get("/api/users", (req: Request, res: Response) => {
    console.log("/api/users");
    return res.json([{ userName: "Super Man" }, { userName: "Iron Man" }]);
  });

  // server.get("/login", (req: Request, res: Response) => {
  //   console.log("Login!!");
  //   return app.render(req, res, "/login");
  // });

  server.all("*", (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
