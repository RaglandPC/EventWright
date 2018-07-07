module.exports = function (sequelize, Sequelize) {

    var User = sequelize.define('user', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
<<<<<<< HEAD
        photo:{
            type: Sequelize.BLOB
        },
 
=======

>>>>>>> f23ffe61e145b6f56a46e49a81adf944ae80848e
        username: {
            type: Sequelize.TEXT
        },

        photo: {
            type: Sequelize.BLOB
        },

        about: {
            type: Sequelize.TEXT
        },
        city: {
            type: Sequelize.TEXT
        },
        age: {
            type: Sequelize.TEXT
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        },

        last_login: {
            type: Sequelize.DATE
        },

        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }


    });

    return User;

}