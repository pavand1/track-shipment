const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middlewares/authMiddleware");
const authRole = require("../middlewares/authRoleMiddleware");
const router = express.Router();

// Create a new user
router.post("/", async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        next(error); // Pass error to error-handling middleware
    }
});

// Read all users
router.get("/", authMiddleware, authRole("admin"), async (req, res, next) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        next(error);
    }
});

// Read a single user
router.get("/:id", async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
});

// Update a user
router.put(
    "/:id",
    authMiddleware,
    authRole("admin"),
    async (req, res, next) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });
            if (!user) {
                return res.status(404).send();
            }
            res.status(200).send(user);
        } catch (error) {
            next(error);
        }
    }
);

// Delete a user
router.delete(
    "/:id",
    authMiddleware,
    authRole("admin"),
    async (req, res, next) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).send();
            }
            res.status(200).send(user);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
