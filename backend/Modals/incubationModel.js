const mongoose = require('mongoose')

const incubationSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,

			ref: "User",
		},

		name: {
			type: String,
			required: [true, "Please add a name"],
		},
		email: {
			type: String,
			required: [true, "Please add a email"],
			unique: true,
		},

		phone: {
			type: String,
		},
		address: {
			type: String,
		},
		city: {
			type: String,
		},
		state: {
			type: String,
		},
		company: {
			type: String,
		},
		teamBackground: {
			type: String,
		},
		companyProducts: {
			type: String,
		},
		solveProblems: {
			type: String,
		},
		uniqueSolution: {
			type: String,
		},
		valuePropsitionForCustomer: {
			type: String,
		},
		competitors: {
			type: String,
		},
		revenue: {
			type: String,
		},
		potentialMarketSizeProduct: {
			type: String,
		},
		marketingPlan: {
			type: String,
		},
		typeOfIncubation: {
			type: String,
		},
		buisnessProposal: {
			type: String,
		},
		buisnessProposal: {
			type: String,
		},
		status: {
			type: String,
			default: "pending",
		},
		open: {
			type: Boolean,
			default: "false",
		},
	},
	{
		timestamps: true,
	}
)


module.exports = mongoose.model("Incubation", incubationSchema)