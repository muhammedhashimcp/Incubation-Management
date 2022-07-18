const express=require('express')
const router=express.Router()
const { createIncubation, findCompany, findAllCompanies } = require("../controller/incubationController")

const {protect}=require('../middleware/authMiddleware')



router.post('/',protect,createIncubation)
router.get("/", protect, findAllCompanies)
router.get("/findCompany", protect, findCompany)




module.exports=router;