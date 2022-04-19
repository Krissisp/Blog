const Crypto = require('crypto-js');

async function crypto(password) {
  const ciphertext = Crypto.AES.encrypt(`${password}`, process.env.secret_hash).toString();
  return Promise.resolve(ciphertext);
}

module.exports = crypto;
