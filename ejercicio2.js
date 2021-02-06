function personas (arrayNombres, arrayApellidos){
    let personas = [];
    for (let i = 0; i < arrayNombres.length; i++){
        for (let j = 0; j < arrayApellidos.length; j++){
            let persona = {};
            persona["nombre"] = arrayNombres[i];
            persona["apellido"] = arrayApellidos[j];
            personas.push(persona);
        }
    }
    return personas;
}

let nombres = ["Antonio", "Gissell", "Victor"];
let apellidos = ["Cavadas", "Gonzalez", "Urtusuaztegui"];

console.log(personas(nombres, apellidos));