require('dotenv').config();
const express = require("express");
const flashcardsRoute = require("./routes/flashcards");
const usersRoute = require("./routes/users");

const app = express();
const port = 3000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);

app.get("/", (req, res) => {
    res.json({message: "ok"})
});

app.use("/flashcards", flashcardsRoute);
app.use("/users", usersRoute);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
  
    return;
  });

app.listen(process.env.PORT || port, () => {
    console.log("Running at: http://localhost:3000/" )
})
