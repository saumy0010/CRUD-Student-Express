const { Router } = require("express");
const router = Router();
const controller = require("./controller");

router.get("/", controller.getStudents);
router.post("/", controller.addStudent);
router.get("/:id", controller.getStudentById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.removeUser);


module.exports = router;