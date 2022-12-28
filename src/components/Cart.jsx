import { Drawer } from "@mui/material";
import { Box } from "@mui/system";

export default function Cart(props) {
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
  const cartTotal = () => {
    let total = 0;
    for (const item in props.cart) {
      if (Object.hasOwnProperty.call(props.cart, item)) {
        const element = props.cart[item];
        total += element.price * element.qty;
      }
    }
    return formatter.format(total);
  };
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <Drawer anchor={"right"} open={props.open} onClose={props.onClose}>
      <Box sx={{ width: 300, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: ".5rem",
            borderBottom: "solid 1px gray",
          }}
        >
          <h4>My Cart </h4>({countCartItems()})
        </Box>
        <Box sx={{display:'flex', flexDirection: 'column', paddingBottom:'1rem'}}>
          {props.cart.map((item, index) => {
            return (
              <div key={index}>
                <div className="cart-item">
                  <div className="cart-info">
                    <img className="cart-img" src={item.img} alt={props.name} />
                    <div>{item.name}</div>
                  </div>
                  <div className="cart-ctrl">
                    <div className="qty-ctrl">
                      <button id={'d'+index} onClick={props.qtyHandler}>-</button>
                      <input value={item.qty} onChange={props.qtyHandler}></input>
                      <button id={'i'+index} onClick={props.qtyHandler}>+</button>
                    </div>
                    <div className="cart-price">${item.price}</div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="cart-total">Cart total: {cartTotal()}</div>
          <button className="checkout-btn">Checkout</button>
        </Box>
      </Box>
    </Drawer>
  );
}
