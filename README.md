![](https://github.com/Sickcop/technical-test/blob/master/screenshots/Screenshot%202024-06-14%20125300.png)

![](https://github.com/Sickcop/technical-test/blob/master/screenshots/Screenshot%202024-06-14%20125223.png)
Event Finder App

(Advertencia: recargar la pagina por segunda vez en caso de que el modal no retorne informacion de la api)

Descripción
Event Finder App es una aplicación web que permite a los usuarios buscar y ver eventos de Eventbrite. La aplicación ofrece una interfaz intuitiva y atractiva, con la capacidad de cambiar entre modo diurno y nocturno para una mejor experiencia de usuario.

Características
Visualización de Eventos: Los eventos se muestran en tarjetas con su título, descripción e imagen.
Modo Diurno y Nocturno: Cambia entre temas claro y oscuro para mejorar la experiencia de usuario.
Navegación Suave: Desplázate horizontalmente entre eventos de manera suave.
Autenticación: Incluye formularios de inicio de sesión y creación de eventos (no funcionales).

Tecnologías Utilizadas
React: Biblioteca de JavaScript para construir interfaces de usuario.
React Router: Manejo de rutas en la aplicación.
Styled Components: Librería para escribir CSS en JavaScript.
Axios: Cliente HTTP para realizar solicitudes a la API de Eventbrite.
Eventbrite API: API utilizada para obtener información sobre eventos.

Notas de diseño y arquitectura
Consumo de API por id: Fue necesario acceder a los ids de la API de manera manual por medio de un array debio a que la api ya no maneja end points publicos con varios eventos y no se puede acceder al id de una empresa a no ser que se tenga el token de la empresa. puede revisar el changelog: ttps://www.eventbrite.com/platform/docs/changelog


Instalación

Requisitos Previos
Node.js (v12 o superior)
npm (v6 o superior)

npm install
