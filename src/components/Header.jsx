export const Title = () => (
    <h1 id="title" className="title" key="h1">
        Food Villa
    </h1>
)

export default function HeaderComponent() {
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
        </div>
    )
}