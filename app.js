const nombreUsuario = ['Juan Pablo Neira Palomo', 'Santiago Andres Caicedo Segura', 'German Alejandro Sanchez Gamma'];

// Agrega hasta 4 usuarios nuevos
function agregarUsuario(nombre1, nombre2, nombre3, nombre4, nombre5){
    let agrega = nombreUsuario.push(nombre1, nombre2, nombre3, nombre4, nombre5)
    return agrega;
};




console.log(nombreUsuario);

console.log(agregarUsuario('Laura Sofia Neira', 'Jeison Neira', 'Yanneth Palomo', 'Maria de los Angeles', 'xd'))

//borra o agrega los contactos segun cuantos queramos en la lista
function borrarUsuarios(usuario){
    nombreUsuario.splice(usuario)

}


console.log(borrarUsuarios(8))


//FUNCIONA MEJOR EN CONSOLA WEB








