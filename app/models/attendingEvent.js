module.exports = function (sequelize, Sequelize) {

    var AttendingEvent = sequelize.define('attendingEvent', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },

        username: {
            type: Sequelize.TEXT
        },
 
        eventId: {
            type: Sequelize.INTEGER
        },

    });

    return AttendingEvent;

}