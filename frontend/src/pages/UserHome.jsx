import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Booking from "../pages/CompanyRegistration"
import Spinner from "../components/Spinner"
import { reset } from "../features/auth/authSlice"
import { getIncubation } from "../features/incubation/incubationSlice"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
function UserHome() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user, isLoading, isError, message } = useSelector((state) => state.auth)
	const { incubation } = useSelector((state) => state.incubation)
	console.log(incubation, "printing incubation")

	useEffect(() => {
		if (isError) {
			console.log(message)
		}

		if (!user) {
			navigate("/login")
		}

		dispatch(getIncubation())

		return () => {
			dispatch(reset())
		}
	}, [user, navigate, isError, message, dispatch])

	if (isLoading) {
		return <Spinner />
	}
	return (
		<>
			<section className="heading">
				<h1>Welcome {user && user.name}</h1>
				<p>User Dashboard</p>

				{incubation.length > 0 ? (
					<Link to={"/editcompany"}>
						<button className="btn">View/Edit Details</button>
					</Link>
				) : (
					<Link to={"/booking"}>
						<button className="btn">Book a slot</button>
					</Link>
				)}

				{/* {forms.map((incub)=>(
        <div>
          <ul  key={incub._id}>
            <li>
              {incub.address}
            </li>
          </ul>
        </div>
       ))} */}
			</section>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 550 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell align="center">User Name</TableCell>
							<TableCell align="center">Company Name</TableCell>
							<TableCell align="center">Email</TableCell>
							<TableCell align="center">Date</TableCell>
							<TableCell align="center">Company Reg.no</TableCell>
							<TableCell align="center">Mobile</TableCell>
							{/* <TableCell align="center">Delete</TableCell>
            <TableCell align="center">Edit</TableCell> */}
						</TableRow>
					</TableHead>
					<TableBody>
						{incubation.map((data, index) => (
							<TableRow key={data._id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								{/* <TableCell component="th" scope="row">
              
              </TableCell> */}
								<TableCell align="center">{data.name}</TableCell>
								<TableCell align="center">{data.company}</TableCell>
								<TableCell align="center">{data.email}</TableCell>
								<TableCell align="center">{new Date(data.createdAt).toLocaleString("en-US")}</TableCell>
								<TableCell align="center">{data._id}</TableCell>

								<TableCell align="center">{data.phone}</TableCell>
								{/* <TableCell align="center"> <Button onClick={()=>dispatch(deleteUser(userData._id))} variant="contained">Delete</Button> </TableCell>
              <TableCell align="center"> <Button onClick={()=>{UserUpdate(data._id)}} variant="contained" >Edit</Button></TableCell> */}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export default UserHome
