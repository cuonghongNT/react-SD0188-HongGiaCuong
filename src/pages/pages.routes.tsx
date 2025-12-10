import HomeComponent from "./home/HomeComponent";
import ClientsList from "./clients/ClientsList";
import userRoutes from "./user/user.routes";
import Pages from "./pages";
import authRoutes from "./auth/auth.routes";
import Login from "./auth/login/Login";
import SignUp from "./auth/sign-up/sign-up";


const pageRoutes = [
    {
        path: 'pages',
        element: <Pages/>,
        children: [
            {
                path: 'home',
                element: <HomeComponent/>
            },
            {
                path: 'clients',
                element: <ClientsList />
            },
            ...authRoutes,
            ...userRoutes
        ]
    },
    // Public root-level routes for direct internet access
    {
        path: 'auth/sign-up',
        element: <SignUp/>
    },
        {
        path: 'login',
        element: <Login/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            ...authRoutes,
            ...userRoutes
        ]
    },


]

export default pageRoutes;