import "./App.css";
import StoreFront from "./pages/Storefront";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import MixShop from "./pages/MixShop";
import Nav from "./components/Nav";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Signin from './pages/Signin'
import Register from './pages/Register'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Suspense
          fallback={
            <div className="h-screen w-screen flex justify-center items-center">
              <p>Loading</p>
            </div>
          }
        >
          <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Register />} />
            <Route path="/store" element={<StoreFront />} />
            <Route path="/mixshop" element={<MixShop />} />
            <Route path="/perfume" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="dark"
          pauseOnHover
        />
    </div>
  );
}

export default App;
