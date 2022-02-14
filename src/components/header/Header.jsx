import FormSearch from "./formSearch/FornSearch"
import logo from "../../img/logo.png"
const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href=""><img src={logo} alt="" /></a>
            </div>
            <FormSearch />
            <div className="account">
                <button>Sing up</button>
            </div>
        </header>
    )
}
export default Header