import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts";
import React from "react";
import Skeleton from "./components/Skeleton";

const Homepage = React.lazy(() => import("./layouts/home/Index"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <React.Suspense fallback={<Skeleton />}>
            <Homepage />
          </React.Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
