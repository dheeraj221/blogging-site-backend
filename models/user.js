'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: {
    	allowNull: false,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      type: DataTypes.UUID
    },
    username : DataTypes.STRING,
    email: {
      allowNull: false,
      type : DataTypes.STRING,
      unique : true 
    },
    password: {
      allowNull: false,
      type : DataTypes.STRING 
    },
  }, {});

  user.associate = function(models) {
  	user.hasMany(models.post, {
    	foreignKey : "user_id"
    });
  };
  return user;
};