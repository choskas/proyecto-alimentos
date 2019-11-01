const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    img: {
        type: String,
    },
    location: {
        type: {
          type: String,
          default: 'Point'
        },
        address: {
          type: String
        },
        coordinates: {
          type: [Number]
        }
      },
    role: {
        type: String,
        enum: ['client','chef'],
        default: 'client'
    }
    }


)

userSchema.plugin(PLM, {
  usernameField: 'userName'
})

module.exports = model('User', userSchema)