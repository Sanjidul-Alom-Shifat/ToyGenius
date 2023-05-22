import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomeLayout from "../Layout/HomeLayout";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Components/LoginForm/Login";
import Registration from "../Components/RegistrationForm/Registration";
import AllToys from "../Components/AllToysTable/AllToys";
import AddAToy from "../Components/AddToySection/AddAToy";
import MyToys from "../Components/MyToysSection/MyToys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Components/ToyDetails/ToyDetails";
import UpdateToys from "../Components/UpdateData/UpdateToys";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomeLayout></HomeLayout>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/alltoys',
                element:<AllToys></AllToys>
            },
            {
                path: '/addtoy',
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path: '/mytoys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/alltoy/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://toy-genius-server-side.vercel.app/singletoys/${params.id}`)
            },
            {
                path: '/toy/:id',
                element:<PrivateRoute><UpdateToys></UpdateToys></PrivateRoute>
            }
        ]
        
    }
]);

export default router;