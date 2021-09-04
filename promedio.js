let arrayPromedio = []

function añadirDatoArray() {
  const inputDatoArray = document.getElementById("InputArray");
  const datoArray = Number(inputDatoArray.value);
  arrayPromedio.push(`${datoArray}`);
}

function promedio() {
  const inputResultado = document.getElementById("resultado")
  let sumaTotal = 0;
  for (let i = 0; i < arrayPromedio.length; i++) {
    sumaTotal = Number(sumaTotal) + Number(arrayPromedio[i]);
  }
  const promedioFinal = sumaTotal / arrayPromedio.length;
  inputResultado.innerText = `El promedio es: ${promedioFinal.toFixed(3)}`
}
