const Sequilize = require("sequelize");

/**Create a connection to the database */
const sequelize = new Sequilize('node', 'root', '2cx}$kDZl3q%', {
    host: 'localhost',
    dialect: 'mysql'
});

/***Checks if the database is connected */
sequelize.authenticate()
.then(function(){
    console.log("Database connection successful!");
}).catch(function(){
    console.log("Error: Connection to the database could not be established!");
});

module.exports = sequelize;