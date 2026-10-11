import { useEffect, useState } from "react";
import api from "../api";

function AdminDonations() {
  const [donations, setDonations] = useState([]);

  const loadDonations = async () => {
    try {
      const response = await api.get("/donations");
      setDonations(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load donations");
    }
  };

  useEffect(() => {
    loadDonations();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const donation = donations.find(
        (item) => item.id === id
      );

      await api.put(`/donations/${id}`, {
        ...donation,
        status: status
      });

      alert(`Donation ${status.toLowerCase()} successfully!`);

      loadDonations();
    } catch (error) {
      console.error(error);
      alert("Failed to update donation");
    }
  };

  return (
    <div className="form-page">
      <h1>Manage Donations</h1>

      {donations.length === 0 ? (
        <p>No donations available.</p>
      ) : (
        <div className="features">

          {donations.map((donation) => (
            <div className="card" key={donation.id}>

              <h3>Donation #{donation.id}</h3>

              <p>Donor ID: {donation.donorId}</p>
              <p>Blood Group: {donation.bloodGroup}</p>
              <p>Quantity: {donation.quantity}</p>
              <p>Date: {donation.donationDate}</p>
              <p>Status: {donation.status}</p>

              {donation.status !== "APPROVED" && (
                <button
                  onClick={() =>
                    updateStatus(
                      donation.id,
                      "APPROVED"
                    )
                  }
                >
                  Approve
                </button>
              )}

              {donation.status !== "REJECTED" && (
                <button
                  onClick={() =>
                    updateStatus(
                      donation.id,
                      "REJECTED"
                    )
                  }
                >
                  Reject
                </button>
              )}

            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default AdminDonations;