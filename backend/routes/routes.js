import express from "express"

import {
    showUserbyUserID,
    showUsers, 
    createUser, 
    updateUser, 
    deactivateUser
} from "../controllers/userController.js"

const router = express.Router();

//get all users
router.get("/user", showUsers);

//get single user 
router.get("/user/:id", showUserbyUserID);

//create user 
router.post("/user", createUser); 

//update user
router.put("/user/:id", updateUser);

//deactivate user 
router.put("/user/:id", deactivateUser);

export default router;