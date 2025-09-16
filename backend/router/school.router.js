const express = require("express");
const authMiddleware = require('../auth/auth');
const { getAllSchools, updateSchoolWithId,signOut,isSchoolLoggedIn, registerSchool, loginSchool, getSchoolOwnData } = require("../controller/school.controller");
//const { generateContent } = require("../controller/ai.controller");

const router = express.Router();

router.post('/register', registerSchool);
router.get("/all", getAllSchools);
router.post("/login", loginSchool);
router.patch("/update",authMiddleware(['SCHOOL']), updateSchoolWithId);
router.get("/fetch-single",authMiddleware(['SCHOOL']),getSchoolOwnData);
router.get("/sign-out", signOut);
router.get("/is-login",  isSchoolLoggedIn)
// router.post("/generate", authMiddleware, generateContent);  

module.exports = router;