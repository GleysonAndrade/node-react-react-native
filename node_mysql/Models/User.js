const Sequilize = require("sequelize");

/**Import Connection */
const db = require("./db");

/**Creating the User Model */
const User = db.define('users',{
    id:{
        type: Sequilize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequilize.STRING,
        allowNull: false, 
    },
    email:{
        type: Sequilize.STRING,
        allowNull: false, 
    }
});

/**Checks if the table already exists in the database */
User.sync();

/**Exporte Module User*/
module.exports = User;