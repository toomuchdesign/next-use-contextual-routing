/**
 * @type {import('next').NextConfig}
 */
let assetPrefix = undefined;
let basePath = undefined;

// Need to set proper static files paths in order to deploy on github pages
if (process.env.BUILD_TARGET === 'github-pages') {
  const repo = 'next-use-contextual-routing';
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
};
