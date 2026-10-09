function caucularIMC(peso, altura) {
    return peso / (altura * altura)
}

let peso = 86
let altura = 1.79
let imc =  caucularIMC(peso, altura)

// Abaixo do peso <= 18.4
// Peso normal de 18.5 a 24.9
// Sobrepeso >= 25

if (imc <= 18.4) {
    console.log("Você está abaixo do peso");
}
else if (imc <= 24.9) {
    console.log("Você está no peso");
}
else {
    console.log("Você está acima do peso");
}