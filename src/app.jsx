import React from "react"
import ReactDOM from "react-dom/client"

// Default import
import HeaderComponent from "./components/Header";
// Named import
import { Title } from "./components/Header"



import { Footer } from "./components/Footer";
import Body from "./components/Body";
import Shimmer from "./components/Shimmer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => (
    <React.Fragment>
        <HeaderComponent />
        <Body />
        <Footer />
    </React.Fragment>
)


root.render(<AppLayout />);