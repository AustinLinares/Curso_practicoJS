
function cuadrado() {
  const inputLado = document.getElementById("InputLadoCuadrado");
  const inputUnidad = document.getElementById("InputUnidadCuadrado");
  const lado = inputLado.value;
  const unidad = inputUnidad.value;
  const perimetro = lado * 4;
  const area = lado * lado;
  alert(`El perimetro del cuadrado es: ${perimetro} ${unidad}`);
  alert(`El área del cuadrado es ${area} ${unidad}²`);
}

function rectangulo() {
  const inputBase = document.getElementById("InputBaseRectangulo");
  const inputAltura = document.getElementById("InputAlturaRectangulo");
  const inputUnidad = document.getElementById("InputUnidadRectangulo");
  const base = Number(inputBase.value);
  const altura = Number(inputAltura.value);
  const unidad = inputUnidad.value;
  const perimetro = base * 2 + altura * 2;
  const area = base * altura;
  alert(`El perimetro del rectángulo es: ${perimetro} ${unidad}`);
  alert(`El área del rectángulo es ${area} ${unidad}²`);
}

function triangulo() {
  const inputLado1 = document.getElementById("InputLadoTriangulo1");
  const inputLado2 = document.getElementById("InputLadoTriangulo2");
  const inputLado3 = document.getElementById("InputLadoTriangulo3");
  const inputUnidad = document.getElementById("InputUnidadTriangulo");
  const lado1 = Number(inputLado1.value);
  const lado2 = Number(inputLado2.value);
  const lado3 = Number(inputLado3.value);
  const unidad = inputUnidad.value;
  const perimetro = lado1 + lado2 + lado3;
  const S = (lado1 + lado2 + lado3)/2;
  const area = Math.sqrt(S * (S - lado1) * (S - lado2) * (S-lado3));
  alert(`El perimetro del triángulo es: ${perimetro} ${unidad}`);
  alert(`El área del triángulo es ${area} ${unidad}²`);
}

function circulo() {
  const inputRadio = document.getElementById("InputRadio");
  const inputUnidad = document.getElementById("InputUnidadCirculo");
  const radio = inputRadio.value;
  const unidad = inputUnidad.value;
  const PI = Math.PI;
  const perimetro = 2 * radio * PI;
  const area = radio * radio * PI;
  alert(`El perímetro de la circunferencia es : ${perimetro} ${unidad}`);
  alert(`El área de la circunferencia es : ${area} ${unidad}²`);
}

function isoceles() {
  const inputLado1 = document.getElementById("InputLadoIsoceles1");
  const inputLado2 = document.getElementById("InputLadoIsoceles2");
  const inputLado3 = document.getElementById("InputLadoIsoceles3");
  const inputUnidad = document.getElementById("InputUnidadIsoceles");
  const lado1 = Number(inputLado1.value);
  const lado2 = Number(inputLado2.value);
  const lado3 = Number(inputLado3.value);
  const unidad = inputUnidad.value;
  if(lado1 == lado2) {
    const altura = Math.sqrt(((4 * lado3 ** 2 * lado2 ** 2) - (lado2 ** 2 - lado1 ** 2 + lado3 ** 2)** 2))/(2 * lado3);
    alert(`La altura del triángulo es: ${altura} ${unidad}`);
  } else if(lado2 == lado3) {
    const altura = Math.sqrt(((4 * lado1 ** 2 * lado2 ** 2) - (lado2 ** 2 - lado3 ** 2 + lado1 ** 2)** 2))/(2 * lado1);
    alert(`La altura del triángulo es: ${altura} ${unidad}`);
  } else if(lado1 == lado3) {
    const altura = Math.sqrt(((4 * lado2 ** 2 * lado1 ** 2) - (lado1 ** 2 - lado3 ** 2 + lado2 ** 2)** 2))/(2 * lado2);
    alert(`La altura del triángulo es: ${altura} ${unidad}`);
  } else {
    alert("Ingresa los valores de un triángulo isóceles")
  }
}