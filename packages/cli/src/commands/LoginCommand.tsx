import React from 'react'
import {Command, Config, Box} from '@boost/cli'

const Login = () => {
  return <Box>Login .. </Box>
}

@Config('login', 'Login into sys')
export default class LoginCommand extends Command {
  async run() {
    return <Login />
  }
}
