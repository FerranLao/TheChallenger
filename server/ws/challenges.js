
module.exports = (io) => {
  io.on("connection", (socket) => {
    socket.on("new", (content) => {
      io.emit("response", "muy bien campeón")
    })
  })

}