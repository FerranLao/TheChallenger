import User from "../../models/User";
import bcrypt from "bcrypt";
import crypto from "crypto";
const salt = Number(process.env.BCRYPT_SALTS);

export default async ({ name, password, email, userPhoto }) => {
  try {
    const exist = await User.findOne({ $or: [{ email }, { name }] });
    if (exist) throw { status: 400, message: "already exist" };
  } catch (e) {
    throw e;
  }
  try {
    const hash = await bcrypt.hashSync(password, salt);
    const validationCode = crypto.randomBytes(20).toString("hex");
    const user = await User.create({
      name,
      password: hash,
      email,
      userPhoto,
      validationCode
    });
    return user;
  } catch (e) {
    throw e;
  }
};
