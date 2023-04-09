import SchoolIcon from '@mui/icons-material/School';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import DevicesTwoToneIcon from '@mui/icons-material/DevicesTwoTone';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Groups2Icon from '@mui/icons-material/Groups2';
import SellIcon from '@mui/icons-material/Sell';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Empty } from 'antd';
import { Link } from 'react-router-dom';
import { logoutSuccessMessage } from '../components/messages/messages';


export const statisticsData = [
	{
		title: 'Courses',
		icon: <SchoolIcon sx={{fontSize: 80}} />,
		data: 1000
	},
	{
		title: 'Users',
		icon: <PeopleAltSharpIcon sx={{fontSize: 80}} />,
		data: 1234
	},
	{
		title: 'Workspaces',
		icon: <DevicesTwoToneIcon sx={{fontSize: 80}} />,
		data: 789
	}
]

export const homeCarouselSettings = {
	dots: false,
	infinite: true,
	slidesToShow: 3,
	autoplay: true,
	swipeToSlide: true,
	initialSlide: 0,
	speed: 500,
	cssEase: "linear",
	responsive: [
	{
		breakpoint: 1024,
		settings: {
		slidesToShow: 3,
		slidesToScroll: 3,
		}
	},
	{
		breakpoint: 600,
		settings: {
		slidesToShow: 2,
		slidesToScroll: 2,
		initialSlide: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1
		}
	}
	]
};

export const detailCourseData = [
	{
		title: "Course",
		icon: < SchoolIcon />,
	},
	{
		title: "Lessons",
		icon: <MenuBookIcon />,
	},
	{
		title: "Students",
		icon: <Groups2Icon />,
	},
	{
		title: "Tags",
		icon: <SellIcon />,
	},
	{
		title: "Price",
		icon: <CreditCardIcon />,
	}
]

export const lessonTabItems = [
{
	key: '1',
	label: `Information`,
	children: <Empty />,
},
{
	key: '2',
	label: `Discussion`,
	children: <Empty />,
},
{
	key: '3',
	label: `Note`,
	children: <Empty />,
},
];

const handleLogout = () => {
logoutSuccessMessage();
localStorage.removeItem('access_token');
localStorage.removeItem('refresh_token');
}

export const items = [
{
	label: <Link to="/profile">
				<UserOutlined />
				<span style={{marginLeft: 5}}>Profile</span>
			</Link>,
	key: '1',
	url: '/profile'
},
{
	label: <Link onClick={handleLogout} to="/login">
				<LogoutOutlined />
				<span style={{marginLeft: 5}}>Logout</span>
			</Link>,
	key: '2',
	url: '/login'
},
];
