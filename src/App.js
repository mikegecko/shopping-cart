import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
