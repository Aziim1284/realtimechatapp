const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "ASHFBCUEBF34HFB4", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
