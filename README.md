# CLASES ABSTRACTAS EN JAVASCRIPT

En este repositorio dejo un ejemplo del funcionamiento de clases abstractas en JavaScriprt para entenderlas en un futuro o por si alguien está interesado en saber como funcionan.

### Notas:
En principio en Javascript no tenemos una forma explícita para indicar que una clase es abstracta, es decir, que no se pueden crear objetos directamente de esa clase y sólo se puede heredar de ella. Es muy sencillo implementar este comportamiento comprobando con this.constructor cual es la clase que se está intentando construir.
```
let Animal = function() {
    if (this.constructor === Animal) {
      throw new Error("Can't instantiate abstract class!");
    }
};
```

En el código que tenemos a continuación, la clase 'Animal' y el método 'say', son abstractos. 
```
Animal.prototype.say = function() {
    throw new Error("Abstract method!");
}
```

Crear una instancia arrojaría un error:
```
new Animal(); // throws
```

Así es como se "hereda" de él:
```
let Cat = function() {
    Animal.apply(this, arguments);
    // Cat initialization...
};
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.say = function() {
    console.log('meow');
}
```

Y así es como hacemos que, en este caso el gato diga 'meow':
```
let cat = new Cat();
cat.say();
```

Eso sería lo mismo que en una clase normal hacer esto:
```
let cat = new Animal('cat');
cat.say();
```

## La herencia prototípica en cadena

Para entender el funcionamiento de las clases abstractas, hay que comprender ha herencia prototípica en cadena.
Cuando se trata de herencia, JavaScript solo tiene una construcción: objetos. Cada objeto tiene una propiedad privada que tiene un vínculo con otro objeto llamado su prototipo. Ese objeto prototipo tiene un prototipo propio, y así sucesivamente hasta que se llega a un objeto con null como prototipo. Por definición, null no tiene prototipo y actúa como el eslabón final en esta cadena de prototipos.
<br>
Si bien esta confusión a menudo se considera una de las debilidades de JavaScript, el modelo de herencia prototípico en sí mismo es, de hecho, más poderoso que el modelo clásico. Por ejemplo, es bastante trivial construir un modelo clásico sobre un modelo prototipo.
<br>
Los objetos JavaScript son "bags" dinámicas de propiedades (denominadas propiedades propias). Los objetos JavaScript tienen un vínculo a un objeto prototipo. Al intentar acceder a una propiedad de un objeto, la propiedad no solo se buscará en el objeto, sino en el prototipo del objeto, el prototipo del prototipo, etc., hasta que se encuentre una propiedad con un nombre coincidente o el final. de la cadena prototipo se alcanza.

Más información en:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
</br>

## En el archivo de JavaScript de este repositorio tienen un ejemplo utilizando un perro y un gato