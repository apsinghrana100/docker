const http =require("http");

const server = http.createServer((req, res) => {
    console.log(req.url)
  if (req.url === "/") {
    console.log("i am insdie")
    res.setHeader("Content-Type", "text/html");
    res.setHeader("X-Foo", "bar");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello world");
  }
  if (req.url === "/home") {
    console.log("i am insdie")
    res.setHeader("Content-Type", "text/html");
    res.setHeader("X-Foo", "bar");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("home page ");
  }
  if (req.url === "/test") {
    console.log("i am insdie")
    res.setHeader("Content-Type", "text/html");
    res.setHeader("X-Foo", "bar");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("testing re-deploy ");
  }
});

server.listen(5000, () => {
  console.log("running on port 5000");
});
