// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./keys_prod');
// } else {
//   module.exports = require('./keys_dev');
// }

module.exports = {
  mongoURI: 'mongodb://devconnection:devconnection@ds263989.mlab.com:63989/dev-connector',
  secretOrKey: 'secret'
};
