
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            employeeName: "Anjani Shukla",
            employeeSalary: 45555
        },
        {
            id: 2,
            employeeName: "Suraj Shukla",
            employeeSalary: 444055
        },
        {
            id: 3,
            employeeName: "Hohan Shukla",
            employeeSalary: 48855
        }
    ]);
});

app.listen(1000, () => {
    console.log("App is running on Port No: 1000");
});
