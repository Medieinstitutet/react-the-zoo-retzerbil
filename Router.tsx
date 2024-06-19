import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./src/pages/Layout"
import { Home } from "./src/pages/Home"
import { Animals } from "./src/pages/Animals"
import { NotFound } from "./src/pages/NotFound";
import { About } from "./src/pages/About";
import { AnimalDetailView } from "./src/pages/AnimalDetailView"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/animals",
                element: <Animals></Animals>
            },
            {
                path: "/animaldetailview/:animalId",
                element: <AnimalDetailView></AnimalDetailView>
            },
            {
                path: "/about",
                element: <About></About>
            }
        ],
        errorElement: <NotFound></NotFound>,
    }
])