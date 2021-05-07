require('dotenv').config()
const shell = require('shelljs')

const { COMMAND, PASSWORD } = process.env
const command = `theme ${COMMAND} --allow-live --password=${PASSWORD}`

shell.exec(command)