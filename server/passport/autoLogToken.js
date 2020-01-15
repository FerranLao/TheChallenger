import jwt from "jsonwebtoken";

export default async user => {
    try {
        const { name } = user;
        const token = await jwt.sign(
            { name },
            process.env.JWT_AUTOLOG_SECRET,
            { expiresIn: 90 * 24 * 60 * 60 }
        );
        return token;
    } catch (e) {
        throw new Error(e);
    }
};
