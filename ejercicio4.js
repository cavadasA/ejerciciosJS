function persona(nombre, apellido) {
    let persona = {};
    nombreCapitalizado = capitalize(nombre);
    apellidoCapitalizado = capitalize(apellido);
    persona["nombre"] = nombreCapitalizado;
    persona["apellido"] = apellidoCapitalizado;
    return persona;
}

function personas(arrayNombres, arrayApellidos) {
    let personas = [];
    for (let i = 0; i < arrayNombres.length; i++) {
        for (let j = 0; j < arrayApellidos.length; j++) {
            let newPersona = persona(arrayNombres[i], arrayApellidos[j]);
            personas.push(newPersona);
        }
    }
    return personas;
}

let nombres = ["antonio", "gissell", "victor"];
let apellidos = ["cavadas", "gonzalez", "urtusuaztegui"];


function capitalize(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

console.log(personas(nombres, apellidos));



console.log(agregarEdad(edades));
agregarEdad(persona, edades);