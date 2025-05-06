const express = require("express");
require("dotenv").config();
const app = express();
const Port = process.env.PORT;
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();

//Register a Listener
emitter.on("messageLogged", (args) => {
  console.log("Event Logged", args);
});

// Raise an Event
emitter.emit("messageLogged", { id: 1, url: "http:/" });

// const { createServer } = require("node:http");
// const server = createServer((req, res) => {
//   res.end("Hello world");
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});

const files = fs.readdirSync("./");

let x = "Hello";
// console.log(window);
// console.log(global);
// console.log(module);
// console.log(os);
console.log(files);

console.log(`TotalMemory: ${os.totalmem}`);
console.log(`FreeMemory: ${os.freemem}`);
console.log(`Userinfo: ${os.userInfo}`);

app.listen(Port, () => {
  console.log(`Server is running at Port: ${Port}`);
});
