const args = ['start']
const opts = { stdio: 'inherit', cwd: 'portfolio', shell: true }
require('child_process').spawn('npm', args, opts)
