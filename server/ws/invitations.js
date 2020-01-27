module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("new", () => { io.emit("response", "lskadjklja") })
  })
}