const asyncHandler = require("express-async-handler")

const Incubation = require("../Modals/incubationModel")
const user = require("../Modals/userModal")

//@description: set goals
// @route : POST /api/goals
// @access : private

const createIncubation = asyncHandler(async (req, res) => {
	console.log(req.user.id)
	const {
		name,
		email,
		phone,
		city,
		address,
		state,
		company,
		teamBackground,
		companyProducts,
		solveProblems,
		uniqueSolution,
		valuePropsitionForCustomer,
		competitors,
		revenue,
		potentialMarketSizeProduct,
		marketingPlan,
		typeOfIncubation,
		buisnessProposal,
	} = req.body
	if (!req.body) {
		res.status(400)
		throw new Error("please add a text field")
	}
	const form = await Incubation.create({
		name,
		email,
		phone,
		city,
		address,
		state,
		company,
		teamBackground,
		companyProducts,
		solveProblems,
		uniqueSolution,
		valuePropsitionForCustomer,
		competitors,
		revenue,
		potentialMarketSizeProduct,
		marketingPlan,
		typeOfIncubation,
		buisnessProposal,
		user: req.user.id,
	})
	console.log(form)
	res.status(200).json(form)
})

const findCompany = asyncHandler(async (req, res) => {
	const company = await Incubation.find({ user: req.user.id })
	console.log(company)
	res.status(200).json(company)
})

const findAllCompanies = asyncHandler(async (req, res) => {
	console.log("findAllCompanies")
	const companiesDetails=[]
	const allCompanies = await Incubation.find()
	companiesDetails = allCompanies.map(company => {company._id})
	console.log(allCompanies)

	res.status(200).json(allCompanies)
})

module.exports = {
	createIncubation,
	findCompany,
	findAllCompanies,
}
