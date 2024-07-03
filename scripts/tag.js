const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const { version } = require('../package.json');

async function tag() {
  const currentVersion = `v${version}`;
  await exec('git fetch --all --tags');
  const gitTagResponse = await exec('git tag');
  const existingTags = gitTagResponse.stdout.split('\n');

  if (existingTags.includes(currentVersion)) {
    console.log(`Tag ${currentVersion} already exists`);
    return;
  }

  await exec(`git tag v${version}`);
  await exec('git push --tags');
}
tag();
