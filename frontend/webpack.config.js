switch (process.env.NODE_ENV) {
  case 'prod':
    module.exports = require('./webpack.prod');
    break;
  case 'test':
    module.exports = require('./webpack.test');
    break;
  default:
    module.exports = require('./webpack.dev');
}