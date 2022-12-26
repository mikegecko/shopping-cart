import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Product from "./routes/products";
import Navbar from "./components/Navbar";
/*---------- App Planning -----------

  Pages:
    - Homepage
    - Store page
    - Cart / Checkout page ( Cart should be a modal )
    - Contact page

  States:
    - Item object w/
      - Price
      - Quantity
      - ID / Name
    - Cart
      - Total price
      - Total items
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

//Stucture ideas
/*
  [
    {N:'xxx',P:000,qty:00,id:x,},
    {N:'xxx',P:000,qty:00,id:x,}
  ]
  OR
  {
    x:{N:'xxx',P:000,qty:00,}
    y:{N:'xxx',P:000,qty:00,}
  }
  Accessing
  arr.foreach(el,index) => {
    el.
  }
*/
export const product_info = [
  {name:"Nordic Metal Wall Art", price: 799.99, qty: 5,},
  {name:"Nordic Glass Coffee Table",price:249.99,qty:15},
  {name:"Mid Century Espresso Brown 6 Drawer Dresser",price:349.99,qty:8},
  {name:"Modern Black Metal Bookshelf",price:149.99,qty:0},
  {name:"Mid Century Media Console",price: 499.99,qty:15},
  {name:"Modern Dining Chair",price:99.99,qty:0},
  {name:"Modern Couch",price:999.99,qty:3},
  {name:"Modern Office Desk",price:1499.99,qty:20},
  {name:"Modern Glass Walnut Cornertable",price:129.99,qty:14},
  {name:"Modern Sofa Chair",price:399.99,qty:13},
  {name:"Modern Bookshelf",price:2999.99,qty:5},
  {name:"White Modern Dresser",price:1799.99,qty:7},
]
function App() {
  const [products, setProducts] = useState([]);
  
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


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          {console.log(products)}
          <Route path="/" element={<Root />} />
          <Route path="/products" element={<Product products={products} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
