import DashboardOutlined from "@mui/icons-material/DashboardOutlined"
import Person from "@mui/icons-material/Person"
import Forum from "@mui/icons-material/Forum"
import Analytics from "@mui/icons-material/Analytics"
import FolderOpen from "@mui/icons-material/FolderOpen"
import BorderColor from "@mui/icons-material/BorderColor"
import Search from "@mui/icons-material/Search"

const navbarList = [
	// {
	// 	icon: Search,
	// 	desc: "Search",
	// 	secondDesc: "",
	// 	navRoute: "",
	// 	badge: 0,
	// 	subList: [],
	// },
	{
		icon: Search,
		desc: "Search",
		secondDesc: "",
		badge: 0,
		subList: [],
	},
	{
		icon: Search,
		desc: "Search",
		secondDesc: "",
		badge: 0,
		subList: [],
	},
	{
		icon: Search,
		desc: "Search",
		secondDesc: "",
		badge: 0,
		subList: [],
	},
	{
		icon: DashboardOutlined,
		desc: "Dashboard",
		secondDesc: "",
		badge: 0,
		subList: [],
	},
	{
		icon: Person,
		desc: "User",
		secondDesc: "",
		badge: 0,
		subList: [],
	},
	{
		// icon: WidgetsIcon,
		desc: "Usessef",
		secondDesc: "",
		badge: 0,
		subList: [],
	},
	{
		icon: Person,
		desc: "User",
		secondDesc: "",
		badge: 0,
		subList: [],
	},
	{
		icon: Forum,
		desc: "Forum",
		secondDesc: "Message from andi",
		badge: 2,
		subList: [
			{
				desc: "chat",
				badge: 2,
			},
			{
				desc: "reminder",
				badge: 0,
			},
		],
	},
	{
		icon: Analytics,
		desc: "Analytics",
		secondDesc: "",
		badge: 0,
		subList: [],
	},
	{
		icon: FolderOpen,
		desc: "Folder",
		secondDesc: "",
		badge: 0,
		subList: [],
	},
	{
		icon: BorderColor,
		desc: "Edit",
		secondDesc: "",
		badge: 0,
		subList: [],
	},
]

// <List
//   sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
//   component="nav"
//   aria-labelledby="nested-list-subheader"
// >
//   <ListItemButton  >
//     <ListItemIcon>
//       <WidgetsIcon/>
//     </ListItemIcon>
//     <ListItemText primary="ALL" />
//   </ListItemButton>
//   <ListItemButton
//    >
//     <ListItemIcon>
//       <FiberNewIcon/>
//     </ListItemIcon>
//     <ListItemText primary="NEW APPLICATION" />
//   </ListItemButton>
//   <Divider variant="middle"   />
//   <ListItemButton
//   >
//     <ListItemIcon>
//       <PendingIcon/>
//     </ListItemIcon>
//     <ListItemText primary="PENDING " />
//   </ListItemButton>
//   <Divider variant="middle"  />
//   <ListItemButton
//   >
//     <ListItemIcon>
//       <HowToRegIcon/>
//     </ListItemIcon>
//     <ListItemText primary="APPROVED " />
//   </ListItemButton>
//   <Divider variant="middle" />
//   <ListItemButton >
//     <ListItemIcon>
//       <NewReleasesIcon/>
//     </ListItemIcon>
//     <ListItemText primary="DENEID " />
//   </ListItemButton>
//   <Divider variant="middle" />
//   <ListItemButton >
//     <ListItemIcon>
//       <BeenhereIcon/>
//     </ListItemIcon>
//     <ListItemText primary="BOOKING SLOTS" />
//   </ListItemButton>
//   <Divider variant="middle" />
//   <ListItemButton >
//     <ListItemIcon>
//       <TimelineIcon/>
//     </ListItemIcon>
//     <ListItemText primary="TRACK" />
//   </ListItemButton>

// </List>
export default navbarList


// <List dense={true}>
// 				{navbarList.map((key, index) => (
// 					<>
// 						{!index === 0 ? (
// 							<React.Fragment key={index}>
// 								<Tooltip
// 									key={index}
// 									title={open ? key.desc : ""}
// 									onClick={(key) => {
// 										console.log(key)
// 										console.log(key.dispatchMethod)
// 										dispatch(key.dispatchMethod())
// 									}}
// 									placement={"right"}
// 									componentsProps={{
// 										tooltip: {
// 											sx: {
// 												backgroundColor: "gray",
// 												color: "white",
// 												marginLeft: "22px !important",
// 												boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
// 											},
// 										},
// 									}}
// 								>
// 									<ListItemButton
// 										onClick={toogleOpenSearch}
// 										sx={{
// 											margin: "6px 14px",
// 											padding: "10px",
// 											borderRadius: "8px",
// 											backgroundColor: "#26284687",
// 										}}
// 									>
// 										<ListItemIcon sx={{ minWidth: "46px" }}>
// 											<Badge badgeContent={key.badge} color="secondary" variant="dot">
// 												<key.icon sx={{ fontSize: "20px", color: "lightgray" }} />
// 											</Badge>
// 										</ListItemIcon>

// 										<InputBase
// 											inputRef={refFocus}
// 											margin="dense"
// 											fullWidth={true}
// 											placeholder="Search"
// 											sx={{
// 												fontSize: "0.875rem",
// 												lineHeight: "1.43em",
// 												"& .MuiInputBase-input": {
// 													color: "lightgray",
// 													padding: 0,
// 												},
// 											}}
// 											componentsProps={{
// 												input: {
// 													sx: {
// 														padding: 0,
// 													},
// 												},
// 											}}
// 										></InputBase>
// 									</ListItemButton>
// 								</Tooltip>
// 								<Divider variant="middle" light={true} />
// 							</React.Fragment>
// 						) : (
// 							<Tooltip
// 								title={open ? key.desc : ""}
// 								key={key}
// 								// onClick={(key) => {
// 								// 	console.log(key)
// 								// 	console.log(key.dispatchMethod)
// 								// 	dispatch(key.dispatchMethod())
// 								// }}
// 								placement={"right"}
// 								componentsProps={{
// 									tooltip: {
// 										sx: {
// 											backgroundColor: "gray",
// 											color: "white",
// 											marginLeft: "22px !important",
// 											boxShadow: "0px 0px 22px -2px rgba(0,0,0,0.20)",
// 										},
// 									},
// 								}}
// 							>
// 								<ListItemButton
// 									sx={{
// 										margin: "6px 14px",
// 										padding: "10px",
// 										borderRadius: "8px",
// 										"&:hover": {
// 											backgroundColor: "#26284687",
// 										},
// 									}}
// 								>
// 									<ListItemIcon sx={{ minWidth: "46px" }}>
// 										<Badge badgeContent={key.badge} color="secondary" variant="dot">
// 											<key.icon sx={{ fontSize: "20px", color: "lightgray" }} />
// 										</Badge>
// 									</ListItemIcon>

// 									<ListItemText
// 										primary={key.desc}
// 										primaryTypographyProps={{
// 											variant: "body2",
// 										}}
// 										sx={{
// 											display: "inline",
// 											margin: "0px",
// 											overflowX: "hidden",
// 											color: "lightgray",
// 											whiteSpace: "nowrap",
// 											minWidth: "126px",
// 										}}
// 									/>
// 									{key.badge !== 0 ? (
// 										<Chip label={key.badge} color={"secondary"} size="small" sx={{ height: "auto" }} />
// 									) : (
// 										<></>
// 									)}
// 								</ListItemButton>
// 							</Tooltip>
// 						)}
// 					</>
// 				))}
// 				<Divider variant="middle" light={true} />
// 			</List>

// 			<Box
// 				sx={{
// 					display: "flex",
// 					justifyContent: "flex-start",
// 					alignItems: "center",
// 					alignContents: "center",
// 					margin: "14px 14px",
// 					padding: "12px 4px",
// 					borderTop: "1px solid lightgray",
// 				}}
// 			></Box>
// 		</>