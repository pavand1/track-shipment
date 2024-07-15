const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    if (!token) {
        return res.status(401).send({ error: "Authentication required" });
    }

    try {
        const decoded = jwt.verify(token, "secretkey"); // Replace 'secretkey' with a more secure secret
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;
        req.role = decoded.role;
        next();
    } catch (error) {
        res.status(401).send({ error: "Authentication required" });
    }
};

module.exports = authMiddleware;
