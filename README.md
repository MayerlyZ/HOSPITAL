# 🏥 Patient Registration - Medical Office

Web application for managing patients in a medical office with local storage.

## 🌟 Features

- Full CRUD for patients (Create, Read, Update, Delete)
- Data persistence with localStorage
- Interaction counter with sessionStorage
- Modern, responsive design
- Form validation
- Intuitive interface with two panels (form and table)

## 🚀 How to Use

1. Add Patient:
- Fill in name and age
- Click "Register Patient"

2. Edit Patient:
- Click "Edit" in the table
- Modify fields
- Click "Update Patient"

3. Delete Patient:
- Click "Delete" next to the record

4. Delete All:
- Click "🗑️ Delete All"

## 🛠 Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Web Storage API (localStorage, sessionStorage)

## 📂 File Structure

doctor-office/

├── index.html # Main interface

├── style.css # Styles

├── script.js # Application logic

└── assets/

├── img/ # Images

## 🔧 Installation

No installation required. Just open `index.html` in your browser.

```bash
git clone https://github.com/MayerlyZ/HOSPITAL.git
cd HOSPITAL

// Main function example
document.addEventListener("DOMContentLoaded", () => {
// Application state management
let patients = JSON.parse(localStorage.getItem("patients")) || [];

// Table rendering
const renderTable = () => {
// Logic to display patients
};

// Form handling
form.addEventListener("submit", (e) => {
// Validation and saving
});
});

```

## 📌 Upcoming Enhancements

Add filters/search

Export data to CSV/PDF

Statistics charts

## ⏱️ LocalStorage
Stores data persistently in the user's browser.

Data remains even after refreshing the page or closing the browser.

Useful for saving long-term data like patient lists, user preferences, and settings.

```
// Save patients to localStorage
localStorage.setItem("patients", JSON.stringify(patients));

// Load patients from localStorage
let patients = JSON.parse(localStorage.getItem("patients")) || [];

// Clear patients from localStorage
localStorage.removeItem("patients"); 

```
## ⏱️ SessionStorage
Stores data only during the current browser session.

Data is cleared when the tab or window is closed.

Ideal for temporary values like counters, navigation states, etc.
```
// Count page interactions using sessionStorage
let count = sessionStorage.getItem("patientInteractions") || 0;
count++;
sessionStorage.setItem("patientInteractions", count);
counter.textContent = count;

```
## 📸 Preview
![image](https://github.com/user-attachments/assets/4fe2bd7b-cfa0-40d7-ab8e-ba572a8f17af)


## 🔗 Live Demo

👉 https://hopitalmayerly.netlify.app/


