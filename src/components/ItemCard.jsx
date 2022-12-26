

export default function ItemCard(props){
    const stock = () => {
        if(props.product.qty > 0){
            return(
                <p className="in-stock">In Stock</p>
            )
        }
        else{
            return(
                <p className="out-stock">Out of Stock</p>
            )
        }
    }
    return(
        <div className="card">
            {/* Name | Picture | Price | Stock | ID */}
            {/* Add to cart, quantity adding to card */}
            <h4>{props.product.name}</h4>
            <img src={props.product.img} alt="product" />
            <p>${props.product.price}</p>
            <p>{stock()}</p>
        </div>
    )
}