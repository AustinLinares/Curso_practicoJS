const cupones = ["DSCT16", "25OFF", "30SALE", "dsct16", "25off", "30sale"];
const descuentos = [0.84, 0.75, 0.70, 0.84, 0.75, 0.70];
 
function cupon() {
  const inputPrecioInicial = document.getElementById("inputPrecioSinDescuento");
  const inputCodigoDescuento = document.getElementById("inputCuponDescuento");
  const inputResultado = document.getElementById("inputResultadoConDescuento");
  const precioInicial = Number(inputPrecioInicial.value);
  const cuponDescuento = inputCodigoDescuento.value;
  const index = cupones.indexOf(`${cuponDescuento}`);
  const descuento = descuentos[index];
  if(descuento) {
    const precioFinalConDescuento = precioInicial * descuento;
    inputResultado.innerText = `El precio final a pagar será: ${precioFinalConDescuento}`;
  } else {
    inputResultado.innerText = "Ingresa un código de cupón válido";
  }
}