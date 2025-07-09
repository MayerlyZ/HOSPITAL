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

## Img
![image](https://github.com/user-attachments/assets/4fe2bd7b-cfa0-40d7-ab8e-ba572a8f17af)

## Url
https://hopitalmayerly.netlify.app/


