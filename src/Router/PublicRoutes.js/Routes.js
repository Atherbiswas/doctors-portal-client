import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
]);

export default routes;