

<h1 align="center">Proyecto Drivers SPA</h1>

![image](https://github.com/haliercesr/PI-Drivers-2023/assets/115671323/f6aeabee-0093-4024-81c4-3b663fec73fa)


En esta SPA se enfatizo mas en la practicidad de las tecnologias aprendidas, se trabajo mas en la modularizacion y se utilizaron mejores practicas. Se esta trabajando en la documentacion en Git Hub y en modularizar mas.Consta de una Landing Page, Home Page, Detail Page y Form Page. Las tecnologías utilizadas fueron React, Redux, NodeJS, Express y Sequelize.

Para este proyecto se reemplazo Create React App por Vite, para mejorar el rendimiento.

El flujo es el siguiente: El frontend se comunica con un servidor BBF (BACK FOR FRONT) robusto y modularizado. Este servidor se programó en Express y filtra la información que se consume desde una API externa y la devuelve al frontend. También puede guardar datos según se solicite en una base de datos relacional. El servidor y la base de datos se comunican a través del ORM Sequelize. La base de datos está hecha con PostgreSQL y pgAdmin. Para probar el servidor, se utilizó el software Insomnia.

Tanto el frontend, el servidor y la base de datos hacen sus propias validaciones y devuelven sus errores. Para manejar los errores se utilizaron promesas y asyncawait. 🛠️

Con el tiempo, iré reparando errores y actualizando el proyecto (por ejemplo, cambiar de idioma) e implementando mejores prácticas y nuevas tecnologías. 🚀

## Tabla de Contenidos

- [Funcionalidades](#funcionalidades)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Guía de Uso](#guía-de-uso)
- [Cómo Contribuir](#cómo-contribuir)
- [Licencia](#licencia)

## Funcionalidades

**1.** Búsqueda de pilotos por nombre: Los usuarios pueden ingresar el nombre del piloto y obtener información sobre el mismo.

**2.** Listado de pilotos: Se muestra una lista de drivers con sus nombres y algunas características principales.

**3.** Detalles de piloto: Los usuarios pueden hacer click en uno de la lista para ver la información detallada, como su descripcion, escuderias y fecha de nacimiento.

**4.** Añadir de un nuevo conductor: Los usuarios pueden añadir un nuevo conductor que no se encuentre en el listado, el conductor creado se guarda automaticamente en la base de datos.

**5.** Barra de Navegación: Una barra de navegación proporciona enlaces a las diferentes secciones de la aplicación, como la página de inicio, crear una piloto, buscar un piloto por nombre, volver al inicio y salir.

**6.** Filtros combinados: para poder filtrar los resultados por nombre de escuderias, ordenar segun el alfabeto o edad, filtrar segun la api o pilotos creados en la base de datos.

**7.** Alertas Personalizadas: Se muestran alertas personalizadas en caso de errores o acciones importantes, ver creacion de un nuevo piloto.

**8.** Rutas y Enrutamiento: Se utiliza React Router para administrar y facilitar la navegación entre diferentes páginas y componentes de la aplicación.

**9.** Gestión de Estado con Redux: Redux se utiliza para gestionar el estado global de la aplicación, como guardar informacion recibida del servidor para usarla en el front ya sea escuderias, pilotos, busqueda por nombre de piloto y mas.

**10.** Diseño Responsivo: La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla y dispositivos, asegurando una experiencia de usuario consistente.

**11.** Estilos Personalizados: Solo se utilizo CSS , los estilos CSS personalizados se aplican para crear una apariencia agradable y coherente en toda la aplicación.

**12.** Interacción con API: La aplicación se conecta a una API externa para obtener información actualizada sobre cada conductor.

## Tecnologías Utilizadas

- Vite
- React
- React Router
- Redux
- Axios
- CSS
- NodeJS
- Express
- PostgreSQL
- Sequalize
- Promises
- AsyncAwait

## Capturas de Pantalla


 <img src="https://github.com/haliercesr/PI-Drivers-2023/assets/115671323/f1bb13fb-7707-47c2-aad8-b7fe6c64302a" alt="alt text" width=225 height=400>

 <img src="https://github.com/haliercesr/PI-Drivers-2023/assets/115671323/9cd98e80-655c-48aa-ab1b-90b413f24b35" alt="alt text" width=225 height=400>

 <img src="https://github.com/haliercesr/PI-Drivers-2023/assets/115671323/1880336d-d10b-4cd2-8821-8d7bfc25b267" alt="alt text" width=225 height=400>

 <img src="https://github.com/haliercesr/PI-Drivers-2023/assets/115671323/401cfe29-fd28-43c1-b2bf-6c536613c7b0" alt="alt text" width=225 height=400>

![image](https://github.com/haliercesr/PI-Drivers-2023/assets/115671323/ebc325ca-0c5a-4aad-80a3-5de7908ddba5)


![image](https://github.com/haliercesr/PI-Drivers-2023/assets/115671323/92402a00-94aa-4179-9b80-483e680b6f48)







## Guía de Uso

**1.** Visita [https://pidogs2023.vercel.app/](https://pidogs2023.vercel.app/) en tu navegador.

<p align="center">
  <img src="https://github.com/haliercesr/pidogs2023/assets/115671323/18f2e578-795e-4bca-84e9-6ff3bad54847" alt="Inicio" width=400 height=200>
</p>



**2.** Para ver los detalles de alguna raza hacer click en una card o insertar el nombre en el buscador y presionar "buscar"

<p align="center">
  <img src="https://github.com/haliercesr/pidogs2023/assets/115671323/68786e2c-16c5-4cc9-b0ed-c287f3c28665" alt="Inicio" width=400 height=200>
</p>


**3.** Para crear una raza hacer click en el boton "Create", completar todos los campos obligatorios y hacer click en crear.Para la imagen podes buscar el link de alguna imagen en la web.Si todo va bien te saldra el mensaje "el perro se creo con exito!". Para volver al menu principal seleccionar el boton "volver a inicio"

<p align="center">
  <img src="https://github.com/haliercesr/pidogs2023/assets/115671323/548eb5e2-15a6-4f7e-8371-482c3e16dc64" alt="Inicio" width=400 height=200>
</p>


**4.** Para filtrar mejor las busquedas utilizar los filtros combinados.

<p align="center">
  <img src="https://github.com/haliercesr/pidogs2023/assets/115671323/d441c2c5-d7a3-442d-9ce1-92fd2a07533c" alt="Inicio" width=400 height=200>
</p>


**5.** Disfruta.

## Cómo Contribuir

Si quieres contribuir a este proyecto, sigue estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con tu nueva funcionalidad (`git checkout -b nueva-funcionalidad`).
3. Realiza tus cambios y realiza commits (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin nueva-funcionalidad`).
5. Crea un pull request en este repositorio.

## Licencia

Este proyecto está bajo la Licencia [---](----).
