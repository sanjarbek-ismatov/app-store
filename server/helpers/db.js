const fs = require("fs");
/**
 *
 * @param {(err: NodeJS.ErrnoException; data: []) => void} cb
 */
const dbReader = (cb) => {
  fs.readFile("../server/db/apps.json", "utf-8", (err, data) => {
    if (err) return cb(err, null);
    if (data) cb(null, JSON.parse(data));
  });
};
/**
 *
 * @param {string} keyword
 * @param {object[]} data
 */
const dbWriter = (keyword, data) => {
  dbReader((err, datas) => {
    if (err) throw err;
    if (datas) {
      console.log(keyword, data);
      const writableData = { [keyword]: data };
      if (keyword && !datas.find((e) => e[keyword])) datas.push(writableData);
      fs.writeFile(
        "../server/db/apps.json",
        JSON.stringify(datas),
        null,
        (err) => {
          if (err) console.log(err);
        }
      );
    }
  });
};

module.exports = {
  dbReader,
  dbWriter,
};
