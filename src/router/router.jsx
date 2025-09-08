import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Login />,
            }
        ]
    }
])

export default router