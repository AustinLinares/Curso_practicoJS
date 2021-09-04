let arrayMediana = []

function añadirDatoArray() {
  const inputDatoArray = document.getElementById("InputArray");
  const datoArray = Number(inputDatoArray.value);
  arrayMediana.push(`${datoArray}`);
}

function esPar(numero) {
  if(numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function mediana() {
  const inputResultado = document.getElementById("resultado");
  arrayMediana.sort(function(a,b){return a - b;});
  if (esPar(arrayMediana.length)){
    const elemento1 = arrayMediana[parseInt(arrayMediana.length / 2)];
    const elemento2 = arrayMediana[parseInt(arrayMediana.length / 2) - 1];
    const medianafinal = (Number(elemento1) + Number(elemento2)) / 2;
    inputResultado.innerText = `La mediana es: ${medianafinal}`;
  } else {
    const medianafinal = arrayMediana[parseInt(arrayMediana.length / 2)];
    inputResultado.innerText = `La mediana es: ${medianafinal}`;
  }
}