# Proyecto-Unidad-4
COTIZADOR, ASEGURADORA TK-U

Este repositorio contiene el código fuente de un cotizador para la Aseguradora TK-U.
Puede ser copiado y pegado en JSBin, para poder ser utilizado.

ASEGURADORA TK-U

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
4. Se calcúla el porcentaje extra según la edad del cliente. Puede ser 10%, 20% o 30%. 
5. Se calcúla el porcentaje extra según la edad del cónyugue. Puede ser 10%, 20% o 30%. 
6. Se calcúla el porcentaje extra según la cantidad de hijos. En este caso, se agrega 10% por cada hijo.
7. Posteriormente se suma el precio base y las cantidades extra. 
8 Finalmente se retorna una alerta con el valor final de la cotización. 

ASPECTOS A MEJORAR: 

Definitivamente este proyecto asienta las bases de la estructura del programa. Sin embargo, aún se puede 
hacer un código modular y mas eficiente, al agregar funciones por ejemplo. Además, es necesario hacer 
test cases para poder arreglar todos los casos en los cuales, el programa podria dar un error. Por ejemplo,
al ingresar letras en vez de números. 

Existen muchas mas funcionalidades que pueden ser agregadas. Como la posibilidad de enviar la cotización al correo,
presentar un resumen de la cotización o agregar mas variables que afecten el valor final. 

También es necesario hacer una UI agradable y fácil de usar. 
