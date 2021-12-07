const { Service } = require('feathers-nedb');

const crypto = require('crypto');

exports.Users = class Users extends Service {
  create(data, params) {
    const { email, password, githubId } = data;

    const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');

        
  }
};
