const validateInputs = require("../middlewares/validate-input");
const validateJWT = require("../middlewares/validate-jwt");


module.exports = {
  ...validateInputs,
  ...validateJWT
};