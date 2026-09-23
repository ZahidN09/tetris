const ANCHO_CANVA_P = 200;
const ALTO_CANVA_P = 400;
const ANCHO_CANVA_S = 60;
const ALTO_CANVA_S = 60;
const LADO_SECCION = 20;
const COLUMNAS_P = ANCHO_CANVA_P / LADO_SECCION;
const FILAS_P = ALTO_CANVA_P / LADO_SECCION;
const COLUMNAS_S = ANCHO_CANVA_S / LADO_SECCION;
const FILAS_S = ALTO_CANVA_S / LADO_SECCION;

function preInicio() {
    dibujarGrid(ctxP,COLUMNAS_P,FILAS_P,LADO_SECCION,"#132837");
    dibujarGrid(ctxS,COLUMNAS_S,FILAS_S,LADO_SECCION,"#132837");
}

function dibujarGrid(contexto,columnas,filas,lado_seccion,color) {
    for (let i = 0; i < columnas; i++) {
        dibujarRectangulo(contexto, (i * lado_seccion) - 1, 0, 2, contexto.canvas.height,color );
    }
    for (let i = 0; i < filas; i++) {
        dibujarRectangulo(contexto, 0, (i * lado_seccion) - 1, contexto.canvas.width, 2, color);
    }
}