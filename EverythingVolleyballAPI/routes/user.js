const UserModel = require("../models/UserModel");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

//update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete


router.delete("/:id", verifyTokenAndAuthorization, async (req,res) => {
  try{
    await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.")
  } catch (error) {
    res.status(500).json(error)
  }
});

//Get user

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
