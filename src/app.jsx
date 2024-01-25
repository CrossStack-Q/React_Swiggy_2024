import React from "react"
import ReactDOM from "react-dom/client"

// Default import
import HeaderComponent from "./components/Header";
// Named import
import { Title } from "./components/Header"
import { createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";


import { Footer } from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
    <React.Fragment>
        <HeaderComponent />
        <Outlet/>
        <Footer />
    </React.Fragment>
)

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            }
        ]
    },
])




root.render(
    <RouterProvider router={appRouter}/>
);