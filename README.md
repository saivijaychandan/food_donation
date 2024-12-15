# Food Donation Project

## Table of Contents
- [Introduction](#introduction)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Hardware and Software Requirements](#hardware-and-software-requirements)
- [Functional and Non-functional Requirements](#functional-and-non-functional-requirements)
- [Implementation](#implementation)
- [Conclusion](#conclusion)

---

## Introduction

The Food Donation project aims to connect food donors with charitable organizations to reduce food waste and help those in need. It is built using the MERN stack (MongoDB, Express, React, Node.js).

---

## Usage

- **Donor Registration:** Donors can register and post details about the food they wish to donate.
- **Charity Registration:** Charities can register and browse available donations.
- **Pickup and Distribution:** Charities arrange for food pickup and distribution.

---

## Folder Structure

```
food_donation/
├── backend/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── aiRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── setupTests.js
│   ├── README.md
│   ├── package.json
│   └── package-lock.json
├── README.md
```

---

## Hardware and Software Requirements

### Hardware:
- A computer with at least 4 GB of RAM.
- At least 10 GB of free disk space.

### Software:
- Node.js 14 or higher
- MongoDB 4.4 or higher
- React 17 or higher

---

## Functional and Non-functional Requirements

### Functional Requirements:
- User authentication and authorization.
- Donor and charity registration.
- Posting and viewing food donations.
- Notifications for new donations.

### Non-functional Requirements:
- The system should be scalable to handle a large number of users.
- Data should be securely stored and transmitted.
- The application should have high availability.

---

## Implementation

The backend is implemented using Node.js and Express, with MongoDB as the database. The frontend is built using React. The project follows a modular structure.

### Backend Overview:
- **server.js**: Sets up the server, connects to MongoDB, and defines routes.
- **authRoutes.js**: Handles authentication routes.
- **postRoutes.js**: Manages routes for creating and fetching posts.
- **aiRoutes.js**: Routes for AI analysis.

### Frontend Overview:
- **App.js**: Defines the main application structure and routes using React Router.
- **pages**: Contains React components for different pages like Home, Login, Signup, etc.
- **components**: Reusable UI components.

---

## Conclusion

The Food Donation project provides an effective solution to reduce food waste and help those in need by connecting food donors with charitable organizations. Built using the MERN stack, it is designed to be user-friendly, secure, and scalable.
