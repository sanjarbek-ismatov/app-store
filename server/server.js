const http = require("http");
const https = require("https");
const queryString = require("querystring");
const { dbWriter, dbReader } = require("./helpers/db");
/**
 * Query parser
 * @param {string} url for parsing
 */
const queryParser = (url) => {
  const query = url.split("?")[1];
  return queryString.parse(query);
};

/**
 * GET method handler
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse<http.IncomingMessage>} res
 */
const getRequest = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, UPDATE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "content-type, X-Requested-With"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  const { query } = queryParser(req.url);
  const api = `http://ws75.aptoide.com/api/7/apps/search/query=${query}/limit=50`;
  const request = http.request(api, (response) => {
    let datas = "";
    response.on("data", (chunk) => {
      datas += chunk.toString();
    });

    response.on("end", () => {
      dbWriter(query, JSON.parse(datas));
      dbReader((err, data) => {
        if (err) console.log(err);
        res.statusCode = 200;
        if (query)
          try {
            return res.end(JSON.stringify(data.find((e) => e[query])[query]));
          } catch (ex) {
            return res.end(datas);
          }
        res.end(JSON.stringify(data));
      });
    });
  });
  request.end();
};
const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      getRequest(req, res);
  }
});
server.listen(3000, () => console.log("listening"));
