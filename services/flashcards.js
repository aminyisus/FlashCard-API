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

async function update({ id, title, description }) {
    const result = await db.query(
        `
        UPDATE flashcards SET title = '${title}', description = '${description}'
        WHERE id = '${id}'
        `
    );

    let msg = "Error in updating flashcard.";

    if (result.affectedRows)
        msg = "Flashcard updated successfully."

    return { msg };
}

async function Delete({ id }) {
    const result = await db.query(
        `
        DELETE FROM flashcards WHERE id = '${id}'
        `
    );

    let msg = "Error in deleting flashcard.";

    if (result.affectedRows)
        msg = "Flashcard deleted successfully."

    return { msg };
}

async function idflashcard(id) {
    const result = await db.query(
        `
        SELECT *
        FROM flashcards
        WHERE id = '${id}'
        `
    );

    return { result };
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
    all,
    update,
    Delete,
    idflashcard
};
