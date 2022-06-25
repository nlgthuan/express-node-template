/* eslint-disable max-classes-per-file */
const { StatusCodes } = require('http-status-codes');

class ErrorWithStatusCode extends Error {
  constructor(message, statusCode) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

class AuthenticationError extends ErrorWithStatusCode {
  constructor() {
    super('Invalid Credentials', StatusCodes.UNAUTHORIZED);
  }
}

export { ErrorWithStatusCode, AuthenticationError };
