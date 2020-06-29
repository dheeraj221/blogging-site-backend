'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    id: {
    	allowNull: false,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      type: DataTypes.UUID
    }, 
    description: DataTypes.STRING,
    user_id: DataTypes.UUID
  }, {});

  post.associate = function(models) {
    post.belongsTo(models.user, {
      foreignKey : "user_id",
      onDelete : "cascade"
    });
  };
  return post;
};