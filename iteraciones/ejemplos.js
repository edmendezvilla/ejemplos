let rangeOfLetters = {
    from: 'A',
    to: 'E',
  
    [Symbol.iterator]() {
      // Inicializa el iterador
      this.current = this.from;
      return this;
    },
  
    next() {
      // Lógica para obtener el siguiente valor de la iteración
      const charCode = this.current.charCodeAt(0);
  
      if (charCode <= this.to.charCodeAt(0)) {
        const result = { done: false, value: this.current };
        // Avanza al siguiente carácter
        this.current = String.fromCharCode(charCode + 1);
        return result;
      } else {
        // Se ha alcanzado el final de la iteración
        return { done: true };
      }
    }
  };
  
  // Utilizando el objeto iterable en un bucle for..of
  for (let letter of rangeOfLetters) {
    alert(letter);
  }
   