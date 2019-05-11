const args = ['build']
const opts = { stdio: 'inherit', cwd: 'portfolio', shell: true }
require('child_process').spawn('npm run', args, opts)
