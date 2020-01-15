import jwt from 'jsonwebtoken'

export default (token) => {
    try {
        var decoded = jwt.verify(token, process.env.JWT_AUTOLOG_SECRET);
        return decoded
    } catch (err) {
        throw { status: 401, message: "Unauthorized" }
    }
}