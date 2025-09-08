import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import HomesPage from "../pages/HomesPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: "/home",
                element: <HomesPage />
            }
        ]
    }
])

export default router