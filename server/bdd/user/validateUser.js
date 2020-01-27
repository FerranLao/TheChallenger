import User from "../../models/User";
export default async validationCode => {
  try {
    const update =await User.findOneAndUpdate(
      { validationCode },
      { active: true },
      { new: true }
    );
    if (!update) throw { status: 400, message: "invalid code" };
    return update;
  } catch (e) {
    console.log(e)
    throw e;
  }
};
