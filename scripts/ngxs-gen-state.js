#!/usr/bin/env node
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { exec } = require("child_process");

function runScript() {
  const argv = getConfigArgs();
  const { domain, name, spec } = argv;
  runNgxsGenerateState(domain, name, spec);
}

runScript();

// priv
function getConfigArgs() {
  return yargs(hideBin(process.argv))
    .option('domain', {
      alias: 'd',
      type: 'string',
      describe: 'Provide domain name'
    })
    .option('name', {
      alias: 'n',
      type: 'string',
      describe: 'Provide state slice name'
    })
    .option('spec', {
      alias: 's',
      describe: 'Generate spec',
      type: 'boolean',
      default: true
    })
    .demandOption(['domain', 'name'], 'Please provide both: name and domain')
    .help()
    .parse();
}

function runNgxsGenerateState(domain, sliceName, genSpec = true) {
  const spec = genSpec ? 'true' : 'false';
  const fullPath = `./src/app/domain/${domain}/state/`;
  const fullCmd = `ngxs --name ${sliceName} --directory ${fullPath} --folder-name ${sliceName} --spec ${spec}`;

  exec(fullCmd, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
}
