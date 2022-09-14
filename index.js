const User = require("./models/userModel");

const index = async () => {
  const users = await User.findAll()
  console.log(users)
}

index()
