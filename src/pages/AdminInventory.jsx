import { useEffect, useState } from "react";
import api from "../api";

function AdminInventory() {
  const [inventory, setInventory] = useState([]);

  const loadInventory = async () => {
    try {
      const response = await api.get("/inventory");
      setInventory(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load blood inventory");
    }
  };

  useEffect(() => {
    loadInventory();
  }, []);

  return (
    <div className="form-page">
      <h1>Blood Inventory</h1>

      {inventory.length === 0 ? (
        <p>No blood inventory available.</p>
      ) : (
        <div className="features">
          {inventory.map((item) => (
            <div className="card" key={item.id}>
              <h3>🩸 {item.bloodGroup}</h3>
              <p>
                Available Quantity: {item.quantity}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminInventory;