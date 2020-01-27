import User from "../../models/User";

export default async text => {
  const regexp = new RegExp("^" + text, "i");
  try {
    const users = await User.find({ name: regexp }, "name userPhoto _id");
    return users;
  } catch (e) {
    throw e
  }
};

