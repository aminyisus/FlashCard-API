const express = require("express");
const router = express.Router();
const users = require("../services/users");

router.post("/", async function(req, res, next) {
    try {
        res.json(await users.create(req.body));
    } catch(err) {
        console.log(`Error while creating user: ${err.msg}`);
        next(err);
    }
});

router.post("/login", async function(req, res, next) {
    try {
        res.json(await users.verifyUser(req.body));
    } catch(err) {
        console.log(`Error while validating login: ${err.msg}`);
        next(err);
    }
});

router.post("/signup", async function(req, res, next) {
    // Implementar 
});

module.exports = router;