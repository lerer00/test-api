const express = require("express")

const app = express.Router()

app.get("/accounts", function(req, res) {
    res.json([{
        id: "1",
        firstname: "francis",
        lastname: "yeah",
    }])
})

module.exports = app