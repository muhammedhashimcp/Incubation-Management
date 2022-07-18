import React, { useEffect } from "react"
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import MailIcon from "@mui/icons-material/Mail"
import { logout, reset } from "../features/auth/authSlice"
import NotificationsIcon from "@mui/icons-material/Notifications"
import { Badge, Tooltip } from "@mui/material"
function Header() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.auth)
	// const userRole=useSelector((state)=> state.auth.userRole
	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate("/")
	}

	useEffect(() => {
		if (user) {
		} else {
		}
	}, [user])

	return (
		<header className="header">
			<div className="logo">
				<Link to="/">
					<h1>Incubation</h1>
				</Link>
			</div>

			<section className="search">
				<div className="form-group-search">
					<input
						type="text"
						className="form-control"
						id="search"
						name="search"
						// value={search}
						placeholder="Search Here"
						// onChange={onChange}
					/>
				</div>
			</section>
			<ul>
				{user ? (
					<>
						<li>
							<Link to="/profile">
								<Tooltip title="Notification">
									<Badge color="primary" badgeContent={0} max={9}>
										<NotificationsIcon />
									</Badge>
								</Tooltip>
							</Link>
						</li>
						<li>
							<Link to="/email">
								<Tooltip title="Email">
									<Badge color="primary" badgeContent={0} max={9}>
										<MailIcon fontSize="large" sx={{ marginLeft: "40%" }} />
									</Badge>
								</Tooltip>
							</Link>
						</li>
						<li>
							<Link to="/profile">
								<Tooltip title="profile">
									<>
										<FaUser />
										{user.name}
									</>
								</Tooltip>
							</Link>
						</li>
						<li>
							<button className="btn" onClick={onLogout}>
								<FaSignInAlt />
								Logout
							</button>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/login">
								<FaSignInAlt />
								Login
							</Link>
						</li>
						<li>
							<Link to="/register">
								<FaUser />
								Register
							</Link>
						</li>
					</>
				)}
			</ul>
		</header>
	)
}

export default Header
