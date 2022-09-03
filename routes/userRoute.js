const express = require("express");
const { saveUser, getAllUser, getRandomUser, updateUser, deleteUser } = require("../controllers/userController");
const router = express.Router();

router.route("/save").post(saveUser);
router.route("/all").get(getAllUser);
router.route("/random/:id").get(getRandomUser)
router.route("/update/:id").put(updateUser)
router.route("/delete/:id").delete(deleteUser);
module.exports = router;