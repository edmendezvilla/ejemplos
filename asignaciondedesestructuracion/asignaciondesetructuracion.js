// Tenemos un array con información del usuario
let userData = ["John", "Doe", 30, "john.doe@email.com"];

// Aplicamos la asignación desestructurante para extraer valores individuales
let [firstName, lastName, age, email] = userData;

// Mostramos la información
alert("Nombre:", firstName);
alert("Apellido:", lastName);
alert("Edad:", age);
alert("Email:", email);