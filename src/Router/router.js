import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/homepage/HomePage";
import DestinationPage from "../pages/destinationpage/DestinationPage";
import CrewPage from "../pages/crewpage/CrewPage";
import TechnologyPage from "../pages/technologypage/TechnologyPage";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "destination", element: <DestinationPage /> },
      { path: "crew", element: <CrewPage /> },
      { path: "technology", element: <TechnologyPage /> },
    ],
  },
]);
