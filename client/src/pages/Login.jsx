// import { useState } from "react";
// import api from "../api/api";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await api.post("/login.php", { email, password });
//       if (res.data.success) {
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//         alert("Login successful");
//         navigate("/");
//       } else {
//         alert("Invalid email or password");
//       }
//     } catch (e) {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Login</h1>
//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         style={{ display: "block", marginBottom: 10 }}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         style={{ display: "block", marginBottom: 10 }}
//       />
//       <button onClick={handleLogin}>Login</button>
//       <p>
//         Don't have an account? <Link to="/register">Register here</Link>
//       </p>
//     </div>
//   );
// }
import { useState } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/login.php", { email, password });
      if (res.data.success) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("Login successful");
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    } catch (e) {
      alert("Login failed");
    }
  };

  return (
    <>
      <Nav />

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
          <h3 className="text-center text-purple mb-4"> Login</h3>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid mb-3">
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>

          <div className="text-center">
            <small>
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none">
                Register here
              </Link>
            </small>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
