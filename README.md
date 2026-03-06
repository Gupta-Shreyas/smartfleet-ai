# 🚀 SmartFleet AI – Intelligent Fleet Governance System

SmartFleet AI is a real-time fleet management and vehicle governance platform that automatically assigns vehicles, visualizes fleet movement, and provides analytics insights to optimize transportation systems.

The platform simulates a **fleet command center** where administrators can monitor vehicles, assign requests, and respond to emergencies using intelligent decision algorithms.

---

# 🧠 Problem Statement

Fleet management systems often suffer from:

• inefficient vehicle allocation
• lack of real-time visibility
• delayed emergency response
• poor analytics for decision making

SmartFleet AI solves these issues by combining **real-time tracking, automated assignment logic, and analytics dashboards**.

---

# ✨ Key Features

## 🗺 Real-Time Fleet Map

* Vehicles displayed on an interactive map
* Animated movement simulation
* Route visualization between vehicle and destination

## 🚑 Smart Vehicle Assignment

The system automatically selects the best vehicle based on:

* vehicle availability
* fuel level
* distance from request location
* priority level

## 🚨 Emergency Override Mode

Emergency button instantly:

* prioritizes emergency vehicles
* dispatches nearest response unit
* broadcasts alerts to the dashboard

## 📊 Fleet Analytics Dashboard

Provides insights such as:

* vehicle usage statistics
* fleet efficiency score
* operational recommendations

## ⚡ Live Fleet Simulation

A simulation engine generates:

* real-time requests
* alerts
* vehicle activity

This allows demonstration of the system even without real fleet data.

---

# 🏗 System Architecture

Frontend:

* React
* Tailwind CSS
* Leaflet Maps
* Chart.js

Backend:

* Node.js
* Express.js
* WebSockets (Socket.IO)

Database:

* MongoDB

---

# 🔁 System Workflow

1. User submits vehicle request
2. Backend algorithm selects optimal vehicle
3. Vehicle assignment broadcast using WebSockets
4. Map displays route and vehicle movement
5. Dashboard analytics update in real time

---

# 📸 Dashboard Modules

SmartFleet Command Center includes:

* Fleet Map
* Request Vehicle Panel
* Alerts System
* Fleet Analytics
* Fleet Intelligence Panel
* Emergency Override Mode

---

# 🛠 Installation

Clone repository

```
git clone https://github.com/your-repo/smartfleet-ai.git
```

Install backend dependencies

```
cd backend
npm install
```

Install frontend dependencies

```
cd frontend
npm install
```

Start backend

```
node server.js
```

Start frontend

```
npm start
```

---

# 📊 Example Use Case

1. Fleet manager requests vehicle transport
2. SmartFleet AI calculates best vehicle
3. Route appears on map
4. Vehicle travels toward destination
5. Dashboard updates with analytics

---

# 🏆 Hackathon Innovation

SmartFleet AI demonstrates:

* intelligent fleet governance
* real-time transportation monitoring
* automated dispatch decision making
* emergency response optimization

---

# 👨‍💻 Author

Developed as a hackathon project focused on intelligent transportation systems.
