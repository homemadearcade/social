const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");
const checkAuth = require("../middleware/checkAuth");

router.post(
  "/getGameSaves/",
  checkAuth,
  gameController.getGameSavesForUser
);

router.post(
  "/getGameSave/",
  // checkAuth,
  gameController.getGameSave
);


router.post(
  "/addGameSave/",
  checkAuth,
  gameController.addGameSave
);

module.exports = router;
