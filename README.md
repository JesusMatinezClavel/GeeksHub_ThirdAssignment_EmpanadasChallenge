# Enunciado del problema
### Compra de empanadas

...deciden que lo más sensato es utilizar el hecho de que las empanadas se pueden pedir mitad de un tipo y mitad de otro, pagando por ella la media del costo de las dos empanadas enteras. Así, una empanada mitad pollo y mitad vegetariana valdrá (12 + 16)/2 = 14 euros. Sin embargo, no logran decidir cuál es la mejor forma de repartir las empanadas en mitades primero, y en grupos después, para minimizar el precio.

Ayúdales haciendo una función que lo calcule lo más rápido posible: hay decenas de estudiantes hambrientos que dependen de ti.

Las empanadas que han elegido los profesores tienen 3, 4 o 5 ingredientes. La masa de una empanada vale 6 euros, y cada ingrediente adicional vale 2 euros. Así, las empanadas pueden valer 12, 14 o 16 euros. Se garantiza que el número total de empanadas será múltiplo de 3.

### Entrada

La función debe tener tres parámetros de entrada. Cada conjunto de entrada consta de tres enteros, a b c, que son el número de empanadas de 3, 4 y 5 ingredientes, respectivamente. Se garantiza que el número de empanadas, a + b + c, cumple que a + b + c < 40. Además, el número de empanadas es divisible entre 3.

### Salida

Por cada conjunto de entrada, retornar un único entero: la mínima cantidad de euros que se puede pagar para llevarse todas las empanadas.


# Resolución del problema

Resolver este problema me ha resultado un reto más complicado de lo que me pareció en un principio. La primera vez que me enfrenté a él malentendí lo que me pedía el enunciado y pasé varias horas intentando generar las combinaciones de argumentos que cumpliesen las especificaciones del enunciado (menor que 40 y múltiplo de 3), pero más tarde me frustré al darme cuenta de que lo que estaba haciendo no me servía para nada.

La siguiente vez que me aproximé al problema fue tras releer mejor el enunciado y hacerme un esquema en papel. Gracias a esto empecé a jugar con los precios que teníamos y los ejemplos del test y rápidamente me di cuenta de que al sacar la media del precio se cumplía en casi todos los casos de los test, y en los que no se cumplía era por muy poco. Esto me hizo darme cuenta de que estaba en el camino correcto, pero no llegué a dar con la solución hasta que pensé en aplicarle el redondeo, lo cual me hizo respirar más tranquilo al ver que ya había pasado los test.
Pero esta resolución no me pareció la mejor ya que no es exacta (es válida para un problema de matemáticas pero no lo sería para resolver el problema real), por lo que me intenté sacar una función distinta que también cumpliese los test.

Para ello me volví a fijar en los ejemplos del test para estudiarlos mejor, ya que entendía como se dividían los primeros ejemplos:

	| Arguments | Result |
	|  (1,1,1)  |   14   |
	|  (3,3,0)  |   26   |
	|  (2,0,1)  |   14   |
	|-----------|--------|
	| (9,10,11) |  142   |

Pero fue al fijarme en el último ejemplo cuando empecé a ver una manera de resolverlo, ya que al desgranar como se dividiría el gasto en este último ejemplo me di cuenta de que si `a > 0` y `c > 0` el resultado era 14, solo al acabarse las empanadas de 12€ es cuando el precio aumentaba a 16. Siguiendo este camino escribí en papel un método que tenía lógica pero no conseguí que funcionase, por lo que pedí ayuda de ChatGPT para que me confirmase que mi código no tenía algun pequeño error que le impidiese avanzar, pero aparte de algunos pequeños cambios en el código (como que en los `else if` que toman `c = 0` o `a = 0` ya no era necesario añadir un `a--` o `c--`), lo más significativo que me dió fue hacer un `switch` en vez de un `for`, lo cual no me convenció ya que me resultaba más complejo manejar el bucle en si. 
Así que con los consejos que me dió volví a escribir código con `for` y esta vez conseguí resolver el test `(9,10,11)`, y tras organizar mejor los condicionales para que no se pisaran unos a otros conseguí pasar el resto de los test también.

Al código le he añadido algunos condicionales para ejemplos más allá de los test pero soy consciente de que es un código muy aparatoso y que no superará todos los test posibles, al igual que también soy consiente de que habrá maneras más sencillas y que utilizen mejor las matemáticas de lo que yo he hecho, pero no he querido revisar el trabajo de otros compañeros para no influenciarme con nada, ya que quería que la resolución fuese directamente mía.



