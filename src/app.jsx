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
import SignupLogin from "./components/Logins/SignupLogin";
import Profile from "./components/Profile";
import ProfileClass from "./components/ProfileClass"
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
                path:"/profilec",
                element:<ProfileClass name={"Anurag from Class"} />

            }
            ,
            {
                path:"/about",
                element:<About/>,
                children:[
                    {
                        path:"profile",
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/login",
                element:<SignupLogin/>
            }
        ]
    },
])




root.render(
    <RouterProvider router={appRouter}/>
);