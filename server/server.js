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
  const { query } = queryParser(req.url);
  const api = `http://ws75.aptoide.com/api/7/apps/search/query=${query}/limit=50`;
  const request = http.request(api, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk.toString();
    });

    response.on("end", () => {
      dbWriter(query, JSON.parse(data));
      res.end(data);
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
