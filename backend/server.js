const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const requestRoutes = require("./routes/requestRoutes");

const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

app.use(cors());
app.use(express.json());
app.use("/api", requestRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/smartfleet")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


app.use("/api", vehicleRoutes);

app.get("/", (req, res) => {
  res.send("SmartFleet API Running");
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("simulateRequest", (request) => {

io.emit("alert", "📦 New simulated transport request");

});

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});