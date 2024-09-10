import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to='/'><h1>Shop</h1></Link>
            <div className="icon">
                <Link to='/cart'><MdOutlineShoppingCart /></Link>
            </div>
        </header>
    )
}

export default Header