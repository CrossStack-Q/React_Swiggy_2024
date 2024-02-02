import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../asset/img/Logo.png"
import useOnlineStatus from "../utils/useOnlineStatus";




export const Title = () => (
    <Link to={"/"} className="Logo">
        <img src={Logo} width={100} height={100} alt="" />
        <div id="title" className="title" key="h1">
            <p>
                Bharat
            </p>

            <p>
                Dhaba
            </p>
        </div>

    </Link>
)




// const authenticateUser = () => {
//     return true;
// }



export default function HeaderComponent() {


    const onlineStatus = useOnlineStatus();

    const [authenticateUser, setAuthenticateUser] = useState(false);
    return (
        <div className="header">
            <Title />
            <div>
                <ul className="list">
                    <li>
                        { onlineStatus ? "Online" : "offline"}
                    </li>
                    <li>
                        <Link to={"/about"}>
                            About
                        </Link>
                    </li>
                    <Link to="/grocery">
                    <li>Grocery</li>
                    </Link>
                    <li>
                        <Link to={"/contact"}>
                        Contact
                        </Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
            {authenticateUser ? <button onClick={() => setAuthenticateUser(false)}>
                Log Out
            </button> : <button onClick={() => setAuthenticateUser(true)}>
                Log __In
            </button>}
        </div>
    )
}