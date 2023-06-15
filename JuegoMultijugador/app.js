let main = document.getElementsByTagName('main')[0];
let body = document.getElementsByTagName('body')[0];
main.classList.add('contenedor');

let nFilas = 10;
let nColumnas = 10;

let titulo, div, jugador1, jugador2, objetivo, player1, player2;

titulo = document.createElement('h2');
titulo.classList.add('titulo');
titulo.textContent = 'Multijugador';

body.appendChild(titulo);

document.addEventListener('DOMContentLoaded', pintarCasillas);

function pintarCasillas() {

    for (i = 0; i < nFilas; i++) {
        for (o = 0; o < nColumnas; o++) {
            div = document.createElement('div');
            div.classList.add('casillas');
            div.setAttribute('id', `${i}${o}`);
            main.appendChild(div);

        }

    }
    rellenarCasillas();
}

function rellenarCasillas() {
    objetivo = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    player1 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    player2 = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];

    for (i = 0; i < nFilas; i++) {
        for (e = 0; e < nColumnas; e++) {
            div = document.getElementById(`${i}${e}`);
            if (i == objetivo[0] && e == objetivo[1]) {
                div.classList.add('objetivo');
            }
            if (i == player1[0] && e == player1[1]) {
                div.classList.add('player1');
                div.addEventListener('keyUp', moverFicha);
            }
            if (i == player2[0] && e == player2[1]) {
                div.classList.add('player2');
                div.addEventListener('keyUp', moverFicha);
            }
        }
    }
    moverFicha();
}

function moverFicha(event) {
    console.log(event.target);


}






/**
 * PENDIENTE:
 * 1. Mover casillas.
 * 2. Que hago con los limites.
 * 3. (colision entre dos jugadores. QUE HAGO).
 * 4. Que hago cuando gano.
 * 5. OBGLITAGORIO. Boton reinicio para ejecutar de nuevo la funcion inicio.
 * 6. Contadores para puntuacion??
 * 7. Eliminar evento de teclado cuando hay un ganador.
 * 8. CSS BIEN.
 * 9. OPCIONAL. Contador de tiempo antes de poder iniciar el juego(tablero pintado pero sin posibilidad de ejecutar eventos de teclado)
 */
