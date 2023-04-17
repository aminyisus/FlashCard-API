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

async function update({ flashcard_id, title, description }) {
    const result = await db.query(
        `
        UPDATE flashcards SET title = '${title}', description = '${description}'
        WHERE flashcard_id = '${flashcard_id}'
        `
    );

    let msg = "Error in updating flashcard.";

    if (result.affectedRows)
        msg = "Flashcard updated successfully."

    return { msg };
}

async function delete_(flashcard_id) {
    const result = await db.query(
        `
        DELETE FROM flashcards WHERE flashcard_id = '${flashcard_id}'
        `
    );

    let msg = result.affectedRows ? "Flashcard deleted successfully."
                                  : "Error in deleting flashcard.";

    return { msg };
}

async function getById(flashcard_id) {
    const result = await db.query(
        `
        SELECT *
        FROM flashcards
        WHERE id = '${flashcard_id}'
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
    delete_,
    getById
};
