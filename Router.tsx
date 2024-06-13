import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./src/pages/Layout"
import { Home } from "./src/pages/Home"
import { Animals } from "./src/pages/Animals"

export const router = createBrowserRouter([
    {path:"/",
        element:<Layout></Layout>,
        children:[
            {path:"/",
                element:<Home></Home>
            },
            {
                path:"/animals",
                element:<Animals></Animals>
            }
        ]
    }
])