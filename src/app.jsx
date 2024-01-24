import React from "react"
import ReactDOM from "react-dom/client"

// Default import
import HeaderComponent from "./components/Header";
// Named import
import { Title } from "./components/Header"
import { createBrowserRouter , RouterProvider } from "react-router-dom";


import { Footer } from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
    <React.Fragment>
        <HeaderComponent />
        <Body />
        <Footer />
    </React.Fragment>
)

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/about",
        element:<About/>
    }
])




root.render(
    <RouterProvider router={appRouter}/>
);