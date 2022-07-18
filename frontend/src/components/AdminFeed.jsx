import { Box } from "@mui/system"
import Stack from "@mui/material/Stack"
import React, { useEffect } from "react"
import TableCell from "@mui/material/TableCell"
import { useDispatch, useSelector } from "react-redux"
import { Pagination } from "@mui/material"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Sidebar from "../../src/components/Sidebar"
import { getAllCompanies, reset } from "../features/company/companySlice"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import Spinner from "./Spinner"

function AdminFeed() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { user } = useSelector((state) => state.auth)
	console.log(user)
	const { companies, isLoading, isSuccess, isError, message } = useSelector((state) => state.company)
	console.log("companies",companies)

	useEffect(() => {
		console.log("admin Dashboard use effect")
		if (isError) {
			console.log(message)
			toast.error(message)
		}
		if (companies.length===0) {
			dispatch(getAllCompanies())
		}

		
	}, [companies, isError, message, dispatch])

	if (isLoading) {
		return <Spinner />
	}

	const viewDetails = (companyId) => {
		console.log(companyId)
		dispatch(viewDetails(companyId))
		navigate("/viewDetails")
	}

	return (
		<div>
			<Stack spacing={2} direction="row" justifyContent="space-between">
				<div style={{ height: 505 }}>
					<Sidebar />
				</div>
				{companies && companies.length > 0 ? (
					<>
						<Box flex={4} p={2}>
							<Paper elevation={10} sx={{ overflow: "auto" }}>
								<TableContainer sx={{ maxHeight: 440 }}>
									<Table stickyHeader aria-label="sticky table">
										<TableHead>
											<TableRow>
												<TableCell>No</TableCell>
												<TableCell>CompanyName</TableCell>
												<TableCell>Owner Name</TableCell>
												<TableCell>Email</TableCell>
												<TableCell>Status</TableCell>
												<TableCell>CreatedAt</TableCell>
											</TableRow>
										</TableHead>
										<TableBody>
											{companies.map((company, i) => {
												return (
													<TableRow
														hover
														role="checkbox"
														key={company._id}
													
													>
														<TableCell>{i + 1}</TableCell>
														<TableCell>{company.company}</TableCell>
														<TableCell>{company.name}</TableCell>
														<TableCell>{company.email}</TableCell>
														<TableCell>{company.status}</TableCell>
														<TableCell>{company.createdAt}</TableCell>
													</TableRow>
												)
											})}
										</TableBody>
									</Table>
								</TableContainer>
							</Paper>
							{companies.length > 20 ? <Pagination count={20} color="primary" /> : ""}
						</Box>
					</>
				) : (
					<>
						<Box flex={4} p={2}>
							<Paper elevation={10} sx={{ overflow: "auto" }}>
								<TableContainer sx={{ maxHeight: 440 }}>
									<h4 className="company">companies not registered yet</h4>
								</TableContainer>
							</Paper>
						</Box>
					</>
				)}
			</Stack>
		</div>
	)
}

export default AdminFeed
