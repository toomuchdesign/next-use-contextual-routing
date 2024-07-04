import util from 'node:util';
import { exec as callbackExec } from 'node:child_process';
import packageJson from '../package.json' assert { type: 'json' };
const exec = util.promisify(callbackExec);

async function tag() {
  const { version } = packageJson;
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
