// Creamos un Set llamado 'frutas' para almacenar frutas únicas
let frutas = new Set();

// Agregamos frutas al Set
frutas.add('Manzana');
frutas.add('Banana');
frutas.add('Manzana'); // La segunda adición de 'Manzana' no tiene efecto, ya que Set solo permite valores únicos.

// Verificamos si una fruta específica está en el Set
alert(frutas.has('Banana')); // Imprimirá true
alert(frutas.has('Naranja')); // Imprimirá false

// Iteramos sobre los valores del Set
for (let fruta of frutas) {
  alert(fruta);
}

// Salida esperada:
// Manzana
// Banana