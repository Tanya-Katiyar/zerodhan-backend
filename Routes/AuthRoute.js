const { Signup } = require("../Controllers/AuthController");
const { Login } = require("../Controllers/AuthController");
const {userVerification} = require("../Middleware/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/',userVerification);

module.exports = router;
