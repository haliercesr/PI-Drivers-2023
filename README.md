

<h1 align="center">PI-DOGS SPA</h1>

![image](https://github.com/haliercesr/pidogs2023/assets/115671323/41f83fb5-af53-4b4a-ab2c-672035b74727)


¡Hola a todos! 😃 Con mucho esfuerzo y dedicación, he terminado otro proyecto, estoy muy contento de haberlo logrado.

Se trata de una single page application que consta de una Landing Page, Home Page, Detail Page y Form Page. Las tecnologías utilizadas fueron React, Redux, NodeJS, Express y Sequelize.

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

**1.** Búsqueda de perros por Raza: Los usuarios pueden ingresar el nombre de la raza y obtener información sobre la misma.

**2.** Listado de Razas: Se muestra una lista de perros con sus nombres y algunas características principales.

**3.** Detalles de una raza: Los usuarios pueden hacer clic en una raza en la lista para ver información detallada, como su altura, peso y años de vida y temperamentos.

**4.** Añadir de una raza: Los usuarios pueden añadir una raza que no se encuentre en el listado, la raza creada se guarda automaticamente en la base de datos.

**5.** Barra de Navegación: Una barra de navegación proporciona enlaces a las diferentes secciones de la aplicación, como la página de inicio, crear una raza, buscar una raza, volver al inicio y salir.

**6.** Filtros combinados: para poder filtrar los resultados por nombre de raza, ordenar segun el alfabeto o el peso, filtrar segun la api o razas creadas en la base de datos.

**7.** Alertas Personalizadas: Se muestran alertas personalizadas en caso de errores o acciones importantes, ver creacion de una nueva raza.

**8.** Rutas y Enrutamiento: Se utiliza React Router para administrar y facilitar la navegación entre diferentes páginas y componentes de la aplicación.

**9.** Gestión de Estado con Redux: Redux se utiliza para gestionar el estado global de la aplicación, como guardar informacion recibida del servidor para usarla en el front ya sea temperamentos de perros, razas, busqueda por nombre de raza y mas.

**10.** Diseño Responsivo: La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla y dispositivos, asegurando una experiencia de usuario consistente.

**11.** Estilos Personalizados: Solo se utilizo CSS , los estilos CSS personalizados se aplican para crear una apariencia agradable y coherente en toda la aplicación.

**12.** Interacción con API: La aplicación se conecta a una API externa para obtener información actualizada sobre cada raza.Para cada solicitud de informacion del servidor a la API externa se utiliza una API KEY proporcionada por la misma una vez que se regista en el sitio

## Tecnologías Utilizadas

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


 <img src="https://github.com/haliercesr/pidogs2023/assets/115671323/701d0eab-15be-4208-847d-649cca7844da" alt="alt text" width=225 height=400>

 <img src="https://github.com/haliercesr/pidogs2023/assets/115671323/1cc99689-981c-4da1-bd4f-3370d954e005" alt="alt text" width=225 height=400>

 <img src="https://github.com/haliercesr/pidogs2023/assets/115671323/0ca4e267-771f-49a1-a32e-b14b48e010ad" alt="alt text" width=225 height=400>

 <img src="https://github.com/haliercesr/pidogs2023/assets/115671323/d48259df-6e53-4e13-85c6-a5ad57387909" alt="alt text" width=225 height=400>

![image](https://github.com/haliercesr/pidogs2023/assets/115671323/951e9ead-9f5c-4477-860d-75837b046ed4)


![sdfsdfsdfsf](https://github.com/haliercesr/pidogs2023/assets/115671323/52c111ab-37ff-4c34-9881-d9bc58879412)







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
