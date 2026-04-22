const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Application Deployed Successfully");
});

app.get("/status", (req, res) => {
    res.json({
        status: "running",
        environment: process.env.NODE_ENV || "development"
    });
});

app.get("/info", (req, res) => {
    res.json({
        name: "Deployment App",
        version: "1.0",
        author: "Captain AJ"
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
