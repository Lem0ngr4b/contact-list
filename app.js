// Lista de contactos

let contactos = [];

// Funcion de agregar contactos

function agregarContactos(id, nombre, apellido, telefono, ubicacion, ciudad) {
    let nuevoContacto = {
        
        id: id,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        ubicacion: ubicacion,
        ciudad: ciudad
    };

    contactos.push(nuevoContacto)
}

//funcion para eliminar contactos

function eliminarContacto(id) {
    contactos = contactos.filter(contacto => contacto.id !== id);
}

//funcion para actualizar contactos

function actualizarContacto(id, nuevoTelefono, nuevaUbicacion, nuevaCiudad) {
    contactos.forEach(contacto => {
        if(contacto.id === id){
            contacto.telefono = nuevoTelefono;
            contacto.ubicacion = nuevaUbicacion;
            contacto.ciudad = nuevaCiudad;


        }
    });
}


//pruebas

//agregar contactos

agregarContactos(1, "Juan", "Pérez", "123456789", "Ubicación 1", "Medellín");
agregarContactos(2, "Sofia", "suarez", "322324232", "Ubicacion 2", "Bogota");

//Eliminar contactos por id

eliminarContacto(2)

//Actualizar contactos por id

actualizarContacto(1, "322346624", "Ubicacion 3", "Valle del cauca")

//console log para mostrar los contactos

console.log(contactos);






