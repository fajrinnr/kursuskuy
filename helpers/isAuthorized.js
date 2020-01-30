const bcrypt = require('bcryptjs');
function isAuthorized(plain, hashed) {
    return bcrypt.compareSync(plain, hashed);
}

module.exports = isAuthorized;