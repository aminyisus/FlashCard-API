const db = require("./db");
const config = require("../config")

async function create({ title, description }) {
    const result = await db.query(
        `
        INSERT INTO flashcards(title, description)
        VALUES('${title}', '${description}')
        `
    );

    let msg = "Error in creating flashcard.";

    if (result.affectedRows)
        msg = "Flashcard created successfully."

    return { msg };
}

async function all() {
    const result = await db.query(
        `
        SELECT *
        FROM flashcards
        `
    );

    return { result };
}

module.exports = {
    create,
    all
};
