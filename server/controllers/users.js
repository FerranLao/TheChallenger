import {findUsersByName} from '../bdd/user'

export const getUsersByName = async (req,res) => {
    const {name} = req.query
  try {
    const users = await findUsersByName(name)
    res.json(users)
  } catch (e) {
    if(e.status) return res.status(e.status).send(e.message)
    res.status(500).send("something went wrong")
  }
};
