import { useState } from "react";
import Logo from "../asset/img/Logo.png"
export const Title = () => (
    <div className="Logo">
        <img src={Logo} width={100} height={100} alt="" />
    <div id="title" className="title" key="h1">
        <p>
            Bharat
        </p>
        
        <p>
            Dhaba
        </p>
    </div>
    
    </div>
)


// const authenticateUser = () => {
//     return true;
// }



export default function HeaderComponent() {

    const [authenticateUser, setAuthenticateUser] = useState(false);
    return (
        <div className="header">
            <Title />
            <div>
                <ul className="list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Price</li>
                    <li>Cart</li>
                </ul>
            </div>
            {authenticateUser ? <button onClick={()=>setAuthenticateUser(false)}>
                Log Out
            </button> : <button onClick={()=>setAuthenticateUser(true)}>
                Log __In
            </button>}
        </div>
    )
}