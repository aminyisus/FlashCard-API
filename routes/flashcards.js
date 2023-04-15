const express = require("express");
const router = express.Router();
const flashcards = require("../services/flashcards")

router.get("/", async function(req, res, next) {
    try {
        res.json(await flashcards.all());
    } catch(err) {
        console.log("Error while getting all: ", err.message);
        next(err);
    }
});

//ENDPOINTS POR ID(MODIFICAR LA LÓGICA)
router.get("/:id", async function(req, res, next) {
    try {
        const flashcard = await flashcards.findById(req.params.id);
        if (!flashcard) {
            res.status(404).send("Flashcard not found");
        } else {
            res.json(flashcard);
        }
    } catch(err) {
        console.log("Error while getting flashcard by id: ", err.message);
        next(err);
    }
});

router.patch("/:id", async function(req, res, next) {
    try {
        const flashcard = await flashcards.findById(req.params.id);
        if (!flashcard) {
            res.status(404).send("Flashcard not found");
        } else {
            const updatedFlashcard = await flashcards.updateById(req.params.id, req.body);
            res.json(updatedFlashcard);
        }
    } catch(err) {
        console.log("Error while updating flashcard: ", err.message);
        next(err);
    }
});

router.delete("/:id", async function(req, res, next) {
    try {
        const flashcard = await flashcards.findById(req.params.id);
        if (!flashcard) {
            res.status(404).send("Flashcard not found");
        } else {
            await flashcards.deleteById(req.params.id);
            res.status(204).send(); // Envía una respuesta vacía con código 204 (No Content)
        }
    } catch(err) {
        console.log("Error while deleting flashcard: ", err.message);
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
