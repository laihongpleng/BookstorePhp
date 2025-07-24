import { useState, useEffect } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleCheckout = async () => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      await api.post("/order.php", {
        userId: user.id,
        items: cart,
        total,
      });
      alert("Order placed successfully!");
      localStorage.removeItem("cart");
      navigate("/");
    } catch {
      alert("Checkout failed");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Checkout</h1>
      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.title} x {item.qty} = ${(item.price * item.qty).toFixed(2)}
          </p>
        </div>
      ))}

      <h3>Total: ${total.toFixed(2)}</h3>

      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Place Order
      </button>

      <br />
      <Link to="/cart">Back to Cart</Link>
    </div>
  );
}
