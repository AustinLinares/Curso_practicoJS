function Descuento() {
  const inputPrecio1 = document.getElementById("inputPrecioInicial");
  const inputDsct = document.getElementById("inputDescuento");
  const inputResultado = document.getElementById("resultado")
  const precioInicial = Number(inputPrecio1.value);
  const descuento = Number(inputDsct.value);
  const precioFinal = precioInicial * (1 - descuento / 100);
  inputResultado.innerText = `El precio final será: ${precioFinal.toFixed(2)}`;
}