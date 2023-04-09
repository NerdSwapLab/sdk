
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./nerdswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./nerdswap-sdk.cjs.development.js')
}
