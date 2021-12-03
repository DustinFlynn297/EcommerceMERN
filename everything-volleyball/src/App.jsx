import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import ProductList from "./Pages/ProductList/ProductList";
import Register from "./Pages/Register/Register";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";


const App = () => {
    const user = true
    return (
        
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/register" element={user ? <Navigate to="/" replace/> : <Register />} />
            <Route path="/login" element={user ? <Navigate to="/" replace/> : <Login />} />

        </Routes>
    )
    
};

export default App;