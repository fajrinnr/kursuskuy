const bcrypt = require('bcryptjs');

function hashPassword(plain, saltTotal = 10) {
    const salt = bcrypt.genSaltSync(saltTotal);
    const hash = bcrypt.hashSync(plain, salt);

    return hash;
}

module.exports = hashPassword;