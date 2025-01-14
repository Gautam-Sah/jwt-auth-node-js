const jwt = require('jsonwebtoken')
const { badRequestError } = require('../errors')

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new badRequestError('username and password is required')
  }
  const id = new Date().getDate()

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  luckyNumber = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `hello ${req.user.username}`,
    secret: `your lucky number is ${luckyNumber}`,
  })
}

module.exports = { login, dashboard }
