import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <div className="navbar">
            <nav>
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/products">Products</Link>
                <Link className="link" to="/contact">Contact</Link>
            </nav>
        </div>
    )
}