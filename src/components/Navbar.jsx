import { Link } from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Cart from "./Cart";
export default function Navbar(props) {
    const countCartItems = () => {
        let count = 0;
        for (const item in props.cart) {
          if (Object.hasOwnProperty.call(props.cart, item)) {
            const element = props.cart[item];
            count += element.qty;
          }
        }
        return count;
      };
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
                    <div className="crt">{countCartItems()}</div>
                </button>
                <Cart qtyHandler={props.qtyHandler} cart={props.cart} open={props.open} onClose={props.onClose}/>
            </div>
            
        </div>
    )
}