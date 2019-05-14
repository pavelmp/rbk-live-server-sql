const { db, Sequelize } = require('./db.js');

const Place = db.define('place', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    location: {type: Sequelize.STRING, required: true},
    distance: {type: Sequelize.INTEGER, required: false}
})

const User = db.define('user', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    username: {type: Sequelize.STRING, required: true, unique: true},
    password: {type: Sequelize.STRING, required: true}
});

Place.belongsTo(User); //Add userId foreign key to Place
// User.hasMany(Place); //Add userId foreign key to Place


module.exports.Place = Place;
module.exports.User = User;