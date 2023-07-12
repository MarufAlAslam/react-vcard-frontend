import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <div>Home</div>
            }
        ]
    }
])