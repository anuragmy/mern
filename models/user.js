const mongoose = require('mongoose');
const crypto = require('crypto');
const { PassThrough } = require('stream');
const uid = reauire('uuid/v1');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    hashed_password: {
        type: String,
        trim: true,
        required: true,
    },
    salt: String,
    roles: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    },
}, { timestamps: true });

// virtual 
userSchema.virtual('password')
    .set(() => {
        this._password = password;
        this.salt = uuid();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(() => this._password);

userSchema.methods = {
    encryptPassword: (password) => {
        if (!password) return '';
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        }
        catch {
            return '';
        }
    }
}


module.exports = mongoose.model("USer", userSchema);