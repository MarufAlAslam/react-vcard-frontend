import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";
import Home from "../pages/home";
import Create from "../pages/create";
import Step1 from "../pages/steps/step1";
import Step2 from "../pages/steps/step2";
import Step3 from "../pages/steps/step3";
import Step4 from "../pages/steps/step4";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/create/step1",
        element: <Step1 />,
      },
      {
        path: "/create/step2",
        element: <Step2 />,
      },
      {
        path: "/create/step3",
        element: <Step3 />,
      },
      {
        path: "/create/step4",
        element: <Step4 />,
      },
    ],
  },
]);
