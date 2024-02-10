# Proyecto-Unidad-4
COTIZADOR

Este repositorio contiene el código fuente de un cotizador para la Aseguradora TK-U.
El código fuente se encuentra en master branch. 
Este código contiene el proyecto adicional y la actividad extra. 
Puede ser copiado y pegado en JSBin, para poder ser utilizado.

PROBLEMATICA : ASEGURADORA TK-U

El problema central es que la cantidad de cotizaciones que se pueden realizar en un dia
esta limitado por la cantidad de empleados que la empresa pueda tener, pues se requiere 
la atención y acción de los mismos para realizar las cotizaciones.

Este programa plantea la idea de automatizar una tarea basada en el "self service".
Es decir, por medio de este programa se delega la tarea de realizar una cotizacion 
que requiere la atención y acción de un empleado. 

Esto permite que el empleado este libre para realizar otras tareas y además, permite
que se realizen mas cotizaciones al día, pues cada cliente puede realizar su cotizacion
sin la necesidad del empleado. 

El programa toma en cuenta la edad del cliente, edad del cónyugue y número de hijos para 
calcular la cotización. Es decir, cada una de estas variables representa un valor adicional
que será agregado a la cotización final. 

Partimos del precio base que son Q2000. 

El algoritmo propuesto funciona de la siguiente manera: 

1. Se pide la edad del cotizador. Si es menor de edad, no se puede realizar la cotizacion.
    Si es mayor de edad, se continúa al siguiente paso.
2. Se pide la edad de el/la conyúgue. En caso de no tener, es decir, ser soltero/a, se le 
    pide al cliente ingresar el valor "0". 
3. Se pide el número de hijos.
4. Se pide el número de propiedades.
5. Se pide el valor numérico del salario mensual.
6. Se calcúla el porcentaje extra según la edad del cliente. Puede ser 10%, 20% o 30%. 
7. Se calcúla el porcentaje extra según la edad del cónyugue. Puede ser 10%, 20% o 30%. 
8. Se calcúla el porcentaje extra según la cantidad de hijos. En este caso, se agrega 20% por cada hijo.
9. Se calcúla el porcentaje extra según el número de propiedades. Se agrega 35% por cada propiedad.
10. Se calcúla el porcentaje extra en base al salario. En este caso, 5% adicional del salario.
11. Posteriormente se suma el precio base y las cantidades extra. 
12. Se retorna una alerta con el valor final de la cotización.
13. Se pregunta al cliente si desea salir o repetir el proceso de cotización.

ASPECTOS A MEJORAR: 

Definitivamente este proyecto asienta las bases de la estructura del programa. Sin embargo, aún se puede 
hacer un código modular y mas eficiente, al agregar funciones por ejemplo. Además, es necesario hacer 
test cases para poder arreglar todos los casos en los cuales, el programa podria dar un error. Por ejemplo,
al ingresar letras en vez de números. 

Existen muchas mas funcionalidades que pueden ser agregadas. Como la posibilidad de enviar la cotización al correo,
presentar un resumen de la cotización o agregar mas variables que afecten el valor final. 

También es necesario hacer una UI agradable y fácil de usar. 
