const { Router } = require("express");
const { check } = require("express-validator");
const { validateEmail, validateId } = require("../helpers/validate-db");
const { validateInputs, validateJWT } = require("../middlewares");
const userControllers = require("../controllers/userControllers");


const router = Router();
//ruta verificada
router.get("/", userControllers.getUsers);
//usuario por su id
router.get("/:id", userControllers.getUserById);

//ruta verificada
router.put(
  "/:id",
  [
    // check("id", "No es un ID valido").isMongoId(),
    // check("role").custom((role) => validateRole(role)),
    // check("id").custom((id) => validateId(id)),
    validateInputs,
  ],
  userControllers.updateUser
);
//ruta verificada
router.post(
  "/", [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe ser mas de 6 caracteres").isLength({
      min: 6,
    }),
    check("email").custom((email) => validateEmail(email)),
    // check("role", "No es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    // check("role").custom((role) => validateRole(role)),
    validateInputs,
  ],
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
