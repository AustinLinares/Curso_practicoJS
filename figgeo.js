console.log("Hello, world!")


function cuadrado(lado, unidad) {
  const perimetro = lado * 4;
  const area = lado * lado;
  console.log(`El perimetro del cuadrado es: ${perimetro} ${unidad}`);
  console.log(`El área del cuadrado es ${area} ${unidad}²`);
}


function rectangulo(base, altura, unidad) {
  const perimetro = base * 2 + altura * 2;
  const area = base * altura;
  console.log(`El perimetro del rectángulo es: ${perimetro} ${unidad}`);
  console.log(`El área del rectángulo es ${area} ${unidad}²`);
}


function triangulo(lado1, lado2, lado3, unidad) {
  const perimetro = lado1 + lado2 + lado3;
  const S = (lado1 + lado2 + lado3)/2;
  const area = Math.sqrt(S * (S - lado1) * (S - lado2) * (S-lado3));
  console.log(`El perimetro del triángulo es: ${perimetro} ${unidad}`);
  console.log(`El área del triángulo es ${area} ${unidad}²`);
}

function circunferencia(radio, unidad) {
  const PI = Math.PI;
  const perimetro = 2 * radio * PI;
  const area = radio * radio * PI;
  console.log(`El perímetro de la circunferencia es : ${perimetro} ${unidad}`);
  console.log(`El área de la circunferencia es : ${area} ${unidad}²`);
}