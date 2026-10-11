import { useEffect, useState } from "react";
import api from "../api";

function AdminBloodRequests() {
  const [requests, setRequests] = useState([]);

  const loadRequests = async () => {
    try {
      const response = await api.get("/blood-requests");
      setRequests(response.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load blood requests");
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const request = requests.find(
        (item) => item.id === id
      );

      await api.put(`/blood-requests/${id}`, {
        ...request,
        status: status
      });

      alert(`Blood request ${status.toLowerCase()} successfully!`);

      loadRequests();
    } catch (error) {
      console.error(error);
      alert("Failed to update blood request");
    }
  };

  return (
    <div className="form-page">
      <h1>Manage Blood Requests</h1>

      {requests.length === 0 ? (
        <p>No blood requests available.</p>
      ) : (
        <div className="features">

          {requests.map((request) => (
            <div className="card" key={request.id}>

              <h3>Request #{request.id}</h3>

              <p>Patient ID: {request.patientId}</p>
              <p>Blood Group: {request.bloodGroup}</p>
              <p>Quantity: {request.quantity}</p>
              <p>Date: {request.requestDate}</p>
              <p>Status: {request.status}</p>

              {request.status !== "APPROVED" && (
                <button
                  onClick={() =>
                    updateStatus(
                      request.id,
                      "APPROVED"
                    )
                  }
                >
                  Approve
                </button>
              )}

              {request.status !== "REJECTED" && (
                <button
                  onClick={() =>
                    updateStatus(
                      request.id,
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

export default AdminBloodRequests;