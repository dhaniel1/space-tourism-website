import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  CrewPage,
  DestinationPage,
  HomePage,
  RootLayout,
  TechnologyPage,
} from "./pages";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "destination", element: <DestinationPage /> },
        { path: "crew", element: <CrewPage /> },
        { path: "technology", element: <TechnologyPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
