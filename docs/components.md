# FlowBachata - Componentes reutilizables

## 1. Introducción

En esta fase se desarrollan componentes reutilizables utilizando React y TypeScript. Estos componentes permiten construir la interfaz de forma modular, evitando duplicación de código y facilitando el mantenimiento.

---

## 2. Componentes implementados

### Button
Componente reutilizable para acciones del usuario.

Props:
- label: texto del botón
- onClick: función a ejecutar
- type: tipo de botón (button, submit)
- variant: estilo visual (primary, secondary)

---

### Input
Componente reutilizable para formularios.

Props:
- type: tipo de input (text, email, password)
- placeholder: texto de ayuda
- value: valor del input
- onChange: función de cambio

---

### Card
Componente contenedor para mostrar información.

Props:
- children: contenido interno del componente

---

## 3. Uso de TypeScript

Todos los componentes están tipados mediante interfaces, lo que permite:
- Mayor seguridad en el código
- Evitar errores en props
- Mejor autocompletado

---

## 4. Composición de componentes

Los componentes pueden combinarse entre sí. Por ejemplo:
- Formularios con Input + Button
- Tarjetas con Card + contenido dinámico

---

## 5. Estilos

Se utiliza Tailwind CSS para aplicar estilos rápidos y reutilizables, manteniendo consistencia visual en toda la aplicación.

---

## 6. Objetivo

El objetivo de esta fase es construir una base de componentes reutilizables que permita escalar la interfaz de manera ordenada y profesional.