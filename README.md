# Online Blood Bank Management System — Frontend

## 📌 Project Overview

The **Online Blood Bank Management System** is a web-based application developed to simplify blood donation management and blood availability tracking. The frontend provides an interactive interface for donors, patients, and administrators to manage blood donations, submit blood requests, and check blood inventory.

This frontend is developed using **React.js and Vite** and communicates with a Java Spring Boot backend through REST APIs.

## 🚀 Features

- **Home Page:** Provides navigation to the main modules of the application.
- **Donor Registration:** Allows donors to register and submit their details.
- **Patient Registration:** Allows patients to register and provide their information.
- **Blood Donation:** Enables donors to submit blood donation details.
- **Blood Request:** Allows patients to request blood based on their requirements.
- **Blood Availability:** Displays available blood inventory by blood group.
- **Admin Login:** Provides an administrator login interface.
- **Admin Dashboard:** Provides access to donor, patient, inventory, donation, and blood request management.
- **Donation Approval:** Allows the administrator to approve or reject donation records.
- **Blood Request Approval:** Allows the administrator to approve or reject blood requests.
- **API Integration:** Connects the frontend to the Spring Boot backend using Axios.
- **Protected Routes:** Restricts access to administrative pages based on the stored authentication token.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| Vite | Development server and build tool |
| JavaScript | Frontend application logic |
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| React Router | Navigation between pages |
| Axios | Communication with REST APIs |
| npm | Package management |
| Spring Boot | Backend REST API |
| MySQL | Database storage |

## 📂 Project Structure

```text
blood-bank-frontend/
├── public/
├── src/
│   ├── components/
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Donor.jsx
│   │   ├── Patient.jsx
│   │   ├── Inventory.jsx
│   │   ├── Donation.jsx
│   │   ├── BloodRequest.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminDonors.jsx
│   │   ├── AdminPatients.jsx
│   │   ├── AdminInventory.jsx
│   │   ├── AdminDonations.jsx
│   │   └── AdminBloodRequests.jsx
│   ├── api.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Prerequisites

Install the following software before running the frontend:

- Node.js
- npm
- Visual Studio Code or another code editor
- Java Spring Boot backend for API integration
- MySQL database configured through the backend

## 📥 Installation

**1. Clone the repository**

```bash
git clone YOUR_FRONTEND_GITHUB_REPOSITORY_URL
```

Replace the placeholder with your actual frontend repository URL.

**2. Open the project folder**

```bash
cd blood-bank-frontend
```

**3. Install dependencies**

```bash
npm install
```

**4. Install required frontend libraries if they are not already listed in `package.json`**

```bash
npm install axios react-router-dom
```

## ▶️ Run the Application

Start the Vite development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal. By default, it is:

```text
http://localhost:5173
```

Ensure that the Spring Boot backend is running on port `8080` and that the MySQL database is configured correctly.

## 🔗 Backend API Configuration

The frontend uses Axios to communicate with the backend.

The API configuration is located in `src/api.js`:

```javascript
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
```

The frontend sends requests to the Spring Boot backend using the base URL `http://localhost:8080/api`.

## 🔄 Application Workflow

1. Users open the home page.
2. Donors register through the donor registration page.
3. Patients register through the patient registration page.
4. Donors submit donation details.
5. Patients submit blood requests.
6. Users search for blood availability.
7. The administrator logs in to the dashboard.
8. The administrator reviews donor, patient, donation, and blood request records.
9. Approved donations increase the corresponding blood inventory.
10. Approved blood requests reduce the corresponding inventory when sufficient stock is available.

## 🔐 Authentication

The admin login page communicates with the backend login API. After successful authentication, the frontend stores the returned token in browser local storage and uses it in the `Authorization` header for subsequent API requests.

Administrative routes use a protected-route component to redirect unauthenticated users to the login page.

## 🏗️ Build for Production

To create an optimized production build, run:

```bash
npm run build
```

To preview the production build locally, run:

```bash
npm run preview
```

The generated production files are stored in the `dist/` directory.

## 🧪 Testing

The frontend can be tested by verifying the following operations:

- Donor registration
- Patient registration
- Blood availability search
- Donation submission
- Blood request submission
- Admin login and logout
- Admin dashboard navigation
- Donation approval and rejection
- Blood request approval and rejection
- Inventory updates after approvals

The frontend should be tested with the backend running and the database populated with the necessary records.

## 🔮 Future Enhancements

- Responsive design improvements for mobile devices
- User registration and login for donors and patients
- Enhanced form validation and error handling
- Blood availability notifications
- Email and SMS notifications
- Dashboard analytics and reporting
- Deployment to a cloud hosting platform

## 👨‍💻 Project Information

**Project Title:** Online Blood Bank Management System

**Project Type:** Full Stack Java Project

**Frontend:** React.js and Vite

**Backend:** Java and Spring Boot

**Database:** MySQL

## 📄 License

This project is intended for educational and academic purposes. Add an appropriate open-source license if you plan to distribute it publicly.
