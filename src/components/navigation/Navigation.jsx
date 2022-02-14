import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/chat">Chat</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation