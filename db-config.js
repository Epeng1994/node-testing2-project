require('dotenv').config()
const knex = require('knex')
const config = require('./knexfile.js')
const development = process.env.NODE_ENV || 'development'

module.exports = knex(config[development])