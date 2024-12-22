const { Schema, model } = require('mongoose');

const blacklistTokenSchema = new Schema({
    token: { type: String, required: true, unique: true },
    createdAt: { type: Date, expires: 86400, default: Date.now }
});

module.exports = model('BlacklistToken', blacklistTokenSchema);