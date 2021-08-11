const { Router } = require("express");
const { check } = require("express-validator");
const userControllers = require("../controllers/userControllers");
const { validateEmail, validateId } = require("../helpers/validate-db");

const { validateInputs, validateJWT } = require("../middlewares");

const router = Router();

router.get("/", userControllers.getUsers);
router.put(
  "/:id",
  [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom((id) => validateId(id)),
    validateInputs,
  ],
  userControllers.updateUser
);
router.post(
  "/",
  userControllers.createUsers
);
router.delete(
  "/:id",
  [
    // validateJWT,
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom((id) => validateId(id)),
    validateInputs,
  ],
  userControllers.deleteUsers
);

module.exports = router;
