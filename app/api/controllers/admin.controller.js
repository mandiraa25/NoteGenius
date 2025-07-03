import Admin from '../models/admin.js';
import jwt from "jsonwebtoken";

export const asignup = async (req, res, next) => {
  const { username, email, password, Gender} = req.body;

 

  const newUser = new Admin({
    username,
    email,
    password,
    Gender
  });

  try {
    await newUser.save();
    res.json("Signup succes");
  } catch (error) {
    next(error);
  }
};



export const asigngin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const validUser = await Admin.findOne({ email });
    if (!validUser) {
      return res.status(404).json({ message: "user Not found" });
    }

    const token = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httponly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};








