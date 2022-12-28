import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Cart from "./Cart";
export default function Navbar(props) {
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
                <button className="cart Ibtn" onClick={props.cartHandler}>
                    <ShoppingCartOutlinedIcon />
                </button>
                <Cart cart={props.cart} open={props.open} onClose={props.onClose}/>
            </div>
            
        </div>
    )
}