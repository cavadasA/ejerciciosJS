function persona(nombre, apellido) {
    let persona = {};
    nombreCapitalizado = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    apellidoCapitalizado = apellido.charAt(0).toUpperCase() + apellido.slice(1);
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

console.log(personas(nombres, apellidos));


