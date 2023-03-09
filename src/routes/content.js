import Home from "../containers/Home/Home";
import Profile from "../containers/Profile/Profile";

export const routes = [
    {
        exact: true,
        path: "/",
        element: <Home />,
        children: [
            {
                exact: true,
                path: 'profile',
                component: <Profile />,
            },
          ],
    },
    // {
    //     exact: true,
    //     path: '/profile',
    //     component: <Profile />,
    // },
]