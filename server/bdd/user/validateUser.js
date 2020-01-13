import User from "../../models/User";
export default validationCode => {
  try {
    const update = User.findOneAndUpdate(
      { validationCode },
      { active: true },
      { upsert: false, new: true }
    );
    if (!update) throw { status: 404, message: "invalid code" };
    return update;
  }catch(e){
    throw e
  }
};
