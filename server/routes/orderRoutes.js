const express = require("express");
const Order = require("../models/Order");
const User = require("../models/User");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// Create a new order
router.post("/", authMiddleware, authRole("user"), async (req, res, next) => {
    try {
        const { product, quantity, price } = req.body;
        const order = new Order({
            userId: req.user._id,
            product,
            quantity,
            price,
        });
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        next(error); // Pass error to error-handling middleware
    }
});

// Read all orders for a specific user
router.get(
    "/user/:userId",
    authMiddleware,
    authRole("user"),
    async (req, res, next) => {
        try {
            if (req.user._id.toString() !== req.params.userId) {
                return res.status(403).send({ error: "Unauthorized access" });
            }

            const orders = await Order.find({ userId: req.params.userId });

            if (!orders) {
                return res.status(404).send({ message: "Orders not found" });
            }

            res.status(200).send(orders);
        } catch (error) {
            next(error);
        }
    }
);

// Read a single order
router.get("/:id", authMiddleware, authRole("user"), async (req, res, next) => {
    try {
        const order = await Order.findById(req.user._id);

        if (!order) {
            return res.status(404).send({ message: "Order not found" });
        }

        res.status(200).send(order);
    } catch (error) {
        next(error);
    }
});

// Update an order
router.put("/:id", authMiddleware, authRole("user"), async (req, res, next) => {
    try {
        const { product, quantity, price } = req.body;
        const order = await Order.findByIdAndUpdate(
            req.user._id,
            { product, quantity, price },
            { new: true, runValidators: true }
        );

        if (!order) {
            return res.status(404).send({ message: "Order not found" });
        }

        res.status(200).send(order);
    } catch (error) {
        next(error);
    }
});

// Delete an order
router.delete(
    "/:id",
    authMiddleware,
    authRole("user"),
    async (req, res, next) => {
        try {
            const order = await Order.findByIdAndDelete(req.user._id);

            if (!order) {
                return res.status(404).send({ message: "Order not found" });
            }

            res.status(200).send(order);
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
