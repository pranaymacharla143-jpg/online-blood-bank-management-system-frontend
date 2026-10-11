import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Donor from "./pages/Donor";
import Patient from "./pages/Patient";
import Inventory from "./pages/Inventory";
import Donation from "./pages/Donation";
import BloodRequest from "./pages/BloodRequest";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminDonors from "./pages/AdminDonors";
import AdminPatients from "./pages/AdminPatients";
import AdminInventory from "./pages/AdminInventory";
import AdminDonations from "./pages/AdminDonations";
import AdminBloodRequests from "./pages/AdminBloodRequests";

import ProtectedRoute from "./components/ProtectedRoute";

function Home() {
  return (
    <div className="home">

      <header className="navbar">
        <h2>🩸 Blood Bank</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/donor">Donor</Link>
          <Link to="/patient">Patient</Link>
          <Link to="/donation">Donate Blood</Link>
          <Link to="/blood-request">Request Blood</Link>
          <Link to="/inventory">Blood Availability</Link>
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      <section className="hero">
        <h1>Online Blood Bank Management System</h1>
        <p>Donate Blood. Save Lives.</p>

        <div className="buttons">
          <Link to="/donor">
            <button>Donate Blood</button>
          </Link>

          <Link to="/patient">
            <button>Find Blood</button>
          </Link>
        </div>
      </section>

      <section className="features">

        <div className="card">
          <h3>🩸 Blood Donors</h3>
          <p>Register as a donor and help save lives.</p>
        </div>

        <div className="card">
          <h3>🔍 Find Blood</h3>
          <p>Search for available blood groups.</p>
        </div>

        <div className="card">
          <h3>📦 Blood Inventory</h3>
          <p>Check current blood availability.</p>
        </div>

      </section>

    </div>
  );
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/donor" element={<Donor />} />

      <Route path="/patient" element={<Patient />} />

      <Route path="/inventory" element={<Inventory />} />

      <Route path="/donation" element={<Donation />} />

      <Route path="/blood-request" element={<BloodRequest />} />

      <Route path="/admin" element={<AdminLogin />} />

      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/donors"
        element={
          <ProtectedRoute>
            <AdminDonors />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/patients"
        element={
          <ProtectedRoute>
            <AdminPatients />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/inventory"
        element={
          <ProtectedRoute>
            <AdminInventory />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/donations"
        element={
          <ProtectedRoute>
            <AdminDonations />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/blood-requests"
        element={
          <ProtectedRoute>
            <AdminBloodRequests />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;