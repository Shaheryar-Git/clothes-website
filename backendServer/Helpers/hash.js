import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  let saltRound = 10;
  let hashedPassword = await bcrypt.hash(password, saltRound);
  return hashedPassword;
};

export default hashPassword;
