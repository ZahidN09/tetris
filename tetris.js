const ANCHO_CANVA_P = 200;
const ALTO_CANVA_P = 400;
const ANCHO_CANVA_S = 80;
const ALTO_CANVA_S = 80;
const LADO_SECCION = 20;
const COLUMNAS_P = ANCHO_CANVA_P / LADO_SECCION;
const FILAS_P = ALTO_CANVA_P / LADO_SECCION;
const COLUMNAS_S = ANCHO_CANVA_S / LADO_SECCION;
const FILAS_S = ALTO_CANVA_S / LADO_SECCION;

const PIEZA_1 = [[1, 0, 0,0], [1, 0, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], "#ff0000", "#a80000"];
const PIEZA_2 = [[1, 1, 0,0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], "#f2ff00", "#aeb700"];
const PIEZA_3 = [[1, 1, 0,0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], "#48ff00", "#34b900"];
const PIEZA_4 = [[1, 0, 0,0], [1, 0, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], "#00ffea", "#009b8e"];
const PIEZA_5 = [[1, 0, 0,0], [1, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0], "#c800ff", "#54009e"];
const PIEZA_6 = [[0, 1, 1,0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], "#ff00cc", "#b3008f"];
const PIEZA_7 = [[1, 1, 0,0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0], "#ff9d00", "#c07700"];
const PIEZAS = [PIEZA_1,PIEZA_2,PIEZA_3,PIEZA_4,PIEZA_5,PIEZA_6,PIEZA_7];

function preInicio() {
    dibujarGrid(ctxP, COLUMNAS_P, FILAS_P, LADO_SECCION, "#132837");
    dibujarGrid(ctxS, COLUMNAS_S, FILAS_S, LADO_SECCION, "#132837");
    let pieza_actual = PIEZA_7;
    dibujarPieza(pieza_actual);
}

function dibujarGrid(contexto, columnas, filas, lado_seccion, color) {
    for (let i = 0; i < columnas; i++) {
        dibujarRectangulo(contexto, (i * lado_seccion) - 1, 0, 2, contexto.canvas.height, color);
    }
    for (let i = 0; i < filas; i++) {
        dibujarRectangulo(contexto, 0, (i * lado_seccion) - 1, contexto.canvas.width, 2, color);
    }
}

function dibujarPieza(pieza) {
    for (let i = 0; i < pieza.length - 1; i++) {
        for (let j = 0; j < pieza[i].length; j++) {
            if (pieza[i][j] == 1) {
                dibujarRectangulo(ctxS, j * LADO_SECCION, i * LADO_SECCION, LADO_SECCION, LADO_SECCION, pieza.at(-1));
                dibujarRectangulo(ctxS, (j * LADO_SECCION) + 1, (i * LADO_SECCION) + 1, LADO_SECCION - 2, LADO_SECCION - 2, pieza.at(-2));
            }
        }
    }
}