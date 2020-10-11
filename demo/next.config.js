const withTM = require('next-transpile-modules')(['src']);
module.exports = withTM({
  basePath: '/next-use-contextual-routing',
  assetPrefix: '/next-use-contextual-routing/',
});
