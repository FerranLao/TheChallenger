const User = require("../models/User")

module.exports = {
  baseRoute: async (req, res) => {
    try {
      const mockUser = {
        name: "Antonio",
        password: "1230",
        validationCode: "1234",
        email: "asd@apc.com"
      }
      const user = await User.create(mockUser)
      res.json(user)
    } catch (e) {
      console.log(e)
      res.json("something happened")
    }
  }
}