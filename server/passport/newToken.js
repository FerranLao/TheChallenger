import jwt from "jsonwebtoken";

export default async user => {
  try {
    const { name, email, userPhoto, _id, challenges } = user;
    const token = await jwt.sign(
      { name, email, userPhoto, _id, challenges },
      process.env.JWT_SECRET,
      { expiresIn: 24 * 60 * 60 }
    );
    return token;
  } catch (e) {
    throw new Error(e);
  }
};
