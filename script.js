// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get references to DOM elements
  const form = document.getElementById("patientForm"); // Patient form
  const clearBtn = document.getElementById("clearBtn"); // Clear all patients button
  const counter = document.getElementById("counter"); // Interaction counter
  const tableBody = document.querySelector("#patientTable tbody"); // Table body

  // Session interaction counter using sessionStorage
  let count = sessionStorage.getItem("patientInteractions") || 0; // Get current count
  count++; // Increase by 1 on page load
  sessionStorage.setItem("patientInteractions", count); // Save it back to sessionStorage
  counter.textContent = count; // Display on screen

  // Retrieve patients from localStorage or initialize as empty array
  let patients = JSON.parse(localStorage.getItem("patients")) || [];

  /**
   * Function to render the patients table
   */
  const renderTable = () => {
    tableBody.innerHTML = ""; // Clear previous rows

    // Loop through each patient
    patients.forEach((patient, index) => {
      // Create a table row with patient info and action buttons
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${patient.name}</td>
        <td>${patient.age}</td>
        <td>
          <button class="deleteBtn" data-index="${index}">
            <img src="./assets/img/delete-icon.png" alt="Delete">
          </button>
          <button class="editBtn" data-index="${index}">
            <img src="./assets/img/edit-icon.png" alt="Edit">
          </button>
        </td>
      `;
      tableBody.appendChild(row); // Append the row to the table body
    });

    // Show patients in the console
    console.log("Rendering patients:", patients);

    // Add event listeners to all delete buttons
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = btn.dataset.index;

        // First confirmation
        const confirm1 = confirm("Are you sure you want to delete this patient?");
        if (!confirm1) return;

        // Second confirmation
        const confirm2 = confirm("This action is irreversible. Confirm deletion?");
        if (!confirm2) return;

        // Delete the patient from the array
        patients.splice(index, 1);
        localStorage.setItem("patients", JSON.stringify(patients)); // Update localStorage

        // Re-render the table
        renderTable();

        // Alert user
        alert("Patient successfully deleted.");
        console.log("Patient deleted. Updated list:", patients);
      });
    });

    // Add event listeners to all edit buttons
    document.querySelectorAll(".editBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const index = btn.dataset.index; // Get patient index
        const patient = patients[index]; // Retrieve patient data

        // Fill form with existing data
        document.getElementById("patientName").value = patient.name;
        document.getElementById("patientAge").value = patient.age;

        // Change button text to "Update Patient"
        const submitBtn = form.querySelector("button[type='submit']");
        submitBtn.textContent = "Update Patient";

        // Save editing index
        form.dataset.editingIndex = index;

        // Focus on age input
        document.getElementById("patientAge").focus();
      });
    });
  };

  // Initial table render
  renderTable();

  /**
   * Form submit event handler
   * - Handles new registrations and updates
   */
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    // Get and clean input values
    const nameInput = document.getElementById("patientName").value.trim();

    // Capitalize each word
    const name = nameInput
      .toLowerCase()
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    const age = parseInt(document.getElementById("patientAge").value.trim());

    // Basic validation
    if (!name || isNaN(age) || age < 1) {
      alert("Please enter a valid name and an age greater than 0.");
      return;
    }

    const editingIndex = form.dataset.editingIndex;

    if (editingIndex !== undefined) {
      // Update existing patient
      patients[editingIndex] = { name, age };

      // Reset button text and editing index
      const submitBtn = form.querySelector("button[type='submit']");
      submitBtn.textContent = "Register Patient";
      delete form.dataset.editingIndex;

      alert("Patient information updated successfully.");
      console.log("Patient updated:", patients[editingIndex]);
    } else {
      // Add new patient to array
      patients.push({ name, age });

      alert("Patient registered successfully.");
      console.log("New patient added:", { name, age });
    }

    // Save to localStorage and re-render
    localStorage.setItem("patients", JSON.stringify(patients));
    renderTable();

    // Reset form fields
    form.reset();
  });

  /**
   * "Clear All" button click event
   * - Removes all patients
   */
  clearBtn.addEventListener("click", () => {
    const confirmClear = confirm("This will remove all patients. Are you sure?");
    if (!confirmClear) return;

    localStorage.removeItem("patients"); // Clear storage
    patients = []; // Reset array
    renderTable(); // Update table

    alert("All patient records have been cleared.");
    console.log("All patients removed.");
  });
});
