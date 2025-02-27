
import Apply from "@/applyForm/Apply";
import AllHeaderComp from "@/Header";
import { createBrowserRouter } from "react-router-dom"

export const route = createBrowserRouter([
    {
        path: '/',
        element: <AllHeaderComp />
    },
    {
        path: '/apply',
        element: <Apply />
    }
]);