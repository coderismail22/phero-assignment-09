import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJobs from "./assets/Components/AppliedJobs/AppliedJobs";
import Statistics from "./assets/Components/Statistics/Statistics";
import Blog from "./assets/Components/Blog/Blog";
import Home from "./assets/Components/Home/Home";
import Featured from "./assets/Components/Featured/Featured";
import Main from "./assets/Layout/Main";
import Header from "./assets/Components/Header/Header";
import JobDetails from "./assets/Components/JobDetails/JobDetails";
import Error from "./assets/Components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/jobdetails/:id",
        element: <JobDetails></JobDetails>,
        loader:()=> fetch('jobDetails.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
