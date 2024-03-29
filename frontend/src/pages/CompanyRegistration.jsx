import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { createIncubation } from "../features/incubation/incubationSlice"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import { FaUser } from "react-icons/fa"
import {
	Button,
	Paper,
	TextField,
	Typography,
	Grid,
	Avatar,
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
	FormLabel,
} from "@mui/material"
//import LockIcon from "@mui/icons-material/Lock";
import axios from "axios"

import { useFormik } from "formik"
function CompanyRegistration({ state, setState }) {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [error, setError] = useState("")
	var regExp = /[a-zA-Z]/g

	// Formik starts
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			phone: "",
			address: "",
			city: "",
			state: "",
			company: "",
			teamBackground: "",
			companyProducts: "",
			solveProblems: "",
			uniqueSolution: "",
			valuePropositionForCustomer: "",
			competitors: "",
			revenue: "",
			potentialMarketSizeProduct: "",
			marketingPlan: "",
			typeOfIncubation: "",
			businessProposal: "",
		},
		onSubmit: (values) => {
			dispatch(createIncubation(values))
			navigate("/")
		},
		validate: (values) => {
			let errors = {}

			if (!values.email) {
				errors.email = "This field is Required"
			} else if (
				!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
					values.email
				)
			) {
				errors.email = "Invalid email format"
			}

			if (!values.phone) {
				errors.phone = "This field is Required"
			} else if (regExp.test(values.phone)) {
				errors.phone = "Only numbers Allowed"
			}

			return errors
		},
	})

	//formik ends

	return (
		<>
			<Grid container align="center" alignItems="center" justifyContent="center" >
				<Grid item xs={12}>
					<Paper
						elevation={12}
						style={{
							padding: 60,
							maxHeight: "100vh",
							maxWidth: 790,
							minWidth: 790,
							overflow: "auto",
						}}
					>
						<Grid align="center" alignItems="center" justifyContent="center">
							<Avatar style={{ backgroundColor: "darkblue" }}></Avatar>
							<Typography mt={2} variant="h5">
								REGISTER
							</Typography>
						</Grid>
						<Grid>
							<form onSubmit={formik.handleSubmit}>
								<Grid mt={5}>
									{error ? <div>{error}</div> : ""}
									<TextField
										name="name"
										style={{ marginTop: "10px" }}
										label="NAME"
										required
										onChange={formik.handleChange}
										value={formik.values.name}
										fullWidth
									/>

									<TextField
										name="email"
										type="email"
										style={{ marginTop: "10px" }}
										label="EMAIL"
										onChange={formik.handleChange}
										value={formik.values.email}
										onBlur={formik.handleBlur}
										fullWidth
									/>
									{formik.touched.email && formik.errors.email ? (
										<Typography color="error.main" variant="subtitle1" component="div">
											{formik.errors.email}
										</Typography>
									) : null}
									<TextField
										name="phone"
										style={{ marginTop: "20px" }}
										label="PHONE NO"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.phone}
										fullWidth
									/>
									{formik.touched.phone && formik.errors.phone ? (
										<Typography color="error.main" variant="subtitle1" component="div">
											{formik.errors.phone}
										</Typography>
									) : null}

									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.city}
										name="city"
										style={{ marginTop: "20px" }}
										label="CITY"
										fullWidth
									/>

									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.address}
										name="address"
										style={{ marginTop: "20px" }}
										label="ADDRESS"
										fullWidth
									/>
									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.state}
										name="state"
										style={{ marginTop: "20px" }}
										label="STATE"
										fullWidth
									/>
									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.company}
										name="company"
										style={{ marginTop: "20px" }}
										label="COMPANY NAME"
										fullWidth
									/>
									{/* <TextField
             required
             onChange={formik.handleChange}
             value={formik.values.image}
             name="image"
             style={{ marginTop: "20px" }}
            type='file'
             fullWidth
           /> */}
									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.teamBackground}
										name="teamBackground"
										style={{ marginTop: "20px" }}
										label="Describe about your team and products"
										fullWidth
									/>
									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.companyProducts}
										name="companyProducts"
										style={{ marginTop: "20px" }}
										label="Describe about your company products"
										fullWidth
									/>
									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.solveProblems}
										name="solveProblems"
										style={{ marginTop: "20px" }}
										label="Describe the problem your are trying to solve"
										fullWidth
									/>
									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.uniqueSolution}
										name="uniqueSolution"
										style={{ marginTop: "20px" }}
										label="What is unique about your solution"
										fullWidth
									/>
									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.valuePropsitionForCustomer}
										name="valuePropsitionForCustomer"
										style={{ marginTop: "20px" }}
										label="What is your value proposition for the customer"
										fullWidth
									/>
									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.competitors}
										name="competitors"
										style={{ marginTop: "20px" }}
										label="Who are your competetors and what is your competative advantage"
										fullWidth
									/>
									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.revenue}
										name="revenue"
										style={{ marginTop: "20px" }}
										label="Explain your revenue model"
										fullWidth
									/>

									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.potentialMarketSizeProduct}
										name="potentialMarketSizeProduct"
										style={{ marginTop: "20px" }}
										label="What is the potetial size of the market"
										fullWidth
									/>
									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.marketingPlan}
										name="marketingPlan"
										style={{ marginTop: "20px" }}
										label="How do you market your plan"
										fullWidth
									/>

									<TextField
										required
										onChange={formik.handleChange}
										value={formik.values.buisnessProposal}
										name="buisnessProposal"
										style={{ marginTop: "20px" }}
										label="share your buisnessProposal"
										fullWidth
									/>

									<FormControl>
										<FormLabel id="demo-radio-buttons-group-label">Type of Incubation need</FormLabel>
										<RadioGroup
											aria-labelledby="demo-radio-buttons-group-label"
											defaultValue="female"
											name="typeOfIncubation"
											required
											onChange={formik.handleChange}
											value={formik.values.typeOfIncubation}
										>
											<FormControlLabel
												value="physical incubation"
												control={<Radio />}
												label="physical incubation "
											/>
											<FormControlLabel
												value="virtual incubation"
												control={<Radio />}
												label="virtual incubation"
											/>
										</RadioGroup>
									</FormControl>
								</Grid>

								<Button
									type="submit"
									variant="contained"
									style={{
										color: "white",
										backgroundColor: "darkblue",
										marginTop: "5px",
									}}
									fullWidth
								>
									Submit Registration
								</Button>
								<Button
									onClick={() => navigate(-1)}
									variant="contained"
									style={{
										color: "white",
										backgroundColor: "darkblue",
										marginTop: "5px",
									}}
									fullWidth
								>
									Back
								</Button>
							</form>
						</Grid>
					</Paper>
				</Grid>
			</Grid>
		</>
	)
}

export default CompanyRegistration
