import express from "express";
const router = express.Router();

// @route GET api/users/signIn
// @desc sign in
// @access Public
router.post("/signIn", async (req, res) => {
  try {
    return res.json({ success: true, res: "" });
  } catch (error) {
    return res.status(500).json({ success: false, res: error });
  }
});

export default router;
