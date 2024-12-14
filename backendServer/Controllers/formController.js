import Users from "../models/userModels.js";
import hashPassword from "../Helpers/hash.js";

const formController = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    if (!name || !email || !password ||  !address) {
      res
        .status(400)
        .send({ message: "ALL INFORMATION ARE REQUIRED", success: false });
    }
    let AlreadySign = await Users.findOne({ email });
    if (AlreadySign) {
      res
        .status(400)
        .send({ message: "YOU ARE ALREADY SIGNIN", success: false });
    }

    let hashedPassword = await hashPassword(password);

    const newUser = new Users({
      name,
      email,
      password: hashedPassword,
      address
    });
    await newUser.save();

    res.status(202).send({
      success: true,
      message: "Thanks for Ordering",
      newUser,
    });
  } catch (error) {
    res.status(400).send({ message: "ERROR IN SIGNIN" });
    error;
  }
};

export default formController;
