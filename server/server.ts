import queryString from "querystring";
import { dbReader, dbWriter } from "./helpers/db";
import express from "express";
import cors from "cors";
import http from "http";
import morgan from "morgan";
/**
 * Query parser
 * @param {string} url for parsing
 */
// const queryParser = (url) => {
//   const query = url.split("?")[1];
//   return queryString.parse(query);
// };

/**
 * GET method handler
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */
// const getRequest = (req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, UPDATE");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "content-type, X-Requested-With"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   const { query } = queryParser(req.url);
//   const api = `http://ws75.aptoide.com/api/7/apps/search/query=${query}/limit=50`;
//   const request = http.request(api, (response) => {
//     let datas = "";
//     response.on("data", (chunk) => {
//       datas += chunk.toString();
//     });

//     response.on("end", () => {
//       dbWriter(query, JSON.parse(datas));
//       dbReader((err, data) => {
//         if (err) console.log(err);
//         res.statusCode = 200;
//         if (query)
//           try {
//             return res.end(JSON.stringify(data.find((e) => e[query])[query]));
//           } catch (ex) {
//             return res.end(datas);
//           }
//         res.end(JSON.stringify(data));
//       });
//     });
//   });
//   request.end();
// };
// const server = http.createServer((req, res) => {
//   switch (req.method) {
//     case "GET":
//       getRequest(req, res);
//   }
// });
// server.listen(3000, () => console.log("listening"));
const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.get("/", async (req, res) => {
  // axios
  //   .get(
  //     `http://ws75.aptoide.com/api/7/apps/search/query=${req.query.app}/limit=50`
  //   )
  //   .then((datas: any) => {
  //     // dbWriter(req.query.app, JSON.parse(datas));
  //     // dbReader((err, data) => {
  //     //   if (err) return res.status(400).send(err);
  //     //   if (data) return res.status(200).send(data);
  //     //   res.status(200).send(datas);
  //     // });
  //     return res.send(datas);
  //   })
  //   .catch((err) => console.log(err));
  const { app }: any = req.query;
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
          try {
            return res.send(JSON.parse(data.find((e: any) => e[app])[app]));
          } catch (ex) {
            console.log(ex);
          }
          return res.json(JSON.parse(datas));
        });
      });
    }
  );
  request.end();
});
app.listen(process.env.PORT || 3000);
