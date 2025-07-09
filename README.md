# 🏥 Registro de Pacientes - Consultorio Médico

Aplicación web para gestionar pacientes en un consultorio médico con almacenamiento local.


## 🌟 Características

- **CRUD completo** de pacientes (Crear, Leer, Actualizar, Eliminar)
- Persistencia de datos con `localStorage`
- Contador de interacciones con `sessionStorage`
- Diseño responsive y moderno
- Validación de formularios
- Interfaz intuitiva con dos paneles (formulario y tabla)

## 🚀 Cómo Usar

1. **Agregar paciente**:
   - Completa nombre y edad
   - Click en "Registrar Paciente"

2. **Editar paciente**:
   - Click en "Editar" en la tabla
   - Modifica los campos
   - Click en "Actualizar Paciente"

3. **Eliminar paciente**:
   - Click en "Eliminar" junto al registro

4. **Borrar todos**:
   - Click en "🗑️ Borrar todos"

## 🛠 Tecnologías

- HTML5
- CSS3 
- JavaScript Vanilla 
- Web Storage API (localStorage, sessionStorage)

## 📂 Estructura de Archivos

consultorio-medico/

├── index.html # Interfaz principal

├── style.css # Estilos

├── script.js # Lógica de la aplicación

└── assets/

├── img/ # Imágenes


## 🔧 Instalación

No se requiere instalación. Solo abre `index.html` en tu navegador.

```bash
git clone https://github.com/tu-usuario/consultorio-medico.git
cd consultorio-medico

// Ejemplo de función principal
document.addEventListener("DOMContentLoaded", () => {
  // Gestión del estado de la aplicación
  let patients = JSON.parse(localStorage.getItem("patients")) || [];
  
  // Renderizado de la tabla
  const renderTable = () => {
    // Lógica para mostrar pacientes
  };
  
  // Manejo del formulario
  form.addEventListener("submit", (e) => {
    // Validación y guardado
  });
});

```


## 📌 Próximas Mejoras

Añadir filtros/búsqueda

Exportar datos a CSV/PDF

Gráficos de estadísticas

Soporte para múltiples doctores
