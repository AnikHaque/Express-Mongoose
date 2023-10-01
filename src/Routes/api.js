const express = require('express');
const route = express.Router()


const adminController = require("../Controllers/adminController");
const postController = require("../Controllers/postController");
const subAdminController = require("../Controllers/subAdminController");
const userController = require("../Controllers/userController");



// Admin Route
route.get("/createAdmin", adminController.createAdmin );
route.get("/readAdmin", adminController.readAdmin );
route.get("/deleteAdmin", adminController.deleteAdmin);
route.get("/updateAdmin", adminController.updateAdmin );

// Post Route
route.get("/createPost", postController.createPost );
route.get("/readPost", postController.readPost );
route.get("/deletePost", postController.deletePost);
route.get("/updatePost", postController.updatePost );

// Sub Admin Route
route.get("/createSubAdmin", subAdminController.createSubAdmin  );
route.get("/readSubAdmin", subAdminController.readSubAdmin );
route.get("/deleteSubAdmin", subAdminController.deleteSubAdmin );
route.get("/updateSubAdmin", subAdminController.updateSubAdmin  );

// User Route
route.get("/createUser", userController.createUser);
route.get("/readUser", userController.readUser);
route.get("/deleteUser", userController.deleteUser);
route.get("/updateUser", userController.updateUser );









module.exports = route;