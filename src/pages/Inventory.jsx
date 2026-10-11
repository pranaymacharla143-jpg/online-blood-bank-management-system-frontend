import { useState } from "react";
import api from "../api";

function Inventory() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [inventory, setInventory] = useState(null);
  const [message, setMessage] = useState("");

  const searchBlood = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(
        `/inventory/search/${bloodGroup}`
      );

      setInventory(response.data);
      setMessage("");

    } catch (error) {
      setInventory(null);
      setMessage("Blood group not available");
    }
  };

  return (
    <div className="form-page">

      <h1>Blood Availability</h1>

      <form onSubmit={searchBlood}>

        <input
          type="text"
          placeholder="Enter Blood Group (Example: A+)"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
          required
        />

        <button type="submit">
          Search Blood
        </button>

      </form>

      {inventory && (
        <div className="card">
          <h2>Blood Group: {inventory.bloodGroup}</h2>
          <h3>
            Available Quantity: {inventory.quantity}
          </h3>
        </div>
      )}

      {message && (
        <p>{message}</p>
      )}

    </div>
  );
}

export default Inventory;