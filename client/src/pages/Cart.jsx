// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Cart() {
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
//   }, []);

//   const updateQty = (id, qty) => {
//     const updated = cart.map((item) =>
//       item.id === id ? { ...item, qty: qty < 1 ? 1 : qty } : item
//     );
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   const removeItem = (id) => {
//     const updated = cart.filter((item) => item.id !== id);
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Your Cart</h1>
//       {cart.length === 0 && <p>Your cart is empty.</p>}

//       {cart.map((item) => (
//         <div
//           key={item.id}
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginBottom: 10,
//             gap: 10,
//           }}
//         >
//           <img
//             src={item.image || "https://via.placeholder.com/50"}
//             alt={item.title}
//             style={{ width: 50, height: 50, objectFit: "cover" }}
//           />
//           <div style={{ flex: 1 }}>
//             <strong>{item.title}</strong>
//             <p>${item.price}</p>
//           </div>
//           <input
//             type="number"
//             value={item.qty}
//             onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
//             style={{ width: 50 }}
//             min={1}
//           />
//           <button onClick={() => removeItem(item.id)}>Remove</button>
//         </div>
//       ))}

//       <h3>Total: ${total.toFixed(2)}</h3>

//       <button disabled={cart.length === 0} onClick={() => navigate("/checkout")}>
//         Proceed to Checkout
//       </button>

//       <br />
//       <Link to="/">Back to Home</Link>
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Cart() {
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
//   }, []);

//   const updateQty = (id, qty) => {
//     const updated = cart.map((item) =>
//       item.id === id ? { ...item, qty: qty < 1 ? 1 : qty } : item
//     );
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   const removeItem = (id) => {
//     const updated = cart.filter((item) => item.id !== id);
//     setCart(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

//   return (
//     <div className="container py-4">
//       <h2 className="text-center text-purple mb-4">🛒 Your Shopping Cart</h2>

//       {cart.length === 0 ? (
//         <div className="alert alert-info text-center">
//           Your cart is empty.
//         </div>
//       ) : (
//         <div className="row">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="col-12 mb-3 p-3 border rounded shadow-sm d-flex align-items-center"
//             >
//               <img
//                 src={item.image || "https://via.placeholder.com/80"}
//                 alt={item.title}
//                 className="img-thumbnail"
//                 style={{ width: "80px", height: "80px", objectFit: "cover" }}
//               />
//               <div className="ms-3 flex-grow-1">
//                 <h5 className="mb-1">{item.title}</h5>
//                 <p className="text-muted mb-0">${item.price}</p>
//               </div>
//               <input
//                 type="number"
//                 min="1"
//                 value={item.qty}
//                 onChange={(e) =>
//                   updateQty(item.id, parseInt(e.target.value || "1"))
//                 }
//                 className="form-control me-3"
//                 style={{ width: "80px" }}
//               />
//               <button
//                 className="btn btn-outline-danger"
//                 onClick={() => removeItem(item.id)}
//               >
//                 ✖ Remove
//               </button>
//             </div>
//           ))}

//           <div className="col-12 text-end mt-4">
//             <h4 className="fw-bold">Total: ${total.toFixed(2)}</h4>
//             <button
//               className="btn btn-primary mt-2 me-2"
//               disabled={cart.length === 0}
//               onClick={() => navigate("/checkout")}
//             >
//               Proceed to Checkout
//             </button>
//             <Link to="/" className="btn btn-outline-secondary mt-2">
//               ← Back to Home
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";


export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  const updateQty = (id, qty) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: qty < 1 ? 1 : qty } : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <Nav />

      <div className="container py-4">
        <h2 className="text-center text-purple mb-4">🛒 Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="alert alert-info text-center h-100">
            Your cart is empty.
          </div>
        ) : (
          <div className="row">
            {cart.map((item) => (
              <div
                key={item.id}
                className="col-12 mb-3 p-3 border rounded shadow-sm d-flex align-items-center"
              >
                <img
                  src={item.image || "https://via.placeholder.com/80"}
                  alt={item.title}
                  className="img-thumbnail"
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                />
                <div className="ms-3 flex-grow-1">
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="text-muted mb-0">${item.price}</p>
                </div>
                <input
                  type="number"
                  min="1"
                  value={item.qty}
                  onChange={(e) =>
                    updateQty(item.id, parseInt(e.target.value || "1"))
                  }
                  className="form-control me-3"
                  style={{ width: "80px" }}
                />
                <button
                  className="btn btn-outline-danger"
                  onClick={() => removeItem(item.id)}
                >
                  ✖ Remove
                </button>
              </div>
            ))}

            <div className="col-12 text-end mt-4">
              <h4 className="fw-bold">Total: ${total.toFixed(2)}</h4>
              <button
                className="btn btn-primary mt-2 me-2"
                disabled={cart.length === 0}
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
              <Link to="/" className="btn btn-outline-secondary mt-2">
                ← Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>

     
    </>
  );
}
