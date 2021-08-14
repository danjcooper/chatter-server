const httpServer = require("http").createServer();

const port = process.env.PORT || 3000

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.join("main-room");

  console.log("welcome to the room");

  socket.on("send to server", (arg) => {
    socket.to("main-room").emit("msgfromsvr", arg);
    console.log(arg); // world
 
    // socket.emit(arg);
  });
});


httpServer.listen(port, () => console.log("hey"));

