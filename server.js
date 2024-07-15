const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/expresscrud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Error handling middleware (should be after all routes)
app.use(errorHandler);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
