const canvasPrincipal = document.getElementById('areaJuego');
const ctxP = canvasPrincipal.getContext('2d');

const canvasSecundario = document.getElementById('siguientePieza');
const ctxS = canvasSecundario.getContext('2d');


function limpiarCanva(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function dibujarRectangulo(ctx, X, Y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(X, Y, ancho, alto);
}