const child_process = require('child_process')
const { cwd } =  require('process')

child_process.spawn('bash', ['./scripts/bash.sh'], {
  cwd: cwd(),
  shell: true,
});
