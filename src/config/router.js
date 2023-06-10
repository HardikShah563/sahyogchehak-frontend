import { createBrowserRouter } from "react-router-dom";
// importing public pages
import Home from "../pages/Home.jsx";

import Error from "../pages/Error.jsx";

// importing admin pages
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Home />, 
        error: <Error />}
    // }, {
    //     path: "/login", 
    //     element: <Login />, 
    //     error: <Error />
    // }, {
    //     path: "/register", 
    //     element: <Register />, 
    //     error: <Error />
    // }
]);

export default router;