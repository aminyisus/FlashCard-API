const db = require("./db");
const config = require("../config");

async function create({ name, last_name, email, password }) {
    const result = await db.query(
        `
        INSERT INTO users(name, last_name, email, password)
        VALUES('${name}', '${last_name}', '${email}', '${password}')
        `
    );

    let msg = "Error in creating user.";

    if (result.affectedRows)
        msg = "User created successfully."

    return { msg };
}

async function verifyUser({ email, password }) {
    const result = await db.query(
        `
        IF EXISTS(SELECT * FROM users WHERE email = '${email}' AND password= '${password}') THEN
            SELECT TRUE AS UserExists;
        ELSE
            SELECT FALSE AS UserExists;
        END IF;
        `
    );
    const validated = result[0][0].UserExists === 1;
    console.log(validated);
    return { validated };
}

module.exports = {
    create,
    verifyUser
};
