const express = require("express");
const User = require('./Models/User');
const db = require('./Models/db');

const app = express();

/**Enables receiving information in JSON */
app.use(express.json());

/**Route list users */
app.get("/users", async (req, res) => {

    await User.findAll({attributes: ['id', 'name', 'email'], order: [['id', 'DESC']]})
    .then((users) => {
        return res.json({
            erro: false,
            users
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            message: "Could not find record in database!"
        });
    });
});

/**Route to get information from a single user */
app.get("/user/:id", async (req, res) => {
    const { id } = req.params;

    // await User.findAll({ where: { id: id } })
    await User.findByPk(id)
    .then((user) => {
        return res.json({
            erro: false,
            user: user
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            message: "Could not find record in database!"
        });
    });
});

/**Route to register users */
app.post("/user", async (req, res) => {
    const {name, email} = req.body;
    /**Save user in database */
    await User.create(req.body)
    .then(() => {
        return res.json({
            error: false,
            message: "Successfully registered user!"
        });
    }).catch(() =>{
        return res.status(400).json({
            error: true,
            message: "Error: User cannot be registered, please try again later"
        });
    });
});

/**Route to edit users */
app.put("/user", async (req, res) => {
    const { id, name, email } = req.body;

    await User.update(req.body, {where: { id } })
    .then(() => {
        return res.json({
            error: false,
            message: "Successfully edited user!"
        });
    }).catch(() => {
        return res.status(400).json({
            error: true,
            message: "Error: User cannot be edited, try again later!"
        });
    });
});

/**Route to delete users */
app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;

    await User.destroy({ where: { id } })
    .then(() => {
        return res.json({
            error: false,
            message: "Successfully deleted user!"
        });
    }).catch(() => {
        return res.status(400).json({
            error: true,
            message: "Error: User cannot be deleted, try again later!"
        });
    });
});

/**start on server */
app.listen(8080, () => {
    console.log("Server started on port: http://localhost:8080");
});