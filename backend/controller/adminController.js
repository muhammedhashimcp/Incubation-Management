const User = require("../Modals/userModal")
const Booking = require("../Modals/incubationModel")
const asyncHandler = require("express-async-handler")

const newApplication = async (req, res) => {
	const allCompanies = await Booking.find({})
	res.status(200).json(allCompanies)
}
const pendingApplication = asyncHandler(async (req, res) => {
	const pendingCompanies = await Booking.find({ status: "pending" })
	console.log(pendingCompanies + "pending")
	res.status(200).json(pendingCompanies)
})

const registeredApplication = asyncHandler(async (req, res) => {
	console.log("register++++++++++")
	const registeredCompanies = await Booking.find({ status: "Registered" })
	console.log(registeredCompanies + "regisereddddd")
	res.status(200).json(registeredCompanies)
})

const blockedApplication = asyncHandler(async (req, res) => {
	const blockedCompanies = await Booking.find({ status: "Blocked" })
	console.log(blockedCompanies + "regisereddddd")
	res.status(200).json(blockedCompanies)
})

const allApplication = asyncHandler(async (req, res) => {
	const allCompanies = await Booking.find({})
	//console.log(allCompanies+'+++++++++++');
	res.status(200).json(allCompanies)
})

const allApps = asyncHandler(async (req, res) => {
	const emptyArr = []
	res.status(200).json(emptyArr)
})

const viewDetails = asyncHandler(async (req, res) => {
	console.log("details++++++++++++++")
	const company = await Booking.findById({ _id: req.params.id })
	console.log(company + "company++++++++++++-----")
	res.status(200).json(company)
})

const changingStatus = asyncHandler(async (req, res) => {
	const { id, value } = req.body
	console.log(id, "id", value, "value")
	try {
		if (value == 1) {
			await Booking.findByIdAndUpdate({ _id: id }, { $set: { status: "Registered" } })
			res.json({ status: true })
		} else if (value == 2) {
			await Booking.findByIdAndUpdate({ _id: id }, { $set: { status: "Blocked" } })
			res.json({ status: true })
		}
	} catch (error) {
		console.log(error, "error")
	}
})

module.exports = {
	newApplication,
	pendingApplication,
	registeredApplication,
	blockedApplication,
	allApplication,
	allApps,
	viewDetails,
	changingStatus,
}
