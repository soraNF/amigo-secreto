
let amigos = [];
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert("Por favor, escribe un nombre para añadir.");
        return;
    }

    if (amigos.map(amigo => amigo.toLowerCase()).includes(nombre.toLowerCase())) {
        alert("Este nombre ya ha sido añadido. Por favor, introduce un nombre diferente.");
        inputAmigo.value = '';
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();

    inputAmigo.value = '';
    inputAmigo.focus();
}

function actualizarListaAmigos() {
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        listaHTML.appendChild(elementoLista);
    }
}

function sortearAmigo() {
  
    if (amigos.length === 0) {
        alert("¡No hay nadie en la lista! Por favor, agrega al menos un nombre para sortear.");
        return;
    }   
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = '<p>Sorteando...</p>';

    setTimeout(() => {
        
        const indiceGanador = Math.floor(Math.random() * amigos.length);     
        const ganador = amigos[indiceGanador];
        resultadoHTML.innerHTML = `<h3>¡El ganador es:</h3><p class="ganador">${ganador} 🥳</p>`;

    }, 2000);//le puse deley para que sea mas dinamico y divertido xd
}

function reiniciar() {
    amigos = [];
    document.getElementById('amigo').value = '';
    actualizarListaAmigos();
    document.getElementById('resultado').innerHTML = '';
}