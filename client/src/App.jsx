
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Checkout from "./pages/Checkout";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Master from "./layout/Master";
// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Master/>}>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/checkout" element={<Checkout />} />
//       </Routes>
//       </Route>
//     </Router>
//   );
// }
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aboutus from "./pages/Aboutus";
import RomancePromotionPage from "./pages/Specialoffer";
import NewBook from "./pages/Newbook";


export default function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages with Master layout */}
       
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/Newbook" element={<NewBook/>}/>
           <Route path="/Aboutus" element={<Aboutus/>}/>
           <Route path="/RomancePromotionPage" element={<RomancePromotionPage/>}/>
        
      </Routes>
    </Router>
  );
}
