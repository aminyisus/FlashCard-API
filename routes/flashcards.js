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
router.get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const { result } = await idflashcard(id);
  
      if (result.length === 0) {
        res.status(404).send('Flashcard not found');
      } else {
        res.json(result[0]);
      }
    } catch (error) {
      console.error(`Error while getting flashcard by id: ${error.message}`);
      next(error);
    }
  });

  router.patch('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const { msg } = await flashcards.update({ flashcard_id: id, ...req.body });
  
      res.json({ message: msg });
    } catch (error) {
      console.error(`Error while updating flashcard: ${error.message}`);
      next(error);
    }
  });

  router.delete('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const { msg } = await Delete({ id });
  
      res.json({ message: msg });
    } catch (error) {
      console.error(`Error while deleting flashcard: ${error.message}`);
      next(error);
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
