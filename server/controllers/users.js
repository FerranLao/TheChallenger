import { findUsersByName, findUserById } from '../bdd/user'

export const getUsersByName = async (req, res) => {
  const { name } = req.query
  try {
    const users = await findUsersByName(name)
    res.json(users)
  } catch (e) {
    if (e.status) return res.status(e.status).send(e.message)
    res.status(500).send("something went wrong")
  }
}; 

export const getUserById = async (req, res) => {
  const { id } = req.query
  try {
    const user = await findUserById(id);
    if (!user) return res.status(404).send("user not found")
    res.json(user)
  } catch (e) {
    if (e.status) return res.status(e.status).send(e.message)
    res.status.send("something went wrong")
  }
}
