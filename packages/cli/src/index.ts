import {Program} from '@boost/cli'
import pkg from '../package.json'
import LoginCommand from './commands/LoginCommand'

const program = new Program({
  bin: 'hh-deal',
  name: 'hh-deal',
  version: pkg.version,
})

program.register(new LoginCommand()).runAndExit(process.argv.slice(2))
