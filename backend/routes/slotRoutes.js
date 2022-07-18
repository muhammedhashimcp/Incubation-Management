const express = require("express")
const router = express.Router()

const { getBookingSlots, getApplications, slotUpdate, slotDuplicate } = require("../controller/slotController")

// router.get("/", getBookingSlots)
router.get("/getApplications", getApplications)
router.post("/slotUpdate", slotUpdate)
router.patch("/slotDuplicate", slotDuplicate)

module.exports = router
