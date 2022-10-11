const express = require("express")
const router = express.Router()
 

router.get("/sign-up",(req,res) => {
    res.render("signUp",{title:'Sign Up'})
})
router.get("/find-your-match",(req,res) => {
    res.render("findYourMatch",{title:'Find Your Match'})
})
router.get("/",(req,res) => {
    res.render("homePage",{title:'Home Page'})
});

router.get("/sign-up-parent",(req,res) => {
    res.render("signUpParent", {title:'Sign Up Parent'})
})
router.get("/sign-up-babysitter",(req,res) => {
    res.render("signUpBabysitter")
})
router.get("/find-your-match",(req,res) => {
    res.render("findYourMatch",{title:'Sign Up Babysitter'})
})
router.get("/contact-us",(req,res) => {
    res.render("contactUs",{title:'Contact Us'})
})

router.get("/about-us",(req,res) => {
    res.render("aboutUs", {title:'About Us'})
})



module.exports= router;