const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../Modals/userModal")
const Booking = require("../Modals/incubationModel")

//@desc   Register User
//@route  POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body

	if (!name || !email || !password) {
		res.status(400)
		throw new Error("Please add all fields")
	}

	//check if user exists
	const userExists = await User.findOne({ email })

	if (userExists) {
		res.status(400)
		throw new Error("User already Exists")
	}

	//Hash password

	const salt = await bcrypt.genSalt(10)
	const hashedPassword = await bcrypt.hash(password, salt)

	//create user
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	})

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			role: user.role,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error("Invalid User Data")
	}
})

//@desc   Authenticate a User
//@route  POST /api/users/login
//@access Private
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body
	console.log(req.body)
	//check for user email
	const user = await User.findOne({ email })
	// const admin=await Admin.findOne({email})
	if (user && (await bcrypt.compare(password, user.password))) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			role: user.role,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error("Invalid Credentials")
	}
})

//@desc   Get  User data
//@route  GET /api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
	// const {_id,name,email}=await User.findById(req.user.id)

	res.status(200).json(req.user)
})

//Generate JWT
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	})
}

module.exports = { registerUser, loginUser, getMe }
