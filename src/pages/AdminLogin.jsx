import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        email,
        password
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("adminId", response.data.adminId);
      localStorage.setItem("adminName", response.data.name);

      alert("Admin login successful!");
      navigate("/admin-dashboard");

    } catch (error) {
      console.error(error);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="form-page">

      <h1>Admin Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;