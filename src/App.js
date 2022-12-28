import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Root from "./routes/root";
import Contact from "./routes/contact";
import Product from "./routes/products";
import Navbar from "./components/Navbar";
/*---------- App Planning -----------

  Pages:
    - Homepage DONE
    - Store page DONE
    - Cart DONE
    - Checkout page
    - Contact page DONE

  States:
    - Item object w/
      - Price
      - Quantity
      - ID / Name
    - Cart
      - Total price
      - Total items

  ---------- TODO ----------
    - Disable buttons for out of stock items
    - Fix mobile site display
    - Add functionality to qty input in cart DONE
    - Finish home page styling
*/
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
export const product_images = importAll(
  require.context("./images/products", false, /\.(png|jpe?g|svg)$/)
);

//Example product info
export const product_info = [
  {name:"Nordic Metal Wall Art", price: 799.99, stock: 5, qty: 0},
  {name:"Nordic Glass Coffee Table",price:249.99,stock:15, qty: 0},
  {name:"Mid Century Espresso Brown 6 Drawer Dresser",price:349.99,stock:8, qty: 0},
  {name:"Modern Black Metal Bookshelf",price:149.99,stock:0, qty: 0},
  {name:"Mid Century Media Console",price: 499.99,stock:15, qty: 0},
  {name:"Modern Dining Chair",price:99.99,stock:0, qty: 0},
  {name:"Modern Couch",price:999.99,stock:3, qty: 0},
  {name:"Modern Office Desk",price:1499.99,stock:20, qty: 0},
  {name:"Modern Glass Walnut Cornertable",price:129.99,stock:14, qty: 0},
  {name:"Modern Sofa Chair",price:399.99,stock:13, qty: 0},
  {name:"Modern Bookshelf",price:2999.99,stock:5, qty: 0},
  {name:"White Modern Dresser",price:1799.99,stock:7, qty: 0},
]
function App() {
  //States
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartDrawer, setCartDrawer] = useState(false);
  //Methods
  
  const createProducts = () => {
    let prodArray = [];
    let index = 0;
    //The array below needs to be filenames i think
    //Find dynamic way to loop through images
    for (const prop in product_images) {
      if (Object.hasOwnProperty.call(product_images, prop)) {
        const image = product_images[prop];
        let product = {
          name: product_info[index].name,
          id: index,
          src: prop,
          img:image,
          price: product_info[index].price,
          qty: product_info[index].qty,
          stock: product_info[index].stock,
        };
        prodArray.push(product);
      }
      index++;
    }
    return(prodArray);
  }
  useEffect(() => {
    setProducts(createProducts());
  }, []);
  //Cart Methods
  const cartHandler = (e) => {
    toggleCart(!cartDrawer);
  }
  const toggleCart = (bool) => {
    setCartDrawer(bool);
  }
  const addToCart = (itemID) => {
    let newItem = {...products[itemID]};
    newItem.qty += 1;
    if(containsItemID(cart,newItem)){
      //edit item
      for (let index = 0; index < cart.length; index++) {
        let item = {...cart[index]};
        item.qty += 1;
        let items = [...cart];
        items[index] = item;
        setCart(items);
      }
    }
    else{
      setCart([...cart,newItem]);
    }
  }
  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  const containsItemID = (arr, obj) => {
    for (let index = 0; index < arr.length; index++) {
      const item = arr[index];
      if(item.id === obj.id){
        return(true);
      }
    }
    return(false);
  }
  const qtyHandler = (e) => {
    if(e.target.localName === 'button'){
      //event is a button click
      let id = e.target.id;
      if(id.charAt(0) === 'i'){
        increaseQty(id.slice(1));
      }
      else if(id.charAt(0) === 'd'){
        decreaseQty(id.slice(1));
      }
      else{
        console.log('Quantity Event Error');
      }
    }
    else{
      //event is a input change event
      let id = e.target.id
      let newQty = e.target.value;
      let newCart = [...cart];
      let newItem = {...cart[id]};
    
      if(e.target.value <= 0){
        newCart[id] = null;
        setCart(filterNullItems(newCart));
      }
      else{
        newItem.qty = newQty;
        newCart[id] = newItem;
        setCart(newCart);
      }
    }
  }
  const increaseQty = (cartID) => {
    let newCart = [...cart];
    let newItem = {...cart[cartID]};
    newItem.qty++;
    newCart[cartID] = newItem;
    setCart(newCart);
  }
  const decreaseQty = (cartID) => {
    let newCart = [...cart];
    let newItem = {...cart[cartID]};
    newItem.qty--;
    if(newItem.qty <= 0){
      //remove item from cart
      newCart[cartID] = null;
      setCart(filterNullItems(newCart));
    }
    else{
      newCart[cartID] = newItem;
      setCart(newCart);
    }
  }
  const filterNullItems = (arr) => {
   return(arr.filter((x) => x !== null));
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar qtyHandler={qtyHandler} cart={cart} cartHandler={cartHandler} open={cartDrawer} onClose={() => toggleCart(false)} />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/products" element={<Product products={products} addToCart={addToCart}/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
