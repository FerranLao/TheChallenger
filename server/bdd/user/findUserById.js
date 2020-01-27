import User from "../../models/User";

export default async id => {
  try {
    const user = await User.findById(id, 'name userPhoto _id challenges')
    return user
  } catch (e) {
    throw e
  }
}
