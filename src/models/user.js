import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { DataTypes } from 'sequelize';

import config from 'config';

export default (sequelize) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          await user.setPassword(user.password);
        },
        beforeUpdate: async (user) => {
          if (user.changed('password')) {
            await user.setPassword(user.password);
          }
        },
      },
    }
  );

  User.prototype.toJSON = function toJSON() {
    const values = { ...this.get() };
    delete values.password;
    return values;
  };

  User.prototype.setPassword = async function setPassword(rawPassword) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(rawPassword, saltRounds);
  };

  User.prototype.checkPassword = async function checkPassword(rawPassword) {
    return bcrypt.compare(rawPassword, this.password);
  };

  User.prototype.generateAccessToken = function genAccessToken() {
    return jwt.sign({ id: this.id, email: this.email }, config.jwtKey, {
      expiresIn: 86400,
    });
  };

  return User;
};
