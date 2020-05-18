const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/api/auth"
router
  .route("/")
  .post(authController.create);

//   /api/auth/login
router 
    .route("/login")
    .put(authController.find);
// Matches with "/api/auth/:id"
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);

module.exports = router;