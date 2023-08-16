import { createBrowserRouter } from "react-router-dom";
// importing public pages
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import VisionMission from "../pages/VisionMission.jsx";
import Values from "../pages/Values.jsx";
import Team from "../pages/Team.jsx";
import HowWeBegan from "../pages/HowWeBegan.jsx";
import PhotoGallery from "../pages/PhotoGallery.jsx";
import Partners from "../pages/Partners.jsx";
import StoriesOfChange from "../pages/StoriesOfChange.jsx";
import SahyogSangarsh from "../pages/SahyogSangarsh.jsx";
import SahyogRoshan from "../pages/SahyogRoshan.jsx";
import SahyogScholarship from "../pages/SahyogScholarship.jsx";
import SahyogJhula from "../pages/SahyogJhula.jsx";
import Finances from "../pages/Finances.jsx";
import SangarshCampaign from "../pages/SangarshCampaign.jsx";
import Donate from "../pages/Donate.jsx";
import AddListItem from "../pages/AddListItem.jsx";
import AddElement from "../pages/AddElement.jsx";

import Error from "../pages/Error.jsx";

// importing admin pages
import AdminDashboard from "../pages/admin/AdminDashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Home />, 
        error: <Error />
    }, {
        path: "/login", 
        element: <Login />, 
        error: <Error />
    }, {
        path: "/vision-and-mission", 
        element: <VisionMission />, 
        error: <Error />
    }, {
        path: "/values", 
        element: <Values />, 
        error: <Error />
    }, {
        path: "/team",
        element: <Team />,
        error: <Error />
    }, {
        path: "/how-we-began",
        element: <HowWeBegan />,
        error: <Error />
    }, {
        path: "/photo-gallery",
        element: <PhotoGallery />,
        error: <Error />
    }, {
        path: "/our-partners-and-supporters",
        element: <Partners />,
        error: <Error />
    }, {
        path: "/stories-of-change",
        element: <StoriesOfChange />,
        error: <Error />
    }, {
        path: "/sahyog-sangarsh",
        element: <SahyogSangarsh />,
        error: <Error />
    }, {
        path: "/sahyog-roshan",
        element: <SahyogRoshan />,
        error: <Error />
    }, {
        path: "/sahyog-scholarship-and-mentorship-program",
        element: <SahyogScholarship />,
        error: <Error />
    }, {
        path: "/sahyog-jhula",
        element: <SahyogJhula />,
        error: <Error />
    }, {
        path: "/finances",
        element: <Finances />,
        error: <Error />
    }, {
        path: "/sangarsh-campaign",
        element: <SangarshCampaign />,
        error: <Error />
    }, {
        path: "/donate",
        element: <Donate />,
        error: <Error />
    }, {
        path: "/add-list-item",
        element: <AddListItem />,
        error: <Error />
    }, {
        path: "/add-element",
        element: <AddElement />,
        error: <Error />
    }, 
]);

export default router;