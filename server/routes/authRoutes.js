import express from "express";
import authController from "../controllers/authController.js";
import checkIsUserAuthenticated from "../middlewares/authMIddleware.js";

const router= express.Router();



router.post("/users/register", authController.userRegistration)
router.post("/users/login", authController.userLogin)


//protected routes
router.post("/change-password", checkIsUserAuthenticated, authController.changePassword)




export default router;