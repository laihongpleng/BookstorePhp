// import { useState } from "react";
// import api from "../api/api";
// import { useNavigate, Link } from "react-router-dom";

// export default function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async () => {
//     try {
//       const res = await api.post("/register.php", { name, email, password });
//       if (res.data.success) {
//         alert("Registration successful");
//         navigate("/login");
//       } else {
//         alert("Registration failed");
//       }
//     } catch (e) {
//       alert("Registration failed");
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Register</h1>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{ display: "block", marginBottom: 10 }}
//       />
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
//       <button onClick={handleRegister}>Register</button>
//       <p>
//         Already have an account? <Link to="/login">Login here</Link>
//       </p>
//     </div>
//   );
// }
import { useState } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await api.post("/register.php", { name, email, password });
      if (res.data.success) {
        alert("Registration successful");
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (e) {
      alert("Registration failed");
    }
  };

  return (
    <>
      <Nav />

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4 shadow-sm" style={{ maxWidth: "400px", width: "100%" }}>
          <h3 className="text-center text-purple mb-4"> Register</h3>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="d-grid mb-3">
            <button className="btn btn-primary" onClick={handleRegister}>
              Register
            </button>
          </div>

          <div className="text-center">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login here
              </Link>
            </small>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
