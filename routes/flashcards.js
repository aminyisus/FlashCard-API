const express = require("express");
const router = express.Router();
const flashcards = require("../services/flashcards")

router.get("/", async function(req, res, next) {
    try {
        res.json(await flashcards.create(req.query.page));
    } catch(err) {
        console.log("Error while getting all: ", err.message);
        next(err);
    }
});

router.post("/", async function(req, res, next) {
    try {
        res.json(await flashcards.create(req.body));
        console.log(req.body);
    } catch(err) {
        console.log("Error while creating flashcard", err.msg);
        next(err);
        console.log(req.body);
    }
});

module.exports = router;
