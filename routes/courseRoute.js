const express = require("express");
const cors = require("cors");
const router = express.Router();
const courseMiddleware = require("../middlewares/courseMiddleware");
const authUtil = require("../util/authUtil");
router.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);

router.get("/", courseMiddleware.getAllCourses);
router.get("/:id", courseMiddleware.getCourseById);
router.post("/create-course", authUtil.protect, courseMiddleware.createCourse);

module.exports = router;
