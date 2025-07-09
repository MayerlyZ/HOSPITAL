// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  // Obtener referencias a los elementos del DOM
  const form = document.getElementById("patientForm"); // Formulario de pacientes
  const clearBtn = document.getElementById("clearBtn"); // Botón para limpiar todos los pacientes
  const counter = document.getElementById("counter"); // Contador de interacciones
  const tableBody = document.querySelector("#patientTable tbody"); // Cuerpo de la tabla

  // Contador de interacciones usando sessionStorage
  let count = sessionStorage.getItem("patientInteractions") || 0;
  count++; // Incrementar el contador
  sessionStorage.setItem("patientInteractions", count); // Guardar en sessionStorage
  counter.textContent = count; // Mostrar el contador en la interfaz

  // Obtener pacientes almacenados en localStorage o inicializar un array vacío
  let patients = JSON.parse(localStorage.getItem("patients")) || [];

  /**
   * Función para renderizar la tabla de pacientes
   * - Limpia la tabla y la vuelve a llenar con los datos actualizados
   */
  const renderTable = () => {
    tableBody.innerHTML = ""; // Limpiar el contenido actual de la tabla

    // Iterar sobre cada paciente y crear una fila en la tabla
    patients.forEach((patient, index) => {
      const row = document.createElement("tr"); // Crear fila
      row.innerHTML = `
        <td>${patient.name}</td> <!-- Columna Nombre -->
        <td>${patient.age}</td> <!-- Columna Edad -->
        <td>
          <button class="deleteBtn" data-index="${index}">🗑️ Delete</button> <!-- Botón Eliminar -->
          <button class="editBtn" data-index="${index}">✏️ Edit</button> <!-- Botón Editar -->
        </td>
      `;
      tableBody.appendChild(row); // Añadir fila a la tabla
    });

    // Asignar evento click a todos los botones de eliminar
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index; // Obtener índice del paciente a eliminar
        patients.splice(index, 1); // Eliminar paciente del array
        localStorage.setItem("patients", JSON.stringify(patients)); // Actualizar localStorage
        renderTable(); // Volver a renderizar la tabla
      });
    });

    // Asignar evento click a todos los botones de editar
    document.querySelectorAll(".editBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = e.target.dataset.index; // Obtener índice del paciente a editar
        const patient = patients[index]; // Obtener datos del paciente

        // Llenar el formulario con los datos del paciente seleccionado
        document.getElementById("patientName").value = patient.name;
        document.getElementById("patientAge").value = patient.age;

        // Cambiar el texto del botón de submit a "Actualizar"
        const submitBtn = form.querySelector("button[type='submit']");
        submitBtn.textContent = "Actualizar Paciente";

        // Guardar el índice del paciente que se está editando en el formulario
        form.dataset.editingIndex = index;

        // Poner el foco en el campo de edad para facilitar la edición
        document.getElementById("patientAge").focus();
      });
    });
  };

  // Renderizar la tabla al cargar la página
  renderTable();

  /**
   * Evento submit del formulario
   * - Maneja tanto la creación como la actualización de pacientes
   */
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar el envío tradicional del formulario

    // Obtener valores del formulario
    const name = document.getElementById("patientName").value.trim();
    const age = parseInt(document.getElementById("patientAge").value.trim());

    // Validar datos
    if (!name || isNaN(age) || age < 1) {
      alert("Por favor, ingresa un nombre válido y una edad mayor a 0.");
      return;
    }

    // Verificar si estamos editando un paciente existente
    const editingIndex = form.dataset.editingIndex;
    if (editingIndex !== undefined) {
      // Actualizar paciente existente
      patients[editingIndex] = { name, age };

      // Restaurar el texto del botón submit a "Registrar Paciente"
      const submitBtn = form.querySelector("button[type='submit']");
      submitBtn.textContent = "Registrar Paciente";

      // Limpiar el índice de edición
      delete form.dataset.editingIndex;
    } else {
      // Agregar nuevo paciente al array
      patients.push({ name, age });
    }

    // Guardar en localStorage y actualizar la tabla
    localStorage.setItem("patients", JSON.stringify(patients));
    renderTable();

    // Limpiar el formulario
    form.reset();
  });

  /**
   * Evento click del botón "Borrar todos"
   * - Limpia el localStorage y reinicia la lista de pacientes
   */
  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("patients"); // Eliminar datos del localStorage
    patients = []; // Reiniciar el array de pacientes
    renderTable(); // Volver a renderizar la tabla vacía
  });
});