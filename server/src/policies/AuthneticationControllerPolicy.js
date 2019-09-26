// for validation
const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
        // at least one lower case character, one upper case character, one digit, length from 8 to 32 characters
      )
    }

    // we want validate req.body against our schema
    const { error } = Joi.validate(req.body, schema)

    if (error) {
      // this gives us which key failed, either email or password in our case
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address.'
          })
          break
        case 'password':
          res.status(400).send({
            error: `
              The password provided faild to match following rules:
              <br>
              1. It must contain ONLY the following characters: lower case, upper case, numerics.
              <br>
              2. It must be at least 8 characters in length and not greater than 32 characters in length.
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid register information.'
          })
      }
    } else {
      next()
    }
  }
}
