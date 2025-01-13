<template>
  <v-card title="Dashboard" subtitle="Bienvenido a la aplicación">
    <v-container fluid>
      <div id="controls">
        <button @click="addTextField">Agregar Campo de Texto</button>
        <button @click="generateHtml">Generar HTML</button>
      </div>
      <div id="editor-container">
        <div
          v-for="(field, index) in fields"
          :key="index"
          class="text-field"
          contenteditable="true"
          :style="field.style"
          @mousedown="startDrag($event, index)"
        >
          {{ field.content }}
        </div>
      </div>
    </v-container>
  </v-card>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";

// Estructura de los campos de texto
interface TextField {
  content: string;
  style: {
    position: string;
    left: string;
    top: string;
    width: string;
    height: string;
    padding: string;
    border: string;
    backgroundColor: string;
    resize: string;
    overflow: string;
    cursor: string;
    minWidth: string;
    minHeight: string;
  };
}

// Lista reactiva de campos
const fields = ref<TextField[]>([]);

// Estado reactivo para manejar el arrastre y redimensionamiento
const dragState = reactive({
  isDragging: false,
  isResizing: false,
  currentIndex: null as number | null,
  offsetX: 0,
  offsetY: 0,
  initialWidth: 0,
  initialHeight: 0,
  initialMouseX: 0,
  initialMouseY: 0,
});

// Lista reactiva para saber si el mouse está sobre un campo
const hoverState = reactive({
  hoverIndex: null as number | null,
});

// Función para agregar un campo de texto
const addTextField = () => {
  fields.value.push({
    content: "Nuevo texto",
    style: {
      position: "absolute",
      left: "50px",
      top: "50px",
      width: "150px",
      height: "0px",
      padding: "0px",
      border: "1px dashed #999",
      backgroundColor: "rgba(0, 0, 0, .2)",
      resize: "both",
      overflow: "auto",
      cursor: "move",
      minWidth: "50px",
      minHeight: "30px",
    },
  });
};

// Función para verificar si el mouse está sobre un campo
const isHovering = (index: number) => {
  console.log(hoverState.hoverIndex);
  return hoverState.hoverIndex === index;
};

// Iniciar el arrastre
const startDrag = (event: MouseEvent, index: number) => {


  //VER SI ES CLICK DERECHO O IZQUIERDO

  if (event.button === 2) {
    // Click derecho
    //PREVENIR EL MENU CONTEXTUAL
    event.preventDefault();
    startResize(event, index);
    return;
  }

  if (dragState.isResizing) return; // No permitir arrastre durante redimensionamiento

  dragState.isDragging = true;
  dragState.currentIndex = index;
  //imrpimir el elemento seleccionado
  console.log(fields.value[index]);
  const elementStyle = fields.value[index].style;
  dragState.offsetX = event.clientX - parseInt(elementStyle.left, 10);
  dragState.offsetY = event.clientY - parseInt(elementStyle.top, 10);

  document.addEventListener("mousemove", moveElement);
  document.addEventListener("mouseup", stopDrag);
};

// Mover el campo de texto durante el arrastre
const moveElement = (event: MouseEvent) => {
  if (dragState.isDragging && dragState.currentIndex !== null) {
    const newX = event.clientX - dragState.offsetX;
    const newY = event.clientY - dragState.offsetY;

    const container = document
      .getElementById("editor-container")!
      .getBoundingClientRect();
    const field = fields.value[dragState.currentIndex];

    const fieldWidth = parseInt(field.style.width, 10);
    const fieldHeight = parseInt(field.style.height, 10);

    if (newX >= 0 && newX + fieldWidth <= container.width) {
      field.style.left = `${newX}px`;
    }
    if (newY >= 0 && newY + fieldHeight <= container.height) {
      field.style.top = `${newY}px`;
    }
  }
};

// Finalizar el arrastre
const stopDrag = () => {
  dragState.isDragging = false;
  dragState.currentIndex = null;
  document.removeEventListener("mousemove", moveElement);
  document.removeEventListener("mouseup", stopDrag);
};

// Iniciar redimensionamiento
const startResize = (event: MouseEvent, index: number) => {
  dragState.isResizing = true;
  dragState.currentIndex = index;
  const field = fields.value[dragState.currentIndex];
  dragState.initialWidth = parseInt(field.style.width, 10);
  dragState.initialHeight = parseInt(field.style.height, 10);
  dragState.initialMouseX = event.clientX;
  dragState.initialMouseY = event.clientY;

  document.addEventListener("mousemove", resizeElement);
  document.addEventListener("mouseup", stopResize);
};

// Redimensionar el campo
const resizeElement = (event: MouseEvent) => {
  if (dragState.isResizing && dragState.currentIndex !== null) {
    const dx = event.clientX - dragState.initialMouseX;
    const dy = event.clientY - dragState.initialMouseY;

    const field = fields.value[dragState.currentIndex];

    field.style.width = `${dragState.initialWidth + dx}px`;
    field.style.height = `${dragState.initialHeight + dy}px`;
  }
};

// Finalizar redimensionamiento
const stopResize = () => {
  dragState.isResizing = false;
  dragState.currentIndex = null;
  document.removeEventListener("mousemove", resizeElement);
  document.removeEventListener("mouseup", stopResize);
};

// Función para generar HTML
const generateHtml = () => {
  let generatedHtml = `<div style="position: relative; width: 210mm; height: 297mm;">\n`;
  fields.value.forEach((field) => {
    const { left, top, width, height } = field.style;
    const content = field.content || "Texto vacío";
    generatedHtml += `  <div style="position: absolute; left: ${left}; top: ${top}; width: ${width}; height: ${height};">${content}</div>\n`;
  });
  generatedHtml += `</div>`;
  console.log(generatedHtml);
  alert("HTML generado:\n\n" + generatedHtml);
};
</script>

<style>
/* Contenedor principal (A4 en mm) */
#editor-container {
  position: relative;
  width: 210mm;
  height: 297mm;
  border: 1px solid #ccc;
  margin: 0 auto;
  overflow: hidden;
  background-image: url("http://lnx.simple.auth.test/templates/baptism.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* Campo de texto (editable y redimensionable) */
.text-field {
  position: absolute;
  padding: 10px;
  border: 1px dashed #999;
  background-color: white;
  resize: both;
  overflow: auto;
  min-width: 50px;
  min-height: 30px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

/* Área de arrastre solo visible cuando hover sobre el campo */
.text-field:hover {
  border-color: #5b9bd5;
}

.text-field:hover .drag-handle {
  display: block;
}

.text-field .drag-handle {
  display: none;
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  cursor: move;
  background: rgba(0, 0, 0, 1);
  z-index: 1;
}

/* Botones */
#controls {
  text-align: center;
  margin: 10px;
}

button {
  padding: 10px 15px;
  margin: 5px;
}
</style>
