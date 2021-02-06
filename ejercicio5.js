function capitalize(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

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
        let newPersona = persona(arrayNombres[i], arrayApellidos[i]);
        personas.push(newPersona);
    }
    return personas;
}



let nombres = ["antonio", "gissell", "victor"];
let apellidos = ["cavadas", "gonzalez", "urtusuaztegui"];
let edades = [15, 18, 20];

let resultado = personas(nombres, apellidos);

function agregarEdad(arrayDePersonas, edades) {
    let menoresDeEdad = [];
    let mayoresDeEdad = [];
    let result = [];
    for (let p in arrayDePersonas) {
        arrayDePersonas[p]["edad"] = edades[p];
        if (arrayDePersonas[p].edad < 18){
            menoresDeEdad.push(arrayDePersonas[p]);
        } else {
            mayoresDeEdad.push(arrayDePersonas[p]);
        }
    }
    result.push(menoresDeEdad);
    result.push(mayoresDeEdad);
    return result;
}
let personasSinEdad = (personas(nombres, apellidos));
let personasConEdad = agregarEdad(resultado, edades);
let menoresDeEdad = personasConEdad[0];
let mayoresDeEdad = personasConEdad[1];


