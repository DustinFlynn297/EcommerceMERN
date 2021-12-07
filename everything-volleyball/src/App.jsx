import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom"
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Product from "./Pages/Product/Product";
import ProductList from "./Pages/ProductList/ProductList";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Success from "./Pages/Success/Success";
import { useSelector } from "react-redux";


const App = () => {
    const user = useSelector((state) => state.user.currentUser);
    return (
        
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/productdetail/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
            <Route path="/register" element={user ? <Navigate to="/" replace/> : <Register />} />
            <Route path="/login" element={user ? <Navigate to="/" replace/> : <Login />} />
            

        </Routes>
    )
    
};

export default App;