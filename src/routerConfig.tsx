import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Events from "./pages/Events/Events"
import Team from "./pages/Team/Team"
import Sponsors from "./pages/Sponsors/Sponsors"
import Members from "./pages/Members/Members"
import ContactUs from "./pages/ContactUs/ContactUs"
import Gallery from "./pages/Gallery/Gallery"
import Layout from "./Layout"


const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/sponsor",
        element: <Sponsors />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      }
    ]
  }
]);

export default routerConfig;
