import { Drawer } from "@mui/material";
import { Box } from "@mui/system";

export default function Cart (props) {
    const countCartItems = () => {
        let count = 0;
        for (const item in props.cart) {
            if (Object.hasOwnProperty.call(props.cart, item)) {
                const element = props.cart[item];
                count += element.qty;
            }
        }
        return(count)
    }
    return(
        <Drawer anchor={'right'} open={props.open} onClose={props.onClose}>
            <Box sx={{width: 300, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{display: 'flex', flexDirection: 'row',padding: '.5rem', borderBottom: 'solid 1px gray'}}>
                <h4>My Cart </h4>({countCartItems()})
                </Box>
                <Box>
                {props.cart.map((item,index) => {
                    return(
                        <div key={index}>
                            <div className="cart-item">
                                <img className='cart-img' src={item.img} alt={props.name}></img>
                                <div>{item.name}</div>
                            </div>
                            
                        </div>
                    )
                })}
                </Box>
            </Box>
        </Drawer>
    )
}