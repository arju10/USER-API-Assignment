const User = require("../models/userModel");

// create new user => ("/user/new") [method : 'POST']
exports.saveUser = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(200).json({
    success: true,
    message: "User save successfully",
    user,
  });
};

// Get All users => ("/user/all") [method : 'GET']
exports.getAllUser = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    message: "All users Showing",
    users,
  });
};

// Get A single user details => ("/user/random/:id") [method : 'GET']
exports.getRandomUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "random user",
    user,
  });
};

// Update a user  => ("/user/random/:id") [method : 'put']
exports.updateUser = async (req, res, next) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  product = await User.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: "user updated successfully",
    user,
  });
};

// Delete a user ("/user/random/:id") [method : 'delete']
exports.deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  user.remove();

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
    user,
  });
};
