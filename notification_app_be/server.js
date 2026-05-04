console.log("SERVER FILE IS NOW RUNNING");

const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("SERVER IS WORKING PERFECTLY");
});

app.get("/notifications", (req, res) => {
    res.json([
        { Type: "Placement", Message: "Google offer released" },
        { Type: "Result", Message: "Exam result published" }
    ]);
});

app.listen(PORT, () => {
    console.log("🚀 SERVER RUNNING ON http://localhost:" + PORT);
});