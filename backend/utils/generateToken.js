import jwt from "jsonwebtoken";
const genterateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    }); res.cookie('jwt', token, {
        httpOnly: true, secure: proces.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000
    });
}

export default genterateToken;