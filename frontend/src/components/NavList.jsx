import DashboardOutlined from "@mui/icons-material/DashboardOutlined"
import Person from "@mui/icons-material/Person"
import Forum from "@mui/icons-material/Forum"
import Analytics from "@mui/icons-material/Analytics"
import FolderOpen from "@mui/icons-material/FolderOpen"
import BorderColor from "@mui/icons-material/BorderColor"
import Search from "@mui/icons-material/Search"
import FiberNewIcon from "@mui/icons-material/FiberNew"
import NewReleasesIcon from "@mui/icons-material/NewReleases"
import HowToRegIcon from "@mui/icons-material/HowToReg"
import PendingIcon from "@mui/icons-material/Pending"
import BeenhereIcon from "@mui/icons-material/Beenhere"
import WidgetsIcon from "@mui/icons-material/Widgets"
import TimelineIcon from "@mui/icons-material/Timeline"

const navbarList = [
	{
		icon: Search,
		desc: "Search",
		secondDesc: "",
		dispatchMethod: "",
		badge: 0,
		subList: [],
	},
	{
		icon: DashboardOutlined,
		desc: "DASHBOARD",
		secondDesc: "",
		dispatchMethod: "dashboard()",
		badge: 0,
		subList: [],
	},
	{
		icon: Person,
		desc: "USER",
		secondDesc: "",
		dispatchMethod: "allUsers()",
		badge: 0,
		subList: [],
	},
	{
		icon: WidgetsIcon,
		desc: "ALL",
		secondDesc: "",
		dispatchMethod: "allApplications()",
		badge: 0,
		subList: [],
	},
	{
		icon: FiberNewIcon,
		desc: "NEW APPLICATION",
		secondDesc: "",
		dispatchMethod: "registeredApplications()",
		badge: 2,
		subList: [],
	},
	{
		icon: PendingIcon,
		desc: "PENDING",
		secondDesc: "",
		dispatchMethod: "pendingApplications()",
		badge: 2,
		subList: [],
	},
	{
		icon: HowToRegIcon,
		desc: "APPROVED",
		secondDesc: "",
		dispatchMethod: "approvedApplications()",

		badge: 2,
		subList: [],
	},
	{
		icon: NewReleasesIcon,
		desc: "DENEID",
		secondDesc: "",
		dispatchMethod: "deniedApplications()",
		badge: 2,
		subList: [],
	},
	{
		icon: BeenhereIcon,
		desc: "BOOKING SLOTS",
		secondDesc: "",
		dispatchMethod: "slotBooking()",
		badge: 2,
		subList: [],
	},
	{
		icon: TimelineIcon,
		desc: "TRACK",
		secondDesc: "",
		dispatchMethod: "track()",
		badge: 2,
		subList: [],
	},
	{
		icon: Forum,
		desc: "FORM",
		secondDesc: "",
		dispatchMethod: "form()",

		badge: 0,
		subList: [],
	},
	{
		icon: Analytics,
		desc: "ANALYTICS",
		secondDesc: "",
		dispatchMethod: "analytics()",
		badge: 0,
		subList: [],
	},
	// {
	// 	icon: FolderOpen,
	// 	desc: "FOLDERS",
	// 	secondDesc: "",
	// 	dispatchMethod: "form",

	// 	badge: 0,
	// 	subList: [],
	// },
	{
		icon: BorderColor,
		desc: "EDIT",
		secondDesc: "",
		dispatchMethod: "edit()",
		badge: 0,
		subList: [],
	},
	{
		icon: BorderColor,
		desc: "SETTINGS",
		secondDesc: "",
		dispatchMethod: "settings()",
		badge: 0,
		subList: [],
	},
]

export default navbarList
