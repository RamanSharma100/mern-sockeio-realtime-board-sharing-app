const express = require("express");
const http = require("http");
const cors = require("cors");
const { userJoin, getUsers, userLeave } = require("./utils/user");

const app = express();
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server);

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("server");
});

// socket.io
let elementsList = [];
io.on("connection", (socket) => {
  console.log("someone Joined!");
});

// serve on port
const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`server is listening on http://localhost:${PORT}`)
);
