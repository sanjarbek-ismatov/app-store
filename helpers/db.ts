import fs from "fs";
const dbReader = (
  cb: (err: NodeJS.ErrnoException | null, data: any) => void
) => {
  fs.readFile("./db/apps.json", "utf-8", (err, data) => {
    if (err) cb(err, null);
    if (data) cb(null, JSON.parse(data));
    else cb(null, null);
  });
};
const dbWriter = (keyword: any, data: any) => {
  dbReader((err: NodeJS.ErrnoException | null, datas: any) => {
    if (err) console.log(err);
    const writableData = { [keyword]: data };
    if (datas && datas.length) {
      if (!datas.find((e: any) => e[keyword])) datas.push(writableData);
      fs.writeFile("./db/apps.json", JSON.stringify(datas), null, (err) => {
        if (err) console.log(err);
      });
    } else {
      fs.writeFile(
        "./db/apps.json",
        JSON.stringify([writableData]),
        null,
        (err) => {
          if (err) console.log(err);
        }
      );
    }
  });
};

export { dbReader, dbWriter };
