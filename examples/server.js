const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const port = 3000;

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  let filePath = "." + reqUrl.pathname;

  if (filePath === "./") {
    filePath = "./index.html";
  }

  const extname = path.extname(filePath);

  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "application/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".png":
      contentType = "image/png";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile("./index.html", (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end("Internal Server Error");
          } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        });
      } else {
        res.writeHead(500);
        res.end("Internal Server Error");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
