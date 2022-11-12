import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import ContactUs from "../../Pages/Home/ContactUs/ContactUs";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

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
                path: '/contact',
                element: <ContactUs></ContactUs>
            }
        ]
    }
]);

export default routes;