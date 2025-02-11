# AnderWeb

Este proyecto es una página web para AnderWeb, una empresa dedicada a la creación de páginas web y publicidad digital. La página incluye secciones de inicio, sobre nosotros, servicios y contacto, con un carrusel animado y un formulario de contacto con validaciones.

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos:

- `index.html`: El archivo principal de la página web.
- `style.css`: Archivo de estilos CSS para la página. Los estilos siguen el orden de las etiquetas HTML y, en las media queries, aplica el mismo orden pero solo con los estilos necesarios a modificar.
- `img/`: Carpeta que contiene las imágenes utilizadas en la página.
- `script.js`: Archivo de Javascript para funcionalidades dinamicas.

## Funcionalidades dinamicas

### Carrusel Animado

El carrusel en la sección de inicio (`#Home`) muestra diferentes diapositivas con un efecto de desvanecido suave entre los cambios. Los usuarios pueden navegar entre las diapositivas utilizando los botones "Prev" y "Next".

### Formulario de Contacto

El formulario de contacto en la sección `#Contact` incluye las siguientes validaciones:

1. Comprobar que todos los campos se hayan completado antes de enviar el formulario.
2. Validar que el campo de correo electrónico tenga un formato correcto.
3. Mostrar mensajes de error o confirmación de forma dinámica sin recargar la página.
4. Simular el envío de los datos mediante una función de JavaScript (no es necesario conectar con un back-end).

## Instalación

1. Descarga el repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador web.

## Uso

### Carrusel

El carrusel se encuentra en la sección de inicio (`#Home`). Utiliza los botones "Prev" y "Next" para navegar entre las diapositivas.

### Formulario de Contacto

El formulario de contacto se encuentra en la sección `#Contact`. Completa todos los campos y haz clic en "Enviar". Los mensajes de error o confirmación se mostrarán de forma dinámica sin recargar la página.


