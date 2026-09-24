const ANCHO_CANVA_P = 200;
const ALTO_CANVA_P = 400;
const ANCHO_CANVA_S = 80;
const ALTO_CANVA_S = 80;
const LADO_SECCION = 20;
const COLUMNAS_P = ANCHO_CANVA_P / LADO_SECCION;
const FILAS_P = ALTO_CANVA_P / LADO_SECCION;
const COLUMNAS_S = ANCHO_CANVA_S / LADO_SECCION;
const FILAS_S = ALTO_CANVA_S / LADO_SECCION;

const PIEZA_1 = [[1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], "#ff0000", "#a80000", 4];
const PIEZA_2 = [[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], "#f2ff00", "#aeb700", 2];
const PIEZA_3 = [[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], "#48ff00", "#34b900", 3];
const PIEZA_4 = [[1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], "#00ffea", "#009b8e", 3];
const PIEZA_5 = [[1, 0, 0, 0], [1, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], "#c800ff", "#54009e", 3];
const PIEZA_6 = [[0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], "#ff00cc", "#b3008f", 3];
const PIEZA_7 = [[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0], "#ff9d00", "#c07700", 3];
const PIEZAS = [PIEZA_1, PIEZA_2, PIEZA_3, PIEZA_4, PIEZA_5, PIEZA_6, PIEZA_7];

let piezas_disponibles = 0b1111111;
let pieza_actual;
let pieza_siguiente;

function main() {
    pieza_actual = pieza_siguiente;
    generarPiezaAleatoria();
    actualizarPantalla();
}

function preInicio() {
    generarPiezaAleatoria();
    pieza_actual = pieza_siguiente;
    generarPiezaAleatoria();
    dibujarGrid(ctxP, COLUMNAS_P, FILAS_P, LADO_SECCION, "#132837");
    dibujarGrid(ctxS, COLUMNAS_S, FILAS_S, LADO_SECCION, "#132837");
    dibujarPiezaSiguiente();
    dibujarPiezaActual();
}

function actualizarPantalla() {
    limpiarCanva(ctxP);
    limpiarCanva(ctxS);
    dibujarGrid(ctxP, COLUMNAS_P, FILAS_P, LADO_SECCION, "#132837");
    dibujarGrid(ctxS, COLUMNAS_S, FILAS_S, LADO_SECCION, "#132837");
    dibujarPiezaSiguiente();
    dibujarPiezaActual();
}

function dibujarGrid(contexto, columnas, filas, lado_seccion, color) {
    for (let i = 0; i < columnas; i++) {
        dibujarRectangulo(contexto, (i * lado_seccion) - 1, 0, 2, contexto.canvas.height, color);
    }
    for (let i = 0; i < filas; i++) {
        dibujarRectangulo(contexto, 0, (i * lado_seccion) - 1, contexto.canvas.width, 2, color);
    }
}

function dibujarPieza(ctx, pieza) {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (pieza[i][j] == 1) {
                dibujarRectangulo(ctx, j * LADO_SECCION, i * LADO_SECCION, LADO_SECCION, LADO_SECCION, pieza.at(-2));
                dibujarRectangulo(ctx, (j * LADO_SECCION) + 1, (i * LADO_SECCION) + 1, LADO_SECCION - 2, LADO_SECCION - 2, pieza.at(-3));
            }
        }
    }
}

function dibujarPiezaSiguiente() {
    dibujarPieza(ctxS, pieza_siguiente);
}

function dibujarPiezaActual() {
    dibujarPieza(ctxP, pieza_actual);
}

function generarPiezaAleatoria() {
    let i;
    do {
        i = generarAleatorio(0, PIEZAS.length - 1);
    } while (!(piezas_disponibles & (1 << i)));

    piezas_disponibles = piezas_disponibles & ~(1 << i);
    pieza_siguiente = PIEZAS[i];

    if (piezas_disponibles === 0) {
        piezas_disponibles = 0b1111111;
    }
}

function rotarPieza() {
    let dim = pieza_actual[6];

    if (dim === 2) return;

    let nueva_pieza = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        pieza_actual[4],
        pieza_actual[5],
        pieza_actual[6]
    ];

    nueva_pieza = transponer(dim, nueva_pieza);
    nueva_pieza = reflejar(dim, nueva_pieza);
    pieza_actual = nueva_pieza;
    actualizarPantalla();
}

function transponer(dim, nueva_pieza) {
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            nueva_pieza[i][j] = pieza_actual[j][i];
        }
    }
    return nueva_pieza;
}

function reflejar(dim, nueva_pieza) {
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < Math.floor(dim / 2); j++) {
            let temporal = nueva_pieza[i][j];
            nueva_pieza[i][j] = nueva_pieza[i][dim - 1 - j];
            nueva_pieza[i][dim - 1 - j] = temporal;
        }
    }
    return nueva_pieza;
}