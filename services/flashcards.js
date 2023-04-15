const db = require("./db");
const config = require("../config")

async function create(flashcard) {
    const result = await db.query(
        `
        INSERT INTO flashcards
        VALUES(NULL, '${flashcard.title}', '${flashcard.description}', NULL)
        `
    );

    let msg = "Error in creating flashcard.";

    if (result.affectedRows)
        msg = "Flashcard created successfully."

    return { msg };
}

async function all() {

}

module.exports = {
    create
}
