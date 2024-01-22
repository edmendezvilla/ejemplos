let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };
  
  // Usamos Object.entries para obtener un array de pares clave/valor
  let entries = Object.entries(prices);
  
  // Usamos el método map para duplicar los valores
  let doubledEntries = entries.map(([key, value]) => [key, value * 2]);
  
  // Usamos Object.fromEntries para convertir el array resultante de nuevo a un objeto
  let doublePrices = Object.fromEntries(doubledEntries);
  
  // Imprimimos el nuevo objeto con precios duplicados
 alert (doublePrices);
  // Salida esperada: { banana: 2, orange: 4, meat: 8 }