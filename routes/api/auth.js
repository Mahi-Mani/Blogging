const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require("../../config/passport");

// Matches with "/api/auth"
router
  .route("/")
  .post(authController.create);

//   /api/auth/login
router 
    .route("/login")
    .put(passport.authenticate("local"), function(req, res) {
      console.log("Request", req);
      console.log("Response", res);
      console.log("Login successful");
      res.send("test");
    });
    
// Matches with "/api/auth/:id"
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);

module.exports = router;