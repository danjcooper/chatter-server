const httpServer = require("http").createServer();

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


httpServer.listen(3000, () => console.log("hey"));

