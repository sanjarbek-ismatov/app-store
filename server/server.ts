import { dbReader, dbWriter } from "./helpers/db";
import express from "express";
import cors from "cors";
import http from "http";
import morgan from "morgan";
const app = express();
app.use(
  cors({
    origin: ["https://app-store-self.vercel.app", "http://localhost:3001"],
  })
);
app.use(express.static("../dist"));
app.use(morgan("tiny"));
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/api/apps", async (req, res) => {
  const { app }: any = req.query;
  if (app) {
    const request = http.request(
      `http://ws75.aptoide.com/api/7/apps/search/query=${app}/limit=50`,
      (response) => {
        let datas = "";
        response.on("data", (chunk) => {
          datas += chunk.toString();
        });
        response.on("end", () => {
          dbWriter(app, JSON.parse(datas));
          dbReader((err, data) => {
            if (err) console.log(err);
            if (data && data.length) {
              try {
                return res.send(data.find((e: any) => e[app])[app]);
              } catch (ex) {
                console.log(ex);
              }
            }
            return res.send(JSON.parse(datas));
          });
        });
      }
    );
    request.end();
  } else {
    dbReader((err, data) => {
      if (err) return res.status(404).send("Datas not found");
      res.status(200).send(data);
    });
  }
});
app.listen(process.env.PORT || 3000);
