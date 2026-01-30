# 🛒 Anime Store – React Application

A modern React-based e-commerce web application for anime merchandise such as figures, accessories, and cosplay dresses.  
Built with a clean component architecture, authentication flow, and cart management using Context API.

---

## 🚀 Features

- User authentication (Login & Register)
- Protected routes using React Router
- Dashboard-based navigation
- Product categories:
  - Anime Figures
  - Accessories
  - Cosplay Dresses
- Cart functionality using Context API
- Checkout flow with QR-based payment simulation
- Modular and scalable folder structure
- Responsive UI with custom CSS

---

## 🛠️ Tech Stack

- Frontend: React, JavaScript (ES6+)
- Routing: React Router DOM
- State Management: Context API
- Build Tool: Vite
- HTTP Client: Axios
- Styling: CSS
- Backend (Mock): JSON Server
- Version Control: Git & GitHub

---

## 📁 Project Structure

src/
├── app/            # App entry & routing
├── assets/         # Static data (JSON)
├── components/     # Feature-based components
│   ├── auth
│   ├── dashboard
│   ├── layout
│   ├── profile
│   └── shop
├── context/        # Context API (Cart)
├── main.jsx        # Application bootstrap
└── index.css

---

## ▶️ Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm

### Installation

npm install

### Run the application

npm run dev

The app will run at:
http://localhost:5173

---

## 🔐 Authentication Flow

- User registers and logs in
- Login state stored in localStorage
- Protected routes restrict access without authentication
- Profile editing supported

---

## 🛍️ Cart & Checkout

- Products can be added to cart
- Cart state is managed globally using Context API
- Checkout page displays product summary and QR payment simulation

---

## 📌 Future Enhancements

- Real backend integration (Node.js + MongoDB)
- Payment gateway integration
- Order history feature
- Admin panel
- Redux or other advanced state management

---

## 👨‍💻 Author

Sushant Indi  
Electronics & Communication Engineering Student  
Aspiring Frontend / Full Stack Developer  

GitHub: https://github.com/SushantIndi

---

## ⭐ If you like this project

Give it a star on GitHub — it really helps!
