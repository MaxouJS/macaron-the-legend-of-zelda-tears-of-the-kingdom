import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import GeneralSalesConditions from "./pages/GeneralSalesConditions";
import Home from "./pages/Home";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <GeneralSalesConditions />,
  },
  {
    path: "/",
    element: <LegalNotice />,
  },
  {
    path: "/",
    element: <PrivacyPolicy />,
  },
  {
    path: "/",
    element: <TermsOfUse />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
