import { createUser, validateUser } from "../bdd/user";
import { validUser, checkPassword } from "../helpers/validations";
import { findUserByNameOrEmail } from "../bdd/user";
import { newToken, checkAutoLog } from "../passport";
import { sendConfirmationMail } from "../mailer";
import autoLogToken from "../passport/autoLogToken";

export const signUp = async (req, res) => {
  if (req.file) req.body.userPhoto = req.file.url;
  if (!validUser(req.body)) {
    return res.status(400).send("invalid user");
  }
  try {
    const { email, validationCode } = await createUser(req.body);
    sendConfirmationMail(email, validationCode);
    res.status(200).send("user  created");
  } catch (e) {
    if (e.status) res.status(e.status).send(e.message);
    res.status(500).send("something happened");
  }
};

export const autoLogin = async (req, res) => {
  const { id } = req.body;
  try {
    const { name } = await checkAutoLog(id)
    const found = await findUserByNameOrEmail(name);
    const token = await newToken(found);
    res.json({ token });
  } catch (e) {
    console.log(e);
    if (e.status) return res.status(e.status).send(e.message);
    res.status(500).send("something happened");
  }
}

export const login = async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password)
    res.status(402).send("you must send a name and password");
  try {
    const found = await findUserByNameOrEmail(name);
    if (!(await checkPassword(password, found.password)) || !found.active)
      res.status(403).send("invalid credentials");
    const token = await autoLogToken(found);
    res.json({ id: token });
  } catch (e) {
    console.log(e);
    if (e.status) res.status(e.status).send(e.message);
    res.status(500).send("something happened");
  }
};

export const userConfirmation = async (req, res) => {
  const { validationCode } = req.params;
  if (!validationCode) return res.status(400).send("validationCode needed");
  try {
    await validateUser(validationCode);
    res.status(200).send("User confirmed");
  } catch (e) {
    if (e.status) res.status(e.status).send(e.message);
    res.status(500).send("something happened");
  }
};
