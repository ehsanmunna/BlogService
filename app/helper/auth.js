// const jwt = require('jsonwebtoken');
var jwtDecode = require('jwt-decode');

module.exports = (req, res, next) => {
  try {
    // const token = req.headers.authorization.split(' ')[1];
    if (!req.headers.authorization) {
      throw {message:'token not provided!'};
    }
    const token = req.headers.authorization.split(' ')[1];
    // const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.sub;
    // if (req.body.userId && req.body.userId !== userId) {
    if (!decodedToken) {
      throw { message: 'Invalid request' };
    } else {
      req.userId = userId;
      next();
    }
  } catch (error) {
    res.status(401).json({
      error: error.message
    });
  }
};