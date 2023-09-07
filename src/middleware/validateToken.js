import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';


export const apiRequired = (req, res, next) => {
    const { token } = req.cookies;

    if (!token)
        return res.status(401).json({ message: "No token, authorization denied, you are not login" });

        jwt.verify(token, TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: "Invalid token, you are not login" });
            req.user = user;

            next();
        })
};