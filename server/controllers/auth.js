import { createUser } from "../bdd/user";
import { validUser, checkPassword } from "../helpers/validations";
import findUser from "../bdd/user/findUser";
import { newToken } from "../passport";

export const signUp = async (req, res) => {
  if (!validUser(req.body)) {
    return res.status(402).send("invalid user");
  }
  try {
    await createUser(req.body);
    res.status(200).send("user created");
  } catch (e) {
    if (e.status) res.status(e.status).send(e.message);
    res.status(500).send("something happened");
  }
};

export const login = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password)
    res.status(402).send("you must send a name and password");
  try {
    const found = await findUser(name);
    if (!(await checkPassword(password, found.password)) || !found.active)
      res.status(403).send("invalid credentials");
    const token = await newToken(found);
    res.json({ token });
  } catch (e) {
    if (e.status) res.status(e.status).send(e.message);
    res.status(500).send("something happened");
  }
};

export const userConfirmation = async (req, res) => {
  const validationCode = req.params;
  try {
    validateUser(validationCode);
  } catch (e) {
    if (e.status) res.status(e.status).send(e.message);
    res.status(500).send("something happened");
  }
};
