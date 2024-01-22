import { useState } from "react";

export const Title = () => (
    <h1 id="title" className="title" key="h1">
        Food Villa
    </h1>
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