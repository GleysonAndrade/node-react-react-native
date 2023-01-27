const express = require("express");

const app = express();

/**Configure project to receive data in json */
app.use(express.json());

/**Middlewares - Statement must be executed before any statement*/
// app.use((req, res, next) => {
//     console.log("Acessou o Middlewares");
//     next();
// });

/** Middlewares - Checks if the user has sent the necessary information for the request*/
/**valContato - Middleware data validation*/
function valContato(req, res, next){
    if(!req.body.email){
        return res.json({
            erro: true,
            mensagem: "Necessário enviar o email"
        });
    };
    return next();
};

/**Creating a GET route */
app.get("/",(req, res) => {
    res.send("Wellcome - Gleyson!");
});

/** Route to view contacts*/
app.get("/contatos/:id",(req, res) => {
    // res.send("View system contact!");
    /** Receiving requests from url using destructuring*/
    const { id } = req.params;
    const { sit } = req.query;
    return res.json({
        id,
        nome: "Gleyson",
        email: "gleysondev@yahoo.com",
        sit
    });
});

/**POST type route */
app.post("/contato", valContato, (req, res) => {
    /**Receiving POST requests */
    var { nome } = req.body;
    var { email } = req.body;
    /**You can implement the rule to save the data in the database */
    return res.json({
        nome,
        email
    })
})

/**PUT type route */
/**valContato - Middleware data validation*/
app.put("/contato/:id", valContato, (req, res) => {
    /** Receiving requests from url using destructuring*/
    const { id } = req.params;
    const { _id, nome, email} = req.body;
    // const { email } = req.body;

    return res.json({
        id,
        _id,
        nome,
        email
    });
});

/**DELETE type route */
app.delete("/contato/:id", (req, res) => {
    /** Receiving requests from url using destructuring*/
    const { id } = req.params;

    return res.json({
        id
    })
});

/**Accessing the route */
app.listen(8080, () => {
    console.log("Server started on port 8080: http://localhost:8080")
});