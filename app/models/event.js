module.exports = function (sequelize, Sequelize) {

    var Event = sequelize.define('event', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        title: {
            type: Sequelize.TEXT
        },

        about: {
            type: Sequelize.TEXT
        },

        state: {
            type: Sequelize.TEXT
        },

        date: {
            type: Sequelize.DATE
        },

        photo:{
            type: Sequelize.BLOB
        },

    });

    return Event;

}