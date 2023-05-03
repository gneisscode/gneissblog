const router = require("express").Router();
const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");

//REGISTER

// router.post("/admin/register", async (req, res) => {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPass = await bcrypt.hash(req.body.password, salt);
//     const newUser = new Admin({
//       username: req.body.username,
//       email: req.body.email,
//       password: hashedPass,
//     });

//     const token = jwt.sign(
//       { user_id: newUser._id, email: newUser.email },
//       process.env.TOKEN_KEY,
//       {
//         expiresIn: "2h",
//       }
//     );

//     // save admin token
//     newUser.token = token;

//     console.log("User with token:", newUser);

//     // save new admin to database
//     const user = await newUser.save();
//     //return new admin
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// LOGIN

router.post("/admin/login", async (req, res) => {
  try {
    const user = await Admin.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }

    if (user && validated) {
      const token = jwt.sign(
        { user_id: user._id, user: user.email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
    }

    const { password,email, ...others } = user._doc;

    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});
// middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized access. Missing token." });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Unauthorized access. Invalid token." });
  }
};

// Routes that require authentication
router.get("/admin/dashboard", verifyToken, async (req, res) => {
  try {
    const user = await Admin.findById(req.user.user_id);
    const { password, ...others } = user._doc;
    res.status(200).json({ user: others });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
