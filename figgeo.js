
function cuadrado(lado, unidad) {
  var perimetro = lado * 4;
  var area = lado * lado;
  console.log(`El perimetro del cuadrado es: ${perimetro} ${unidad}`);
  console.log(`El área del cuadrado es ${area} ${unidad}²`);
}


function rectangulo(base, altura, unidad) {
  var perimetro = base * 2 + altura * 2;
  var area = base * altura;
  console.log(`El perimetro del rectángulo es: ${perimetro} ${unidad}`);
  console.log(`El área del rectángulo es ${area} ${unidad}²`);
}


function triangulo(lado1, lado2, lado3, unidad) {
  var perimetro = lado1 + lado2 + lado3;
  var S = (lado1 + lado2 + lado3)/2;
  var area = Math.sqrt(S * (S - lado1) * (S - lado2) * (S-lado3));
  console.log(`El perimetro del triángulo es: ${perimetro} ${unidad}`);
  console.log(`El área del triángulo es ${area} ${unidad}²`);
}

function circunferencia(radio, unidad) {
  var perimetro = 2 * radio * 3.1415;
  var area = radio * radio * 3.1415;
  console.log(`El perímetro de la circunferencia es : ${perimetro} ${unidad}`);
  console.log(`El área de la circunferencia es : ${area} ${unidad}²`);
}