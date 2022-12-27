import ItemCard from "../components/ItemCard"


export default function Product(props) {
    //Products array is props.products
    return(
        <div className="product-wrapper">
            <div>
                {/* This will become the filter */}
            </div>
            <div className="product-container">
                {props.products.map((product, index) => {
                    return(
                        <ItemCard key={index} product={product} addToCart={props.addToCart}/>
                    )
                })}
            </div>
        </div>
    )
}