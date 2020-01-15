import validator from "validator"

export default ({ email, name, password }) => {
    if (!email || !name || !password || !validator.isEmail(email) || !validator.isAlpha(name)) return false
    return true
}