import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = process.env.PORT || 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));

app.get("/", (req, res) => res.render("home"));

const handleListening = () => console.log("🚀 Start");

const server = app.listen(PORT, handleListening);

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("connected");
  // * 연결된 socket을 가져와서 활용
  socket.on("fromClient", () => console.log("From Client"));
  socket.emit("Hello"); // * 연결된 socket 에 Hello라는 event를 발생시킴
});
