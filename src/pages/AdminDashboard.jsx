
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  const adminName = localStorage.getItem("adminName");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("adminId");
    localStorage.removeItem("adminName");

    navigate("/admin");
  };

  return (
    <div className="form-page">

      <h1>Admin Dashboard</h1>

      <p>
        Welcome, <strong>{adminName || "Admin"}</strong>
      </p>

      <button onClick={handleLogout}>
        Logout
      </button>

      <div className="features">

        <div
  className="card"
  onClick={() => navigate("/admin/donors")}
  style={{ cursor: "pointer" }}
>
  <h3>🩸 Donors</h3>
  <p>Manage registered blood donors.</p>
</div>

        <div
  className="card"
  onClick={() => navigate("/admin/patients")}
  style={{ cursor: "pointer" }}
>
  <h3>🏥 Patients</h3>
  <p>Manage registered patients.</p>
</div>

        <div
  className="card"
  onClick={() => navigate("/admin/inventory")}
  style={{ cursor: "pointer" }}
>
  <h3>📦 Blood Inventory</h3>
  <p>Manage available blood stock.</p>
</div>

        <div
  className="card"
  onClick={() => navigate("/admin/donations")}
  style={{ cursor: "pointer" }}
>
  <h3>💉 Donations</h3>
  <p>Review and approve donations.</p>
</div>

        <div
  className="card"
  onClick={() => navigate("/admin/blood-requests")}
  style={{ cursor: "pointer" }}
>
  <h3>📋 Blood Requests</h3>
  <p>Review and approve blood requests.</p>
</div>

      </div>

    </div>
  );
}

export default AdminDashboard;