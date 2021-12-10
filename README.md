# Proyecto DIW - DWECL

## ÍNDICE
1. [DESCRIPCIÓN](#id1)
2. [PROTOTIPO](#id2)
3. [MODIFICACIONES A LA GUÍA DE ESTILOS](#id3)
4. [RECURSOS](#id4)

## DESCRIPCIÓN<a name="id1"></a>
Portafolio personal.
Se muestran los proyectos realizados, testimonios de los clientes, currículum y formulario de contacto.

## PROTOTIPO<a name="id2"></a>
https://www.figma.com/file/Y5duTmFe0GL7i8NRJ30nQL/Portafolio?node-id=0%3A1
https://www.figma.com/proto/Y5duTmFe0GL7i8NRJ30nQL/Portafolio?node-id=1%3A3&scaling=min-zoom&page-id=0%3A1


## MODIFICACIONES A LA GUÍA DE ESTILOS<a name="id3"></a>
El botón utilizado como menú hamburguesa se introducido como fijo, de esta forma se evitar crear un botón para cada sección y resulta más apropiado para la entrega correspondiente a la asignatura Desarrollo Web en Entorno Cliente.
Dicho botón pasa a ser del color rojo (presente en la guia de estilos) para que contraste con todos los fondos de las diferentes secciones.

Los bloques de testimonios quedan fijos hasta que introduzcamos el contenido multimedia y implementemos el carrusel lateral.

La linea de tiempo sigue igual para pantallas de escritorio con una resolución mayor a 1280 de ancho. Para menores, cambia a un aspecto más ajustado.

Nota: La página proyectos indicada en el mapa de navegación de la entrega anterior no era una página del portafolio, sino la propia web donde está alojado cada proyecto.
No debería haberse indicado como tal.

## RECURSOS<a name="id4"></a>
[Listado de recursos usados]

- Can I use?: https://caniuse.com/
- Bootstrap: https://getbootstrap.com/
- Tailwind: https://tailwindcss.com/docs
- W3C CSS Validator: https://jigsaw.w3.org/css-validator/
- W3C HTML Validator: https://validator.w3.org/


Se ha validado el css con https://jigsaw.w3.org/css-validator/
No hay errores.

Las advertencias mostradas no son fallos, sino situaciones en donde se utilizan los mismos colores de forma intencionada:

444	.formulario button	Colores iguales para background-color y border-color
453	.formulario button:active	Colores iguales para background-color y border-color
517	#boton-volver	Colores iguales para background-color y border-color
525	#boton-volver:active	Colores iguales para background-color y border-color

Se ha validado el html con https://validator.w3.org/
Se han corregido todos los errores, por lo que ya no presenta ninguno.
Solo presenta una advertencia, la sección inicio no tiene un h2 al igual que el resto, no lo necesita por cuestiones de diseño.
