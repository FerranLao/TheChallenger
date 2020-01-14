const User = require("../models/User");

module.exports = {
  baseRoute: async (req, res) => {
    console.log("entra");
    try {
      const mockUser = {
        name: "Antonio",
        password: "1230",
        validationCode: "1234",
        email: "asd@apc.com"
      };
      const user = await User.create(mockUser);
      res.json(user);
    } catch (e) {
      console.log("peta");

      console.log(e);
      res.json("something happened");
    }
  },
  primerToken: async (req, res) => {
    console.log("llega");

    console.log(req);
    try {
      res.json("dfsdfsdfsadfasdfasdfsdf546546456456321");
    } catch (e) {
      console.log("peta");
      console.log(e);
      res.json("something happened");
    }
  },

  userLoged: async (req, res) => {
    console.log("llega");

    console.log(req);
    try {
      const user = {
        name: "pepito",
        email: "algo@a.com"
      };
      res.json(user);
    } catch (e) {
      console.log("peta");

      console.log(e);
      res.json("something happened");
    }
  }
};
