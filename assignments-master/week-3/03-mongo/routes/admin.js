const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } = require("../db");
const { Course } = require("../db");
const { z } = require("zod");
const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
const courseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  price: z.number(),
  image: z.record(z.string()),
});
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  await Admin.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({
    msg: "'Admin created successfully'",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const newCourse = await Course.create({
    title: req.body.title,
    description: req.body.description,
    imageLink: req.body.imageLink,
    price: req.body.price,
  });
  res.json({
    msg: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find().then((courses) => {
    res.json({ courses: courses });
  });
});

module.exports = router;
