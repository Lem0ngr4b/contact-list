const nombreUsuario = ["Juan Pablo", "Santiago Andres", "German Alejandro"];

const idUsuario = [1, 2, 3, 4];

const apellidoUsuario = ["Neira Palomo", "Caicedo Segura", "Snachez Gamma"];

const telefUsuario = [3212312, 42341213, 36352531];

const ubicCiudad = ["Bogotá", "Medellin", "Cali"];

const ubiDireccion = ["Avenida Calle 68", "Calle 45 Sur", "Carrera 28c 4"];

// Agrega hasta 4 usuarios nuevos
function agregarUsuario(nombre1, nombre2, nombre3, nombre4, nombre5) {
  let agrega = nombreUsuario.push(nombre1, nombre2, nombre3, nombre4, nombre5);
  return agrega;
}

function agregarId(id1, id2, id3, id4, id5) {
  let agregaid = idUsuario.push(id1, id2, id3, id4, id5);
  return agregaid;
}
function agregarApellido(
  apellido1,
  apellido2,
  apellido3,
  apellido4,
  apellido5
) {
  let agregaApellido = apellidoUsuario.push(
    apellido1,
    apellido2,
    apellido3,
    apellido4,
    apellido5
  );
  return agregaApellido;
}
function agregarTelef(telef1, telef2, telef3, telef4, telef5) {
  let agregaTelef = telefUsuario.push(telef1, telef2, telef3, telef4, telef5);
  return agrega;
}
function agregarCiudad(ciudad1, ciudad2, ciudad3, ciudad4, ciudad5) {
  let agrega = ubicCiudad.push(ciudad1, ciudad2, ciudad3, ciudad4, ciudad5);
  return agrega;
}

function agregarDirecc(direc1, direc2, direc3, direc4, direc5) {
  let agrega = ubiDireccion.push(direc1, direc2, direc3, direc4, direc5);
  return agrega;
}

console.log(nombreUsuario);
console.log(idUsuario);
console.log(apellidoUsuario);
console.log(telefUsuario);
console.log(ubicCiudad);
console.log(ubiDireccion);

console.log(
  agregarUsuario(
    "Jeison Neira",
    "Yanneth Palomo",
    "Laura Sofia Neira",
    "Maria Barreto",
    "XD"
  )
);

console.log();

delete nombreUsuario[3];

nombreUsuario = nombreUsuario.filter((numero) => {
  return numero != undefined;
});

delete idUsuario[3];

idUsuario = idUsuario.filter((id) => {
  return id != undefined;
});

delete apellidoUsuario[3];

apellidoUsuario = apellidoUsuario.filter((apellido) => {
  return apellido != undefined;
});

delete telefUsuario[3];

telefUsuario = telefUsuario.filter((numerotel) => {
  return numerotel != undefined;
});

delete ubicCiudad[3];

ubicCiudad = ubicCiudad.filter((ciudad) => {
  return ciudad != undefined;
});


delete ubiDireccion[3];

ubiDireccion = ubiDireccion.filter((direccion) => {
  return direccion != undefined;
});


















