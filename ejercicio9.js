let nombres = ["antonio", "gissell", "victor"];
let apellidos = ["cavadas", "gonzalez", "cavadas"];
let edades = [15, 18, 20];
let personasSinEdad = (personas(nombres, apellidos));
let personasConEdad = agregarEdad(personas(nombres, apellidos), edades);
let menoresDeEdad = personasConEdad[0];
let mayoresDeEdad = personasConEdad[1];
let body = document.querySelector("body");

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

function agregarEdad(arrayDePersonas, edades) {
    let menoresDeEdad = [];
    let mayoresDeEdad = [];
    let result = [];
    for (let p in arrayDePersonas) {
        arrayDePersonas[p]["edad"] = edades[p];
        if (arrayDePersonas[p].edad < 18) {
            menoresDeEdad.push(arrayDePersonas[p]);
        } else {
            mayoresDeEdad.push(arrayDePersonas[p]);
        }
    }
    result.push(menoresDeEdad);
    result.push(mayoresDeEdad);
    return result;
}

function crearListado(etiqueta, array) {
    let newList = document.createElement(etiqueta);
    body.appendChild(newList);
    let displayTitulo = false;
    for (let p in array) {
        let personas = htmlDePersona(array[p]);
        if (personas.classList.contains("menorDeEdad") && displayTitulo === false) {
            newList.append("Menores de Edad");
            displayTitulo = true;
        } else if (personas.classList.contains("mayorDeEdad") && displayTitulo === false) {
            newList.append("Mayores de Edad");
            displayTitulo = true;
        }
        newList.appendChild(personas);
    }
}

function htmlDePersona(objetoDePersona) {
    let li = document.createElement("li");
    if (!("edad" in objetoDePersona)) {
        let texto = objetoDePersona.nombre + " " + objetoDePersona.apellido;
        li.innerHTML = texto;
        return li;
    } else {
        if (objetoDePersona.edad < 18) {
            li.append("Menores de edad");
            li.classList.add("menorDeEdad");
            let texto = objetoDePersona.nombre + " " + objetoDePersona.apellido + " " + objetoDePersona.edad;
            li.innerHTML = texto;
            return li;
        } else {
            li.append("Mayores de edad");
            li.classList.add("mayorDeEdad")
            let texto = objetoDePersona.nombre + " " + objetoDePersona.apellido + " " + objetoDePersona.edad;
            li.innerHTML = texto;
            return li;
        }
    }
}

function descendientes(objetoDePersona, objetoDePersona_a_comprobar) {
    let apellido_a_comprobar = objetoDePersona["apellido"].toLowerCase().split(" ");
    let apellido_a_comprobar2 = objetoDePersona_a_comprobar["apellido"].toLowerCase().split(" ");
    if (apellido_a_comprobar[0] === apellido_a_comprobar2[0] || apellido_a_comprobar[1] === apellido_a_comprobar2[0]) {
        objetoDePersona_a_comprobar["descendientes"] = [];
        objetoDePersona_a_comprobar.descendientes.push(objetoDePersona);
        console.log(objetoDePersona_a_comprobar)
        return objetoDePersona_a_comprobar;
    }
}

window.onload = function () {

    let button = document.getElementById("submitButton");
    button.addEventListener("click", function () {
        let nombre = document.getElementById("inputNombre").value;
        let apellido = document.getElementById("inputApellido").value;
        let edad = [];
        edad.push(parseInt(document.getElementById("inputEdad").value));
        let newPersona = [];
        newPersona.push(persona(nombre, apellido));
        let newPersonaConEdad = agregarEdad(newPersona, edad);
        if (edad[0] < 18) {
            let list = document.getElementsByClassName("menorDeEdad");
            let listItem = htmlDePersona(newPersonaConEdad[0][0]);
            list[list.length - 1].parentNode.appendChild(listItem);
        } else if (edad[0] >= 18) {
            let list = document.getElementsByClassName("mayorDeEdad");
            let listItem = htmlDePersona(newPersonaConEdad[1][0]);
            list[list.length - 1].parentNode.appendChild(listItem);
        }
    })

    crearListado("ul", personasSinEdad);
    crearListado("ul", menoresDeEdad);
    crearListado("ul", mayoresDeEdad);

}



