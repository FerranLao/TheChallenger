import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export default async user => {
  try {
    const { name, email, userPhoto, _id } = user;
    const token = await jwt.sign({ name, email, userPhoto, _id }, secret);
    return token;
  } catch (e) {
    throw new Error(e);
  }
};
