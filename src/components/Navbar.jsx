import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
    return(
        <div className="navbar">
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/products">Products</Link>
                <Link className="link" to="/contact">Contact</Link>
            </nav>
            <div className="iconbar">
                <button className="search Ibtn">
                    <SearchIcon />
                </button>
                <button className="cart Ibtn">
                    <ShoppingCartOutlinedIcon />
                </button>
            </div>
        </div>
    )
}