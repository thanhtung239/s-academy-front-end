import SchoolIcon from '@mui/icons-material/School';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import DevicesTwoToneIcon from '@mui/icons-material/DevicesTwoTone';

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
