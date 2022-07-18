const express = require("express")
const router = express.Router()
const { protect } = require("../middleware/authMiddleware")

const {
	newApplication,
	pendingApplication,
	registeredApplication,
	allApplication,
	allApps,
	viewDetails,
	blockedApplication,
	changingStatus,
} = require("../controller/AdminController")

// router.get("/", allApplication)
router.get("/newApplication", newApplication)
router.get("/pendingApplication", pendingApplication)
router.get("/registeredApplication", registeredApplication)
router.get("/allApplication", allApplication)
router.get("/allApps", allApps)
router.get("/viewDetails/:id", viewDetails)
router.get("/blockedApplication", blockedApplication)
router.post("/changingStatus", changingStatus)

module.exports = router
