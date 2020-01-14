import User from "../../models/User";

export default async data => {
  try {
    const user = await User.findOne({ $or: [{ email: data }, { name: data }] });
    if (!user) throw { status: 400, message: "User not found" };
    return user
  } catch (e) {
    throw e;
  }
};
