const ANCHO_CANVA_P = 200;
const ALTO_CANVA_P = 400;
const ANCHO_CANVA_S = 50;
const ALTO_CANVA_S = 50;
const LADO_SECCION = 20;
const COLUMNAS = ANCHO_CANVA_P / LADO_SECCION;
const FILAS = ALTO_CANVA_P / LADO_SECCION;

function preInicio() {
    for (let i = 0; i < COLUMNAS; i++) {
        dibujarRectangulo(ctxP, (i * LADO_SECCION) - 1, 0, 2, ctxP.canvas.height, "#132837");
    }
    for (let i = 0; i < FILAS; i++) {
        dibujarRectangulo(ctxP, 0, (i * LADO_SECCION) - 1,  ctxP.canvas.width, 2,"#132837");
    }
}